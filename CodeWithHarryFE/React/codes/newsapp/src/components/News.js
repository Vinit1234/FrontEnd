rgs, count, rgb) {
      let cursor = functionArgs.head;
      let args = [];
      let wasValue = false;
      while (cursor !== null) {
        const { type, value } = cursor.data;
        switch (type) {
          case "Number":
          case "Percentage":
            if (wasValue) {
              return;
            }
            wasValue = true;
            args.push({
              type,
              value: Number(value)
            });
            break;
          case "Operator":
            if (value === ",") {
              if (!wasValue) {
                return;
              }
              wasValue = false;
            } else if (wasValue || value !== "+") {
              return;
            }
            break;
          default:
            return;
        }
        cursor = cursor.next;
      }
      if (args.length !== count) {
        return;
      }
      if (args.length === 4) {
        if (args[3].type !== "Number") {
          return;
        }
        args[3].type = "Alpha";
      }
      if (rgb) {
        if (args[0].type !== args[1].type || args[0].type !== args[2].type) {
          return;
        }
      } else {
        if (args[0].type !== "Number" || args[1].type !== "Percentage" || args[2].type !== "Percentage") {
          return;
        }
        args[0].type = "Angle";
      }
      return args.map(function(arg) {
        let value = Math.max(0, arg.value);
        switch (arg.type) {
          case "Number":
            value = Math.min(value, 255);
            break;
          case "Percentage":
            value = Math.min(value, 100) / 100;
            if (!rgb) {
              return value;
            }
            value = 255 * value;
            break;
          case "Angle":
            return (value % 360 + 360) % 360 / 360;
          case "Alpha":
            return Math.min(value, 1);
        }
        return Math.round(value);
      });
    }
    function compressFunction(node, item) {
      let functionName = node.name;
      let args;
      if (functionName === "rgba" || functionName === "hsla") {
        args = parseFunctionArgs(node.children, 4, functionName === "rgba");
        if (!args) {
          return;
        }
        if (functionName === "hsla") {
          args = hslToRgb(...args);
          node.name = "rgba";
        }
        if (args[3] === 0) {
          const scopeFunctionName = this.function && this.function.name;
          if (args[0] === 0 && args[1] === 0 && args[2] === 0 || !/^(?:to|from|color-stop)$|gradient$/i.test(scopeFunctionName)) {
            item.data = {
              type: "Identifier",
              loc: node.loc,
              name: "transparent"
            };
            return;
          }
        }
        if (args[3] !== 1) {
          node.children.forEach((node2, item2, list) => {
            if (node2.type === "Operator") {
              if (node2.value !== ",") {
                list.remove(item2);
              }
              return;
            }
            item2.data = {
              type: "Number",
              loc: node2.loc,
              value: _Number.packNumber(args.shift())
            };
          });
          return;
        }
        functionName = "rgb";
      }
      if (functionName === "hsl") {
        args = args || parseFunctionArgs(node.children, 3, false);
        if (!args) {
          return;
        }
        args = hslToRgb(...args);
        functionName = "rgb";
      }
      if (functionName === "rgb") {
        args = args || parseFunctionArgs(node.children, 3, true);
        if (!args) {
          return;
        }
        item.data = {
          type: "Hash",
          loc: node.loc,
          value: toHex(args[0]) + toHex(args[1]) + toHex(args[2])
        };
        compressHex(item.data, item);
      }
    }
    function compressIdent(node, item) {
      if (this.declaration === null) {
        return;
      }
      let color = node.name.toLowerCase();
      if (NAME_TO_HEX.hasOwnProperty(color) && cssTree.lexer.matchDeclaration(this.declaration).isType(node, "color")) {
        const hex = NAME_TO_HEX[color];
        if (hex.length + 1 <= color.length) {
          item.data = {
            type: "Hash",
            loc: node.loc,
            value: hex
          };
        } else {
          if (color === "grey") {
            color = "gray";
          }
          node.name = color;
        }
      }
    }
    function compressHex(node, item) {
      let color = node.value.toLowerCase();
      if (color.length === 6 && color[0] === color[1] && color[2] === color[3] && color[4] === color[5]) {
        color = color[0] + color[2] + color[4];
      }
      if (HEX_TO_NAME[color]) {
        item.data = {
          type: "Identifier",
          loc: node.loc,
          name: HEX_TO_NAME[color]
        };
      } else {
        node.value = color;
      }
    }
    exports2.compressFunction = compressFunction;
    exports2.compressHex = compressHex;
    exports2.compressIdent = compressIdent;
  }
});

// node_modules/csso/cjs/replace/index.cjs
var require_replace = __commonJS({
  "node_modules/csso/cjs/replace/index.cjs"(exports2, module2) {
    "use strict";
    var cssTree = require_cjs2();
    var Atrule = require_Atrule4();
    var AttributeSelector = require_AttributeSelector3();
    var Value = require_Value3();
    var Dimension = require_Dimension3();
    var Percentage = require_Percentage3();
    var _Number = require_Number3();
    var Url = require_Url3();
    var color = require_color();
    var handlers = {
      Atrule,
      AttributeSelector,
      Value,
      Dimension,
      Percentage,
      Number: _Number.Number,
      Url,
      Hash: color.compressHex,
      Identifier: color.compressIdent,
      Function: color.compressFunction
    };
    function replace(ast) {
      cssTree.walk(ast, {
        leave(node, item, list) {
          if (handlers.hasOwnProperty(node.type)) {
            handlers[node.type].call(this, node, item, list);
          }
        }
      });
    }
    module2.exports = replace;
  }
});

// node_modules/csso/cjs/restructure/prepare/createDeclarationIndexer.cjs
var require_createDeclarationIndexer = __commonJS({
  "node_modules/csso/cjs/restructure/prepare/createDeclarationIndexer.cjs"(exports2, module2) {
    "use strict";
    var cssTree = require_cjs2();
    var Index = class {
      constructor() {
        this.map = /* @__PURE__ */ new Map();
      }
      resolve(str) {
        let index = this.map.get(str);
        if (index === void 0) {
          index = this.map.size + 1;
          this.map.set(str, index);
        }
        return index;
      }
    };
    function createDeclarationIndexer() {
      const ids = new Index();
      return function markDeclaration(node) {
        const id = cssTree.generate(node);
        node.id = ids.resolve(id);
        node.length = id.length;
        node.fingerprint = null;
        return node;
      };
    }
    module2.exports = createDeclarationIndexer;
  }
});

// node_modules/csso/cjs/restructure/prepare/specificity.cjs
var require_specificity = __commonJS({
  "node_modules/csso/cjs/restructure/prepare/specificity.cjs"(exports2, module2) {
    "use strict";
    var cssTree = require_cjs2();
    function ensureSelectorList(node) {
      if (node.type === "Raw") {
        return cssTree.parse(node.value, { context: "selectorList" });
      }
      return node;
    }
    function maxSpecificity(a, b) {
      for (let i = 0; i < 3; i++) {
        if (a[i] !== b[i]) {
          return a[i] > b[i] ? a : b;
        }
      }
      return a;
    }
    function maxSelectorListSpecificity(selectorList) {
      return ensureSelectorList(selectorList).children.reduce(
        (result, node) => maxSpecificity(specificity(node), result),
        [0, 0, 0]
      );
    }
    function specificity(simpleSelector) {
      let A = 0;
      let B = 0;
      let C = 0;
      simpleSelector.children.forEach((node) => {
        switch (node.type) {
          case "IdSelector":
            A++;
            break;
          case "ClassSelector":
          case "AttributeSelector":
            B++;
            break;
          case "PseudoClassSelector":
            switch (node.name.toLowerCase()) {
              case "not":
              case "has":
              case "is":
              case "matches":
              case "-webkit-any":
              case "-moz-any": {
                const [a, b, c] = maxSelectorListSpecificity(node.children.first);
                A += a;
                B += b;
                C += c;
                break;
              }
              case "nth-child":
              case "nth-last-child": {
                const arg = node.children.first;
                if (arg.type === "Nth" && arg.selector) {
                  const [a, b, c] = maxSelectorListSpecificity(arg.selector);
                  A += a;
                  B += b + 1;
                  C += c;
                } else {
                  B++;
                }
                break;
              }
              case "where":
                break;
              case "before":
              case "after":
              case "first-line":
              case "first-letter":
                C++;
                break;
              default:
                B++;
            }
            break;
          case "TypeSelector":
            if (!node.name.endsWith("*")) {
              C++;
            }
            break;
          case "PseudoElementSelector":
            C++;
            break;
        }
      });
      return [A, B, C];
    }
    module2.exports = specificity;
  }
});

// node_modules/csso/cjs/restructure/prepare/processSelector.cjs
var require_processSelector = __commonJS({
  "node_modules/csso/cjs/restructure/prepare/processSelector.cjs"(exports2, module2) {
    "use strict";
    var cssTree = require_cjs2();
    var specificity = require_specificity();
    var nonFreezePseudoElements = /* @__PURE__ */ new Set([
      "first-letter",
      "first-line",
      "after",
      "before"
    ]);
    var nonFreezePseudoClasses = /* @__PURE__ */ new Set([
      "link",
      "visited",
      "hover",
      "active",
      "first-letter",
      "first-line",
      "after",
      "before"
    ]);
    function processSelector(node, usageData) {
      const pseudos = /* @__PURE__ */ new Set();
      node.prelude.children.forEach(function(simpleSelector) {
        let tagName = "*";
        let scope = 0;
        simpleSelector.children.forEach(function(node2) {
          switch (node2.type) {
            case "ClassSelector":
              if (usageData && usageData.scopes) {
                const classScope = usageData.scopes[node2.name] || 0;
                if (scope !== 0 && classScope !== scope) {
                  throw new Error("Selector can't has classes from different scopes: " + cssTree.generate(simpleSelector));
                }
                scope = classScope;
              }
              break;
            case "PseudoClassSelector": {
              const name = node2.name.toLowerCase();
              if (!nonFreezePseudoClasses.has(name)) {
                pseudos.add(`:${name}`);
              }
              break;
            }
            case "PseudoElementSelector": {
              const name = node2.name.toLowerCase();
              if (!nonFreezePseudoElements.has(name)) {
                pseudos.add(`::${name}`);
              }
              break;
            }
            case "TypeSelector":
              tagName = node2.name.toLowerCase();
              break;
            case "AttributeSelector":
              if (node2.flags) {
                pseudos.add(`[${node2.flags.toLowerCase()}]`);
              }
              break;
            case "Combinator":
              tagName = "*";
              break;
          }
        });
        simpleSelector.compareMarker = specificity(simpleSelector).toString();
        simpleSelector.id = null;
        simpleSelector.id = cssTree.generate(simpleSelector);
        if (scope) {
          simpleSelector.compareMarker += ":" + scope;
        }
        if (tagName !== "*") {
          simpleSelector.compareMarker += "," + tagName;
        }
      });
      node.pseudoSignature = pseudos.size > 0 ? [...pseudos].sort().join(",") : false;
    }
    module2.exports = processSelector;
  }
});

// node_modules/csso/cjs/restructure/prepare/index.cjs
var require_prepare = __commonJS({
  "node_modules/csso/cjs/restructure/prepare/index.cjs"(exports2, module2) {
    "use strict";
    var cssTree = require_cjs2();
    var createDeclarationIndexer = require_createDeclarationIndexer();
    var processSelector = require_processSelector();
    function prepare(ast, options) {
      const markDeclaration = createDeclarationIndexer();
      cssTree.walk(ast, {
        visit: "Rule",
        enter(node) {
          node.block.children.forEach(markDeclaration);
          processSelector(node, options.usage);
        }
      });
      cssTree.walk(ast, {
        visit: "Atrule",
        enter(node) {
          if (node.prelude) {
            node.prelude.id = null;
            node.prelude.id = cssTree.generate(node.prelude);
          }
          if (cssTree.keyword(node.name).basename === "keyframes") {
            node.block.avoidRulesMerge = true;
            node.block.children.forEach(function(rule) {
              rule.prelude.children.forEach(function(simpleselector) {
                simpleselector.compareMarker = simpleselector.id;
              });
            });
          }
        }
      });
      return {
        declaration: markDeclaration
      };
    }
    module2.exports = prepare;
  }
});

// node_modules/csso/cjs/restructure/1-mergeAtrule.cjs
var require_mergeAtrule = __commonJS({
  "node_modules/csso/cjs/restructure/1-mergeAtrule.cjs"(exports2, module2) {
    "use strict";
    var cssTree = require_cjs2();
    var { hasOwnProperty: hasOwnProperty2 } = Object.prototype;
    function addRuleToMap(map, item, list, single) {
      const node = item.data;
      const name = cssTree.keyword(node.name).basename;
      const id = node.name.toLowerCase() + "/" + (node.prelude ? node.prelude.id : null);
      if (!hasOwnProperty2.call(map, name)) {
        map[name] = /* @__PURE__ */ Object.create(null);
      }
      if (single) {
        delete map[name][id];
      }
      if (!hasOwnProperty2.call(map[name], id)) {
        map[name][id] = new cssTree.List();
      }
      map[name][id].append(list.remove(item));
    }
    function relocateAtrules(ast, options) {
      const collected = /* @__PURE__ */ Object.create(null);
      let topInjectPoint = null;
      ast.children.forEach(function(node, item, list) {
        if (node.type === "Atrule") {
          const name = cssTree.keyword(node.name).basename;
          switch (name) {
            case "keyframes":
              addRuleToMap(collected, item, list, true);
              return;
            case "media":
              if (options.forceMediaMerge) {
                addRuleToMap(collected, item, list, false);
                return;
              }
              break;
          }
          if (topInjectPoint === null && name !== "charset" && name !== "import") {
            topInjectPoint = item;
          }
        } else {
          if (topInjectPoint === null) {
            topInjectPoint = item;
          }
        }
      });
      for (const atrule in collected) {
        for (const id in collected[atrule]) {
          ast.children.insertList(
            collected[atrule][id],
            atrule === "media" ? null : topInjectPoint
          );
        }
      }
    }
    function isMediaRule(node) {
      return node.type === "Atrule" && node.name === "media";
    }
    function processAtrule(node, item, list) {
      if (!isMediaRule(node)) {
        return;
      }
      const prev = item.prev && item.prev.data;
      if (!prev || !isMediaRule(prev)) {
        return;
      }
      if (node.prelude && prev.prelude && node.prelude.id === prev.prelude.id) {
        prev.block.children.appendList(node.block.children);
        list.remove(item);
      }
    }
    function rejoinAtrule(ast, options) {
      relocateAtrules(ast, options);
      cssTree.walk(ast, {
        visit: "Atrule",
        reverse: true,
        enter: processAtrule
      });
    }
    module2.exports = rejoinAtrule;
  }
});

// node_modules/csso/cjs/restructure/utils.cjs
var require_utils6 = __commonJS({
  "node_modules/csso/cjs/restructure/utils.cjs"(exports2) {
    "use strict";
    var { hasOwnProperty: hasOwnProperty2 } = Object.prototype;
    function isEqualSelectors(a, b) {
      let cursor1 = a.head;
      let cursor2 = b.head;
      while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
        cursor1 = cursor1.next;
        cursor2 = cursor2.next;
      }
      return cursor1 === null && cursor2 === null;
    }
    function isEqualDeclarations(a, b) {
      let cursor1 = a.head;
      let cursor2 = b.head;
      while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
        cursor1 = cursor1.next;
        cursor2 = cursor2.next;
      }
      return cursor1 === null && cursor2 === null;
    }
    function compareDeclarations(declarations1, declarations2) {
      const result = {
        eq: [],
        ne1: [],
        ne2: [],
        ne2overrided: []
      };
      const fingerprints = /* @__PURE__ */ Object.create(null);
      const declarations2hash = /* @__PURE__ */ Object.create(null);
      for (let cursor = declarations2.head; cursor; cursor = cursor.next) {
        declarations2hash[cursor.data.id] = true;
      }
      for (let cursor = declarations1.head; cursor; cursor = cursor.next) {
        const data = cursor.data;
        if (data.fingerprint) {
          fingerprints[data.fingerprint] = data.important;
        }
        if (declarations2hash[data.id]) {
          declarations2hash[data.id] = false;
          result.eq.push(data);
        } else {
          result.ne1.push(data);
        }
      }
      for (let cursor = declarations2.head; cursor; cursor = cursor.next) {
        const data = cursor.data;
        if (declarations2hash[data.id]) {
          if (!hasOwnProperty2.call(fingerprints, data.fingerprint) || !fingerprints[data.fingerprint] && data.important) {
            result.ne2.push(data);
          }
          result.ne2overrided.push(data);
        }
      }
      return result;
    }
    function addSelectors(dest, source) {
      source.forEach((sourceData) => {
        const newStr = sourceData.id;
        let cursor = dest.head;
        while (cursor) {
          const nextStr = cursor.data.id;
          if (nextStr === newStr) {
            return;
          }
          if (nextStr > newStr) {
            break;
          }
          cursor = cursor.next;
        }
        dest.insert(dest.createItem(sourceData), cursor);
      });
      return dest;
    }
    function hasSimilarSelectors(selectors
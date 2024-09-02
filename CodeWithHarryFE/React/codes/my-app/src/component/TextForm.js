import React, { useState } from "react";

export default function TextForm(props) {
  // hooks
  // const [text, setText] = useState("Enter text here");

  const [text, setText] = useState("");
  // Calling setText inside this function puts React into infinite loop
  // and breaks the application.
  // setText("Some new text");  //Illegal

  const [word_count, setWordCount] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    // setText("You have clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Upper Case.","success");
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange event caught");

    //This allows us to write into textarea
    //otherwise text inside textArea doesnt change
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lower Case.","success");
  };

  const handleClear = () => {
    setText("");
    setWordCount("");
    props.showAlert("Text Cleared!","success");
  };

  const handleWordCount = () => {
    let str = text;
    // "Peter Piper picked a peck of pickled peppers.A peck of pickled peppers Peter Piper picked.If Peter Piper picked a peck of pickled peppers,Where’s the peck of pickled peppers Peter Piper picked?";

    let all_words = str.toLowerCase().trim().split(/[\s?,.]+/);
    let obj_keys = new Set(all_words);
    console.log(obj_keys);

    let word_count_map = {};

    obj_keys.forEach((word) => {
      if (word.length > 0) {
        word_count_map[word] = 0;
      }
    });

    all_words.forEach((word) => {
      if (obj_keys.has(word) && word.length > 0) {
        word_count_map[word] += 1;
      }
    });

    console.log(word_count_map);

    const sortable = Object.fromEntries(
      Object.entries(word_count_map).sort(([, a], [, b]) => b - a)
    );
    
    // Throws an error: Objects Are Not Valid as a React Child
    // Throws the error as the component received an object instead of a valid React child element 
    //(such as strings, numbers, or React elements, but not arrays or objects
    // setWordCount(sortable)
    setWordCount(JSON.stringify(sortable));
    // console.log("...................");
    // console.log(sortable);
    props.showAlert("Word Cound Analysis shown below.","success");

  };


  // Copies text to Clipboard
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!","success");
  }

  // Removes extra spaces
  const handleExtraSpaces = ()=>{
    setText(text.trim().split(/[\s]+/).join(" "));
    props.showAlert("Removed extra spaces.","success");

  }

  return (
    <>
      <div style={{color:props.modeContrast==="dark"?"#343a40":"white"}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">
          Example textarea
        </label> */}
          {/* <label htmlFor="myBox" className="form-label">
          Example textarea
        </label> */}
          <textarea
            className="form-control"
            id="myBox"
            style={{backgroundColor:props.modeContrast==="dark"?"white":"#343a40", color:props.modeContrast==="dark"?"#343a40":"white"}}
            rows="3"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button disabled={text.trim().length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.trim().length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.trim().length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear text
        </button>
        <button disabled={text.trim().length===0} className="btn btn-primary mx-2 my-2" onClick={handleWordCount}>
          Count Words
        </button>
        <button disabled={text.trim().length===0} className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy 
        </button>
        <button disabled={text.trim().length===0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>

      </div>

      <div className="container my-3" style={{color:props.modeContrast==="dark"?"#343a40":"white"}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.trim().length > 0 ? text.trim().split(/\s+/).length : 0} words, {text.trim().length}{" "}
          letters
        </p>
        <p>{text.trim().length === 0 ? 0:0.008 * text.trim().split(/\s+/).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.trim().length>0?text:"Nothing to Preview!"}</p>
      </div>

      <div className="container my-5" style={{color:props.modeContrast==="dark"?"#343a40":"white"}}>
        <h2>Word count analysis</h2>
        <p>{word_count}</p>
      </div>
    </>
  );
}

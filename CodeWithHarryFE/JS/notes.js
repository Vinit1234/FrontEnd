

==========================================================================
# Techniques

- The modern approach:

Today, browsers support the async and defer attributes on scripts. These attributes tell the browser it's safe to continue parsing while the scripts are being downloaded.
According to http://caniuse.com/#feat=script-async, 
and https://caniuse.com/?search=defer
97.78% of all browsers support this.

<script src="path/to/script1.js" defer></script>
<script src="path/to/script2.js" defer></script>

Scripts with the defer attribute are executed in order (i.e. first script 1, then script 2). This also does not block the browser.
Unlike async scripts, defer scripts are only executed after the entire document has been loaded.

----------------------------------------------------
JS events:
click
contextmenu
mouseover/mouseout
mousedown/mouseup
mousemove

submit 
focus

DOMContentLoaded

transitionend
---------------------------------------------------

DOM is tree-structure representation of HTML Elements which is created by browser.



==========================================================================
# Tips


==========================================================================
#Read References:

https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup



## Tricky concepts========================================


let obj1 = {
    greeting: "Good Morning",
    names: ["Harry", "Drake", "Celina", "Helly", "Sam"],
    speak() {
        // Inside anonymous function "this" refers to obj1
        this.names.forEach((student) => {
            console.log(this.greeting + " " + student);
        });

        // Inside named function "this" refers to the function itself
        this.names.forEach(function s(student) {

            // in named function this refers to global object ie, [object Window]
            if(student=="Harry"){
                console.log("Global object window:")
                console.log(this);
                console.log(obj1.greeting); //Good morning
            }

        });
    }
}
obj1.speak();





// Ref: https://legacy.reactjs.org/docs/create-a-new-react-app.html#create-react-app

/* Add the following as key-value in VSCode Settings>Emmet>Emmet: Include Languages:
javascript javascriptreact */



## Creating React App

// Downloads react app package 
> npm install create-react-app

// OR recommended way:
// doesn't download react app package
> npx create-react-app my-app
> cd my-app
> npm start
> ctrl+c => closes React server


// For production ready optimised project use
> npm run build
/* 

Success! Created my-app at K:\Personal_Projects\FrontEnd\CodeWithHarryFE\React\codes\my-app

Inside that directory, you can run several commands:

> npm start
    Starts the development server.

>  npm run build
    Bundles the app into static files for production.

>  npm test
    Starts the test runner.

>  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

>  cd my-app
>  npm start 

The packages can be reinstalled at client's m/c using package.json 
and package-lock.json using cmd:
> npm install


  */

// ========================================
/* 

Inside my-app created by npx command:

1. index.html

index.html => parent html => K:\Personal_Projects\FrontEnd\CodeWithHarryFE\React\codes\my-app\public\index.html

All the code written in react will be converted to html and 
put inside body tag of index.html.

Here you can add links to Bootstrap and other external libraries and files.


2. index.js (AKA Entry point)

index.js => main JS code of react goes here. All this code is converted into 
html and put into body tag of index.html .


3. App.js => component => put into index.html

All the code you write in App.js is injected into index.html via index.js by following:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


*/

===================================================
JSX is similar to HTML. It just has a few syntax different to HTML as:
- className instead of class (since class is reserved keyword in JS)
- htmlFor instead of for (for => reserved keyword in JS)
- tabIndex insted of tabindex

The following code of App.js is written in JSX:

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


- Here, return has parenthesis (). This is done as 
JS might automatically add semicolon in JSX code 
and entire JSX code will finally.

Usually only one tag with className="App" is expected 
to be returned. <div className="App">
You can also add other tags 

But if there are multiple tags to be returned, it is recommended 
to write JSX code in JSX fragment InputEvent, <>.....</>

- Adding styles to App.css will change the styling to the code
present in App.js; You can also add other styleing in a new CSS file 
and import it to App.js


In JSX tags should always be closed; unterminated JSX contents are not allowed:
<img src="" alt="" > //Error
<img src="" alt="" /> // Allowed
<Navbar/>   //Allowed



NOTE: 
The following string is not converted into HTML tag, 
and is purely considered as a String.

let name = "<b>Vinit</b>";

This for safety of your app; 
to avoid any malicious JS code in a string to get executed in your app.


A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.

Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.

const element= (
  <h1 className="greeting">
    Hello, AudioWorkletNode
  </h1>
)


Single Page Applications (in contrast to Multipage Apps):
- makes request to the application server via internet and,
- receives HTML,CSS and JS from the server. 
But now JS takes over responsibilities of future requests from client.
- The subsequent requests update only the part(s) of web page; 
are updated by the loaded JS from the 1st request.
This: 
- reduces/saves the bandwith required to run the app 
- reduces the unnecessary data transportation
- reduces the load on server
and hence is efficient

NOTE: Whenever you give the React code to the clients,
you delete the node_modules package and then give.
This is because it contains packages that can be 
re-created at the client's machine' and reduces the 
size of the app (in transport).
The packages can be reinstalled using package.json 
and package-lock.json using cmd:
> npm install


Add Bootstrap to React App:

In public>index.html

Add Bootstrap JS after the body tag:

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>


Add Bootstrap CSS in head tag:

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

{/* ==================================================================== */}
{/* ## Props and Prop typs in React */}

NOTE: The is special naming for JS modules:
- Their extension should be .mjs instead of js => module1.mjs
- Modules should reside in src folder

- To understan Props we make a new component folder in src folder.
Components are always named with Capital (first) letter eg, Navbar.js

- To make React Function Based component write:
rfc + tab

- Define a component like Navbar.js and insert into you App.js 
using componet's tag <Navbar/>
This way you can define your entire component in their respective js files,
and insert the Response. tags in App.js . This gives a clean look to App.js

You can dynamically change parts of your component by passing Props.
Eg. <Navbar title="TextUtils"/>
Here title="TextUtils" is Props.
These Props are collected via their respective constructor function.
Eg. In Navbar.js
function Navbar(props){
....
<a href="/"> {props.title} </a>
}

If you want to pass multiple props, you can group those values 
into object and pass them to constructor function and then 
use them in their constructor function.

NOTE: Props are read only. You should not modify them 
inside the component's constructor function.

---------------------------------------------------------------
## PropTypes (inside respective component.js)

Means type of data expected in the  ie, 
propTypes are used for type checking.

If the prop's value does not match with the type mentioned in 
propType, you'll get a Warning: Failed PropType 

- To import PropTypes write:
impt + tab

- PropTypes.string
pts + tab


Eg. In Navbar.js:

import PropTypes from 'prop-types'

Navbar.propTypes= {title: PropTypes.string,
                    aboutText: PropTypes.string,
                    }

>> DefaultProps: 
These are like default values used in a function.
These define the default values to be used if props 
are not passed in the component's tag.

Eg. Navbar.defaultProps={
    title:"Set-Title-Here",
    aboutText: "About-Text-here"

}

>> isRequired:
If some prop value is mandatory use isRequired.
If the mandatory value is not passed 
isRequired will not give an error if the value is
already set by DefaultProps.

Eg. Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
                    }


NOTE: react-dom.development.js:86 Warning: Navbar: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
    at Navbar (http://localhost:3000/static/js/bundle.js:272:25)
    at App

================================================================
## Understanding State & Handling Events in React

Copy paste Bootstrap>Forms>Form Controls in TextForm.js

useState is a hook.
Syntax:
const [state, setState] = useState(initialState)

import React, {useState} from "react";

export default function TextForm(props) {
    // hooks
    const [text, setText] = useState("Enter text here");

    //Event handling
    const handleOnChange=(event)=>{
      console.log("handleOnChange event caught");

      //This allows us to write into textarea
      //otherwise text inside textArea doesnt change
      //changing state of component
      setText(event.target.value);
  }

    return (
      <div className="mb-3">
        <textarea  className="form-control"
          id="myBox" rows="3"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
    )
    }

Here text is called a state, whose value can be changed only by using set function ie, setText();
Here text variable will be used inside the component.
To update the value of text, we cannot reassign it directly like text="new text".
Instead we need to use function setText (or whatever function you mention in the hook) 
to set the text value.

<nav className="navbar navbar-expand-lg  navbar-dark bg-dark">


Q. What Causes the “Objects Are Not Valid as a React Child” Error?

- Including an Object in JSX code throws error:
    Invariant Violation: Objects are not valid as a React child

- You'll need to either reference a property of the object that is a string value or convert the Object to a string representation that is desirable. One option might be JSON.stringify if you actually want to see the contents of the Object.

- The error message implies that the component received an object instead of a valid React child element (such as strings, numbers, or React elements, but not arrays or objects). The primary cause of this error is passing an invalid data type and non-serializable data as a child.

Ways  to avoid this error:
  1. Converting Objects to Strings or Numbers
  2. Rendering Arrays Correctly With the map() Method
  3. Using Conditional Rendering to Avoid Rendering Invalid Data Types and handle edge cases.
  4. Avoid passing non-serializable data as children




Read:
https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

https://stackoverflow.com/questions/33117449/invariant-violation-objects-are-not-valid-as-a-react-child

https://kinsta.com/knowledgebase/objects-are-not-valid-as-a-react-child/
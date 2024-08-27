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


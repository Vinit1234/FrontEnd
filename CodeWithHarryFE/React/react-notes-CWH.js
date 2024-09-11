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
- for CSS syles use camel case InputEvent, instead of background-color, use backgroundColor.

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



==================================================================================
Ref: https://prathapreddy-mudium.medium.com/react-js-react-dom-development-js-16317-5000c75a64e7

Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.

This typically happens when there’s a state update being triggered inside the render method or as a result of rendering. To resolve this issue, you need to identify and fix the cause of the infinite re-rendering loop.

Make sure you are not directly updating the state inside the render method. State updates should be placed inside event handlers, lifecycle methods, or functions called within the component.

Solution:
1. Do not directly update the state inside the render method.
2. Check your useEffect hooks for dependencies and ensure that they are set up correctly. An incorrect dependency array can cause infinite re-renders.
3. Be cautious of recursive function calls.
4. Circular dependencies between components or hooks can sometimes lead to infinite re-renders. Ensure there are no circular dependencies in your code.



Bad:

function MyComponent() {
  const [count, setCount] = useState(0);

  setCount(count + 1); // Incorrect, don't update state inside render
}


Good:

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1); // Correct, update state in an event handler
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}


NOTE:
Ref: https://stackoverflow.com/questions/74627673/uncaught-error-too-many-re-renders-react-limits-the-number-of-renders-to-preve

In React, a component re-renders whenever one of these 2 cases occurs:

  1. Whenever there is a change in the component's local state.
  2. Whenever any of it's parent components themselves are re-rendered.

===========================================================================

NOTE:
<div className="container my-3" style={{color:props.modeContrast==="dark"?"#343a40":"white"}}>
Observe:
style={{color:props.modeContrast==="dark"?"#343a40":"white"}}
The 1st pair of curly braces is to indicate that it is JS code.
The 2nd pair of curly braces is used to make an object {}

lly,
style={{backgroundColor:props.modeContrast==="dark"?"white":"#343a40", color:props.modeContrast==="dark"?"#343a40":"white"}}

=============================================================================
## Adding + Auto Dismissing Alert Messages


function Alert(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{props.alert.type}:</strong> {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

TypeError: Cannot read properties of null (reading 'type')

When you set a state to null and without updating it use it in your 
components, you get this TypeError.

QuickFix:

function Alert(props) {
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{props.alert.type}:</strong> {props.alert.msg}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
    </div>
  );
}

{/* ================================================================= */}
## Changing the App's title dynamically & adding favicons to TextUtils

- Change the title from public>index.html
- Google "favicon generator" end get a favicon.
  - save the favicon in public folder and edit index.html

- Google Search Central - tool to score SEO performance of your web app.
- You can change the apps title dynamically from App component too.
Eg. document.title=`TextUtils-${mode_contrast}`;

================================================
## React Router Setup + Usage

Install react router dom package:
Ref: https://reactrouter.com/en/main/start/tutorial

> cd app_folder_name
> npm install react-router-dom

--------IMP--------xxxxxxxxx--------------IMP-----------------
NOTE:
Ref: https://reactrouter.com/en/main/upgrading/v5

More tutorial: https://www.freecodecamp.org/news/how-to-use-react-router-version-6/

In react-router-dom v6, 

1. "Switch" is replaced by routes "Routes".
import { Routes ,Route } from 'react-router-dom';

2. Replace "component" with "element"
<Route path='/' element={<Home/>} />

NOTE: replace "path" by "exact path" otherwise React will match partial matches too.
ie, it will match "/users" and "/users/home" both and redirect to path="/users" (which we do not expect).
<Route exact path='/' element={<Home/>} />

Your component along with HTML enclosing it should go here.


3. Replace all links like <a href="/"></a> tags on respective components as
<Link to="/"></Link>

Ref: https://stackoverflow.com/questions/43087007/react-link-vs-a-tag-and-arrow-function
<a></a> tags reload the entire page, hence make the app slow. Reloading reset the application states.
Hence use <Link></Link>


======================================================
## Building + Hosting React App For free on Github Pages 

Steps Reference:
https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson

1. Makes your app as static app and makes a build package.
> npm run build

2. OPen build package on VSCode and open with Live Server (Just press Go Live).

3. Comment Routes and Link tags from app as GitHub Pages doesn’t support routers.

Now to deploy:

1: Add homepage to package.json (Rename myusername and my-app)
"homepage": "https://myusername.github.io/my-app",

2. Install gh-pages
> npm install --save gh-pages

3. Add the following scripts in your package.json:
  
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",

  The predeploy script will run automatically before deploy is run.

4. Run the following:
> npm run deploy

5. Go to github.com > Settings > Pages > Select Source branch to:
gh-pages

6. Uninstall gh-pages:
> npm uninstall gh-pages

======================================================
## Purchasing a Domain + Hosting TextUtils on a VPS 

1. Check if the app is running properly 
> npm start

2. Build the app 
> npm run build

3. Login to DigitalOcean. Open VPS. Create Droplet.
If Droplet is already running for some othe app, 
destroy it and the rebuild it. 

4. Login to digital ocean account via Powershell on PC.
If you forgot password, go to Access> Reset root password. 
Copy IPV4. Paste it to your powershell on PC as:
> ssh root@<IPV4-here>
> password: <Enter password sent to your email>

5. Install nginx. 
> sudo apt update

6. Allow nginx through firewall:
> sudo ufw app list
> sudo ufw allow 'Nginx Full'

Now open server IP address (ie, IVP4 from DigitalOcean) on Browser.

7. Use file zilla app:
    1. Enter DigitalOCean details on it and press QuickConnect.
    2 . Search on Remote site /var/www/html and delete file index_nginx-debian.html
    3. Copy paste your App's build folder contents in  /var/www/html

8. Refesh IPV4 opened in your browser and you'll see your build running.

9. Now Purchase a domain(eg. from GoDaddy) and point this IPV4 address on it.
 eg, mytextutils.com

10. Open Domain manager on godaddy.com :
      1. DNS Manangement> Records 
      Edit value :"Parked" to value : <IPV4_here>
  
11. Open mytextutils.com and you'll open your app 
deployed on DigitalOcean.

12. You can also enable HTTPS by adding SSL certificate.


=============================================================
## Fixed minor bugs:

1. Add .trim() to count words/letters only and not blank spaces in TextForm.
2. Fix non-blank word minutes read in TextForm.
3. Fix CLS (Cumulative Layout Shift) in Alert component.
4. Fix About to change into Dark or Light mode on toggling mode from Navbar.
5. Change meta description, title in indexedDB.html for SEO.
6. Change TextForm heading in App.js for SEO.
7. Remove changing of title while toggling dark/light mode in App.js
8. Disable all buttons if text is empty. In TextForm.js, set in button:
    disabled={text.trim().length===0}

9. Google certbot for nginx and install it and obtain SSL certificate for your app.
10. Remove text selection after Copytext is pressed, add following to handleCopy() in TextForm:
    document.getSelection().removeAllRanges() 

11. Relpace split(" ") by split(/\s+/) in TextForm to count words on newline. Otherwise 
    words on newline are considered as 1 word only as string was split by blankspace only.

12. If in About, down arrows are not visible in dark mode add filter: invert(1); to following 
class of acordion:
.accordion-button::after {
    filter: invert(1);
    }

13. On TextForm "Home" is always highlighted. Remove the "active" class its link tag.

14. In TextForm since you are using navigator api, you dont need to select or deselect text as:
const handleCopy=()=>{
    let txtData= document.getElementById("myBox");
    txtData.select();
    navigator.clipboard.writeText(txtData.value);
    document.getSelection().removeAllRanges() 
    props.showAlert("Text copied to clipboard!","success");
  }

Edit it to:

const handleCopy=()=>{
    navigator.clipboard.writeText(txtData.value);
    props.showAlert("Text copied to clipboard!","success");
  }

=============================================================================
check the link to add blue mode and other modes:
https://youtu.be/Ghp1Mi43dxQ?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt



===========================================================================
## Introduction to Class based components 
## Component Structure of our NewsMonkey React App

rcc + tab => React Class based Component

1. Remove default function based App component code and 
replace it with rcc+tab code.

2.  clear code in index.css

3. In index.html => 
  - add Bootstrap CSS, JS and Popper
  - rename title and meta description for SEO

4. Make a folder src> component. Here we'll keep all components.
   - Make Navbar component and rcep+tab = React Class Export Component With Proptotype
   - Copy-paste bootstrap's navbar code inside it.
   - Replace class= with className= (Do not replace component's keyword "class"); tabindex with tabIndex.
   - Close all tags </>.


NOTE: render() is a lifecycle method. When React loads a component, a series of methods are executed.
render() renders HTML on screen after JSX is compiles into HTML.

5. Make News and NewsItem component. Add NewsItem tag into News component.
  Add News tag into App component (ie, App.js)

6. Copy paste sample JSON response from NewApi documentation page into sampleOutput.json.
Ref: https://newsapi.org/docs/get-started

GET https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

7. Paste Bootstrap Card component code into NewsItem.js and edit it into JSX.
    Organise the NewsItems in New.js using Bootstrap rows and columns.



NOTE: In React class-based component, if writing constructor(), it is compulsary to call super()
inside constructor().

export class News extends Component {
      constructor(){
        super();
        console.log("")
      }

      render() {
        . . . .
      }
}

Remember: constructor() will run for each object if class. 
Eg. If there are 10 NewItems tags used, constructor will run 10 times.

NOTE: props are not meant to be changed ie, Read-only
props can be used to set state.
states can be changed using setState();
state is used to display the changes on the webpage without reloading it.

8. Copy paste articles from sampleOutput.json in NewsItem 
constructor 

NOTE: ctrl+shift+r = clear cache and reload


*** Warning: Each child in a list should have a unique "key" prop.
NOTE: Whenever you iterate over element/components, then you must 
provide a unique key to each item returned.

-To keep the new cards (NewsItems) of uniform size clip the strings into same size as:

<NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} 
imageUrl={element.urlToImage} newsUrl={element.url}/>


Also make sure that images are of same size to maintain the uniform size.

NOTE: Sequence:
constructor() then render() then componentDidMount()
componentDidMount() is a lifecycle method which automatically runs after render().


## Adding Previous & Next Buttons to populate NewsItems

- In News.js:

- Disable previous button if page <=1
<button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>

NOTE: Use "this" with handlers defined in the class component.
Use props using "this"
Eg. `https://newsapi.org/v2/top-headlines?country=us&apiKey=15732b52d5f64d8fabd83b1f45a1a62c&page=1&pageSize=${this.props.pageSize}`


NOTE: In News API you can set &pageSize in url to set the number of results to return per page.
Eg. "https://newsapi.org/v2/top-headlines?country=us&apiKey=15732b52d5f64d8fabd83b1f45a1a62c&page=1&pageSize=20"

will display only 20 results from page1

================================================================
## Adding loading spinner & variable pageSize to NewsMonkey 

> Google for spinner as: create spinner gif 
Eg. https://icons8.com/preloaders/


NOTE: To check if there is any mistake in the url you are hitting:
Open Devtools on Chrome (by Inspect) > Network >Filter > add some keyword of url and check it.

NOTE:
ERROR in ./src/components/Spinner.js 5:0-47
Module not found: Error: You attempted to import ../../public/loading.gif which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
You can either move it inside src/, or add a symlink to it from project's node_modules/.

Add Spinner component and in News.js add:
{this.state.loading && <Spinner/>}

and this.setState({loading:true});

and combine the conditions as :
{!this.state.loading && this.state.articles.map((element) => {....}}

=====================================================
##Adding Categories & propTypes to NewsMonkey React App

Add the following to News.js

static defaultProps={
  country:"us",
  pageSize:8
}

static propType={
  country: PropTypes.string,
  pageSize: PropTypes.number,
}

- Add the following link items to Navbar.js
    business
    entertainment
    generalhealth
    science
    sports
    technology

- Pass category to <News/> from App.js


- Set Router to set routes on the NewsMonkey app, to open 
the news category wise when selected from Navbar.

- Till now we have used <a href="...."></a> ; 
hence complete NewsMonkey application reloads on each request.
We need to use <Link to="...."/> instead to render components in place 
without reloading the entire page.


================================================================
## Fetching News category wise in NewsMonkey React App 

> npm install react-router-dom

Import and add Router,Routes, Route in App.js 
Change <a href=""> tags to <Link to> in Navbar.js

After this, when you click any category on the Navbar, the page 
is not updated with the category news. It gets updated only when 
the page is refreshed.
To fix this, you need to (force) remount the component when the category is clicked.
(as React doesn't feel need to update as the component is already present there.')

  - first give key to each News component in App.js
  <Routes>
    <Route exact path='/' element={<News key="general" pageSize={5} country="us" category="general"/>}></Route>
  </Routes>


==============================================================
## Adding time, author and news source to News React App | Complete React Course in Hindi #32

Add date and author from the requested JSON data into NewsItem 
Use Bootstrap Cards> Image caps to display author and date.
Use Bootstrap Badges to show publisher.


================================================================
## Refactoring News component to use the same function | Complete React Course in Hindi #33

Many functions in News.js have repititive code, refactor it into a separate function.
Refactor the following:

handlePrevClick = async ()=>{
  console.log(">> handlePrevClick");
  let url =
  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15732b52d5f64d8fabd83b1f45a1a62c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`

  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
    page:this.state.page-1,
    articles:parsedData.articles,
    loading:false
  });
}


============================================================================
## React Component Lifecycle & Lifecycle methods | Complete React Course in Hindi #34

NOTE: To use props inside a constructor, pass prop as an argument to 
both constructor and super.
Eg. In News.js:

constructor(props) {
  super(props);
  console.log(">> NewsItem constructor called");
  this.state = {
    // articles: this.articles,
    articles: [],
    loading: false,
    page:1,
  };
  document.title=this.props.category;
}


## React Lifecycle Methods:
Ref: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

>>> React Component Lifecycle

The series of events that happen from the mounting of a React component to its Unmounting.

• Mounting - Birth of your component
• Update - Growth of your component
• Unmount - Death of your component

>>> Methods in React Component Lifecycle

• The render() method is used to render HTML of the component in react. This method is required for a class based component to render the DOM. It runs during the mounting and updating of your component. Render() method should be pure ie you cannot modify state inside it!

• The componentDidMount() method runs after the component output has been rendered to the DOM.

• The componentDidUpdate() method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.

• The componentWill Unmount() lifecycle method is called just before the component is unmounted and destroyed. Usually used to perform cleanups



===============================================================
## Adding Infinite Scroll to NewsMonkey | Complete React Course in Hindi #35

https://www.npmjs.com/package/react-infinite-scroll-component

> npm i react-infinite-scroll-component

In News.js: 

 // for infinite scroll
 fetchMoreData = async () => {
  this.setState({page: this.state.page+1});
  // this.updateNews();
  let url =
`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15732b52d5f64d8fabd83b1f45a1a62c&page=${this.state.page}&pageSize=${this.props.pageSize}`
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
    articles:this.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
    loading:false
  });

};

{/* Add react infinite scroll after installing */}
<InfiniteScroll
// dataLength={this.state.items.length}
dataLength={this.state.articles.length}
next={this.fetchMoreData}
// hasMore={true}
hasMore={this.articles.length !== this.state.totalResults}
// loader={<h4>Loading...</h4>}
loader={<Spinner/>}
>
<div className="container">
  <div className="row">
    { this.state.articles.map((element) => {
      return (
        <div key={element.url} className="col-md-4">
          <NewsItem
            title={element.title? element.title.slice(0, 45):""}
            description={element.description?element.description.slice(0, 88):""}
            imageUrl={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/news/1024/branded_news/ab06/live/bf46bec0-6966-11ef-ae46-19f76aad857d.jpg"}
            newsUrl={element.url}
            author={element.author} date={element.publishedAt}
            source={element.source.name}
            category={this.props.category}
          />
        </div>
      );
    })}
  </div>
</div>
</InfiniteScroll>



- Comment external div and wrap everything in <></> to remove 
horizontal scroll bar when <InfiniteScroll> is added.

<>
  {/* <div className="container my-3"> */}
  .
  .
  .
  {/* <div/> */}
</>


NOTE:
1. For "Encountered two children with the same key" error, in map function use index  
{this.state.articles.map((element,index) => {
 return <div className="col-md-4" key = {index}>


 // ===============================================================
## Adding a top loading bar to NewsMonkey | Complete React Course in Hindi #36

https://www.npmjs.com/package/react-top-loading-bar

> npm i react-top-loading-bar

In App.js:

import LoadingBar from 'react-top-loading-bar'

state={
  progress:0
}

setProgress = (progress)=>{
  this.setState({
    progress:progress
  });
}

<LoadingBar
    color='#f11946'
    progress={this.state.progress}
  />



NOTE:

Replace the following attribute of button in Navbar 
from "/navbarSupportedContent" to "#navbarSupportedContent"
<button
  data-bs-target="#navbarSupportedContent"
  >

Otherwise we get an error:
Uncaught SyntaxError: Failed to execute 'querySelectorAll' on 'Element': '/navbarSupportedContent' is not a valid selector.

Add to NewsItem to make bagde appear on right corner:

<div style={
  {display:"flex",
   justifyContent:"flex-end",
   position:"absolute",
   right:"0",
  }
}>


// ======================================================================
## Hiding API Key by Adding Custom Environment Variables | Complete React Course in Hindi #37

Ref: https://create-react-app.dev/docs/adding-custom-environment-variables/

Exposing your API key is prone to be misused.
`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15732b52d5f64d8fabd83b1f45a1a62c&page=${this.state.page}&pageSize=${this.props.pageSize}`

Keep your api in a new file .env.local . 
It is already added in gitignore file too.

NOTE: Any environment variable with prefix react_app is 
accessible in your react app directly in App.js as:
apiKey = process.env.REACT_APP_NEWS_API_KEY;

And pass it as props to News component and replace it in the url.

let url =
`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`

After adding key in file you need to reastart app to reload the file otherwise you get 
error:
GET https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=undefined&page=1&pageSize=15 401 (Unauthorized)


// ========================================================================
## Introduction to React Hooks | Complete React Course in Hindi #38

NOTE: Prefer Function Based Components over 
Class based components. In this tutorial we just needed to 
learn Class based component to have the ability read and 
modify existing codes written with it.


What are React Hooks?

* Features of Class based components in function based components
* It allows you to use state and other React features without writing a class.
* Hooks are the functions which "hook into" React state and lifecycle features from function components

Commonly used Hooks:

1. useState: 
- sets initial value of state
- updates value of state
- can be used multiple times

2. useEffect
- similar to componentDidMount()
- put an effect(eg show alert etc) after state gets modified ; aka side effect

3. useContext
- In case of complex nested components (tree), 
use useContext to send the props across the tree 
without having to perform prop-drill ie, 
keeping on passing props to inner components until 
the target inner component receives the prop.

4. useRef
- returns mutable reference object 

// =================================================================
## Changing Class based NewsMonkey components to Functional based | Complete React Course in Hindi #39

NOTe: A React application can be Class based or Function based or a mix of both.

Convert Navbar from Class based component into Function based component.
1. remove class and use arrow function.
2. remove render()
3. pass props as function argument
4. replace this.props with props
5. cut paste defaultProps and propTypes at the end of function (Google 'proptypes in functional components React')
Eg. 

See Navbar2.js

const NewsItem2 = (props)=>{
//   render() {
// let {title, description, imageUrl, newsUrl, author, date, source, category}=this.props;
let {title, description, imageUrl, newsUrl, author, date, source, category} = props;

}

6. replace static with component name for defaultProps and propType as (Refer News2.js):
Eg.
// static defaultProps={
News.defaultProps={
  country:"us",
  pageSize:8,
  category:"general"
}

7. import useEffect and useState from React, 
remove constructor and initialize states as (Refer News2.js):

 const [articles, setArticles] = useState([]);
 const [loading, setLoading] = useState(true);
 const [page, setPage] = useState(1);
 const [totalResults, setTotalResults] = useState(0);

8. Replace all setState() to individual setState functions ie:
Eg.
Convert the following :
this.setState({
  articles:parsedData.articles,
  totalResults: parsedData.totalResults,
  loading:false
});


To:
setArticles(parsedData.articles);
setTotalResults(parsedData.totalResults);
setLoading(false);


9. Replace componentDidMount() with useEffect() as:
(use useEffect snippet)

useEffect(() => {
  this.updateNews();
  }, [])

10. Remove render().

11. All methods of class must be const.

12. Remove all this.state.

13. Remove all this.setState() to individual set state ie,

Replace:
this.setState({
  articles:articles.concat(parsedData.articles),
  totalResults: parsedData.totalResults,
});

With:
setArticles(articles.concat(parsedData.articles));
setTotalResults(parsedData.totalResults);

14. Add export default App; in the end of App.js





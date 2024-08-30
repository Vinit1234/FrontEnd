// import logo from "./logo.svg";
import "./App.css";
import About from "./component/About";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import Navbar2 from "./component/Navbar2";
import TextForm from "./component/TextForm";
import { useState } from "react";


// let name = "Vinit";
// let mode_choice = "dark";
let mode_contrast = "dark";
function App() {
  // A React component re-renders whenever there is a change in the component's local state.
  // the following Creates error as App gets randomly loaded frequently 
  // and set mode_choice to dark randomly
  // let mode_choice = "dark";

  // const [mode, setMode] = useState("");
  const [modeClass, setModeClass] = useState("");
  
  // Uncaught Error: Too many re-renders.
  // Do not directly update the state inside the render method.
  // if (mode_choice==="dark"){
  //   setMode("navbar-dark bg-dark")
  // }else{
  //   setMode("bg-body-tertiary");
  // }

  const modeSetter= ()=>{
    console.log("1.>>>>>>>>>>",mode_contrast)
    /* if(modeBlue==="blue"){
      // change Bg to blue
      // think how to set "dark again" when modeBlue is set as null
      document.body.style.backgroundColor="blue";
      setModeBlue(null);
    } 
    else  */
    if (mode_contrast==="dark"){
      mode_contrast="light";
      setModeClass("navbar-dark bg-dark")
      document.body.style.backgroundColor="#343a40"
      showAlert("Dark mode has been enabled", "success");
      
    }else{
      mode_contrast="dark";
      setModeClass("bg-body-tertiary");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success");
    }
    console.log("2.>>>>>>>>>>",mode_contrast)
    document.title=`TextUtils-${mode_contrast}`;
  }

  // Uncaught Error: Too many re-renders.
  // Do not directly update the state inside the render method. 
  // Call eventHandler
  // modeSetter();

  // ========================================
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  

  // Dark Mode 2: Blue========================================
  const [modeBlue, setModeBlue] = useState("blue");
  const modeBlueSetter=()=>{
    console.log(">>>>>>modeBlue:",modeBlue);
    // mode_contrast==="dark"?mode_contrast="light":mode_contrast="dark";
    if(modeBlue==="blue"){
      document.body.style.backgroundColor="#113f67";
      mode_contrast="light";
      // mode_contrast==="dark"?mode_contrast="light":mode_contrast="dark";
      setModeBlue(null);
    }else{
      setModeBlue("blue");
      mode_contrast==="dark"?mode_contrast="light":mode_contrast="dark";
      // mode_contrast==="dark"?mode_contrast="dark":mode_contrast="light";
      modeSetter();
    }
    console.log(">>>>>>modeBlue:",modeBlue);
    
  }

  return (
    // ** Default code=======================================
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // ** Example-1=======================================
    // <>
    //   <div className="container">
    //     {/* Using variables */}
    //     <h1>Hello {name}</h1>
    //   </div>
    // </>

    // ** Example-2=======================================
    // Copy pasted Navbar code from Bootstrap and modified
    // Tip: 1. find open tags and close all tags
    // 2. replace class by className
    // 3. replce href="/" to href="/"
    // 4. add href="/" to wherever it is missing in anchor tag
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TextUtils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <hr /> */}
      {/* <Navbar/> */}

      {/* Component with props */}
      {/* <Navbar title="TextUtils2" aboutText="About-TextUtils"/> */}

      {/* <Navbar title="TextUtils" /> */}
      
      {/* =========================================== */}
      {/* For explaining states and event handling  */}
      {/* <div className="container my-3">
        <TextForm heading="Enter a text to analyse." />
      </div> */}

      {/* =========================================== */}
      {/* Creating "Enable Dark Mode" Button Using useState Hook */}
      {/* <About/> */}

      {/* =========================================== */}
      {/* Improving Dark Mode & Refactoring App Component  */}
      {/* {console.log(">>>>>>>>>>",mode_choice)} */}

        {/* <Navbar2 title="TextUtils" modeClass={modeClass} modeSetter={modeSetter} modeContrast={mode_contrast}/> */}
      {/* <div className="container-fluid">
        <button  onClick={modeSetter} type="button" className="btn btn-primary">Switch Mode</button>
      </div> */}
      {/* <div className="container my-3">
        <TextForm heading="Enter a text to analyse." modeContrast={mode_contrast}/>
      </div> */}


      {/* =========================================== */}
      {/* Adding + Auto Dismissing Alert Messages */}
        {/* Pending modeBlueSetter */}
      <Navbar2 title="TextUtils" modeClass={modeClass} modeSetter={modeSetter} modeContrast={mode_contrast}/>
      {/* modeBlueSetter={modeBlueSetter}/> */}
      {/* modeBlue={modeBlue} setModeBlue={setModeBlue}/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter a text to analyse." modeContrast={mode_contrast} 
        showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;

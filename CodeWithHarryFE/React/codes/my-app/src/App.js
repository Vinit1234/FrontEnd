// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";

// let name = "Vinit";
function App() {
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<hr />
  <Navbar/>
  
  {/* Component with props */}
  {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
    </>

  );
}

export default App;

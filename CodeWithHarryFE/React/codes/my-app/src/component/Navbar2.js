import React from "react";
import PropTypes from "prop-types";

export default function Navbar2(props) {
  
  // const blueModeSetter=()=>{
  //     props.modeBlue==="blue"?props.setModeBlue(null):props.setModeBlue("blue");
  //     props.modeSetter();
  // }

  return (
    <nav className={`navbar navbar-expand-lg ${props.modeClass}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
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
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

          {/* Dark Blue Mode */}
          <div className={`form-check form-switch text-${props.modeContrast} mx-3`}>
            <input
            // added eventHandler defined in App.js 
              // onClick={props.modeSetter}
              onClick={props.modeBlueSetter}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Blue Mode
            </label>
          </div>

          <div className={`form-check form-switch text-${props.modeContrast}`}>
            <input
            // added eventHandler defined in App.js
              onClick={props.modeSetter}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>

          
        </div>
      </div>
    </nav>
  );
}

Navbar2.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar2.defaultProps = {
  title: "Set-Title-Here",
  aboutText: "About-Text-here",
};

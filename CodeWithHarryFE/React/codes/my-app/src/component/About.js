import React, { useState } from "react";

export default function About(props) {
    // let myStyle={
    //     backgroundColor:"black",
    //     color:"white"
    // }

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor:"white",
    //     color:"black"
    // });

    let myStyle= {
      color:props.modeContrast==="dark"?"#343a40":"white",
      backgroundColor: props.modeContrast==="dark"?"white":"#343a40"
    }

    // const toggleStyle=()=>{
    //     if(myStyle.color==="white"){
    //         setMyStyle({
    //             backgroundColor:"white",
    //             color:"black"
    //         })
    //     }else{
    //         setMyStyle({
    //             backgroundColor:"black",
    //             color:"white"
    //         })
    //     }
    // }

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-4">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives a way to analyze your text quickly and efficiently. Be it word count 
              or any other utility.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character tool that provides instant character count 
              statistics for a given text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browser such as 
              Chrome, Firefox, Safari, Opera.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary" >Dark Mode</button>
      </div> */}
    </div>
  );
}

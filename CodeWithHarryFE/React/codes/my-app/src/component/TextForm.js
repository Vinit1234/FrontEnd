import React, {useState} from "react";


export default function TextForm(props) {
    // hooks
    // const [text, setText] = useState("Enter text here");

    const [text, setText] = useState("");
    // Calling setText inside this function puts React into infinite loop
    // and breaks the application. 
    // setText("Some new text");  //Illegal

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        // setText("You have clicked on handleUpClick");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        // console.log("handleOnChange event caught");

        //This allows us to write into textarea
        //otherwise text inside textArea doesnt change
        setText(event.target.value);
    }

    const handleLoClick=()=>{
      let newText = text.toLowerCase();
      setText(newText);
  }

    return (
      <>
    <div>
      <h1>{props.heading}</h1>
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
          rows="3"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words, {text.length} letters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

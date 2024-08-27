import React, {useState} from "react";


export default function TextForm(props) {
    // hooks
    const [text, setText] = useState("Enter text here");
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

    return (
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
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}

import React from "react";

function Alert(props) {
  const capitalise = (word) => {
    let str = word.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    // <div className="alert alert-warning alert-dismissible fade show" role="alert">
    // props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">

    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalise(props.alert.type)}:</strong> {props.alert.msg}

        {/* Once the alert component is closed, further alerts won't be shown
        until the App is refreshed. Hence delete the following button. And 
        set alert to null (in App.js) using setTimeOut() in showAlert() definition */}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    )
  );
}

export default Alert;

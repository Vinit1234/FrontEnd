import React from "react";

function Alert(props) {
  const capitalise = (word) => {
    let str = word.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
  };
//   return (
//     // <div className="alert alert-warning alert-dismissible fade show" role="alert">
//     // props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">

//     props.alert && (
//       <div
//         className={`alert alert-${props.alert.type} alert-dismissible fade show`}
//         role="alert"
//       >
//         <strong>{capitalise(props.alert.type)}:</strong> {props.alert.msg}

//         {/* Once the alert component is closed, further alerts won't be shown
//         until the App is refreshed. Hence delete the following button. And 
//         set alert to null (in App.js) using setTimeOut() in showAlert() definition */}
//         {/* <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="alert"
//           aria-label="Close"
//         ></button> */}
//       </div>
//     )
//   );
// }

return (
// To avoid CLS (Cumulative Layout Shift), ie, displaying to hiding any component (eg Alert)
//  should not move entire page up and down.
// ie, leave a dedicated space for alert and toggle it in that space.
  <div style={{height:"50px"}}>
    {/* Mark curly braces b/w 2 conditions combined with && */}
    { props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalise(props.alert.type)}:</strong> {props.alert.msg} 
      
      </div>
    )
  }
  </div>
);
}

export default Alert;

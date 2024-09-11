// import React, { Component } from 'react'
import React from 'react'
import loading from './loading.gif'


const Spinner =()=> {
  // render() {
    return (
      <div className='text-center my-3'> 
        <img src={loading} alt="loading" />
      </div>
    )
  }
// }
/* export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'> 
        <img src={loading} alt="loading" />
      </div>
    )
  }
} */

export default Spinner

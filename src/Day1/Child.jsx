import React from 'react'
import "./global.css";
const Child = (props) => {
  return (
    <div className='cd'>
      <h2>CHILD COMPONENT</h2>
      <h2>{props.data}</h2>
    </div>
  )
}

export default Child

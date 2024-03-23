import React from 'react'
import Parent from './Parent';
import "./global.css"
const Grandparent = (props) => {
  return (
    <div className='gt'>
        <h2>GRAND PARENT COMPONENT</h2>
      <Parent data={props.data}/>
    </div>
  )
}

export default Grandparent;
      
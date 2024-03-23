import React from 'react'
import Child from './Child';
import "./global.css";
const Parent = (props) => {
  return (
    <div className='pt'>
      <h2>PARENT COMPONENT</h2>
      <Child data={props.data} />
    </div>
  )
}

export default Parent

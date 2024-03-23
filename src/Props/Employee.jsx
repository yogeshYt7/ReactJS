import React from 'react'

const Employee = () => {
  return (
    <div className='mainblock'>
            <div>
            <h3>emp_id:{data[0].emp_id}</h3>
            <h3>emp_Name:{data[0].emp_Name}</h3>
            <h3>emp_Designation:{data[0].emp_Designation}</h3>
            <img src="{data[0].emp_Photo}" alt="" />
            </div>
        <div >
                <h3>emp_id:{data[1].emp_id}</h3>
                <h3>emp_Name:{data[1].emp_Name}</h3>
                <h3>emp_Designation:{data[1].emp_Designation}</h3>
                <img src="{data[1].emp_Photo}" alt="" />
        </div>
        <div >
                <h3>emp_id:{data[2].emp_id}</h3>
                <h3>emp_Name:{data[2].emp_Name}</h3>
                <h3>emp_Designation:{data[2].emp_Designation}</h3>
                <img src="{data[2].emp_Photo}" alt="" />
        </div>
    </div>
  )
}

export default Employee

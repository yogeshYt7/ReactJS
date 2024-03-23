import React, { Component } from 'react'
import JSON from "./UserData.json";
export default class Employee extends Component {
    constructor(){
        super();
        this.state={
            jsondata:JSON
        }
    }
  render() {
    return (
      <div>
        <table border="2px" cellPadding={"400px"} cellSpacing={"10px"}>
            <tr>
                <th>Emp_id</th>
                <th>Emp_Name</th>
            </tr>
            {
                this.state.jsondata.map((x)=>{
                    return (
                       <tr>
                        <td>{x.emp_id}</td>
                        <td>{x.emp_name}</td>
                       </tr> 
                    )
                })
            }
        </table>
      </div>
    )
  }
}

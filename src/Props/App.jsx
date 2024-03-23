import "./profile.css";
import React  from "react";
import Employee from "./Employee";
import JSON from './Employee.json';
import "./Emp.css";
const App =()=>{
    return( 
        <div>
       <Employee data={JSON}/>
        </div>
    );
};
export default App;
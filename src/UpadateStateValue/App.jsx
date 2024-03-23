import React, { Component } from 'react'
import "./Global.css";
export default class App extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        if (this.state.count>0) {
            this.setState({count:this.state.count-1})
        }
        else{
            alert("POYI PANICHUSUKO RA ")
        }
        
    }
    handleReset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
        <div className='maincontainer'>
            <div className='container' >
                <h1>Counter Application</h1>
                <h1>{this.state.count}</h1>
                <div className='btngroup'>
                <button onClick={this.handleIncrement}>++</button>
                <button onClick={this.handleDecrement}>--</button>
                <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
      </div>
    )
  }
}

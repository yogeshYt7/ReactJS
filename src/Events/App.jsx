import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
      super()
      this.state={
        subject:"java"
      }
    }
    handlechange=function(){
    this.setState({
      subject:"React Js"
    })
    }
  render() {
    return (
      <div>
        <h1>{this.state.subject}</h1>
        <button onClick={this.handlechange.bind(this)}>click</button>
      </div>
    )
  }
}

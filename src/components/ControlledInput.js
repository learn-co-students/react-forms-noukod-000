// Code ControlledInput Component Here
import React,{Component} from 'react';
import Form from './Form';

export default class ControlledInput extends Component {
  state = {
    fName: "",
    lName: ""
  }

  handleFName = (event) => {
    this.setState({
      fName: event.target.value
    })
  }
  handleLName = (event) => {
    this.setState({
      lName: event.target.value
    })
  }

  render(){
    return(
      <form
        formData = {this.state}
        handleFName = {this.handleFName}
        handleLName = {this.handleLName}
      />
    )
  }
}

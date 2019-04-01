// Code ControlledInput Component Here
import React from 'react';
 
class ControlledInput extends React.Component {
  state = {
    value: '',
  }
 
  handleChange(event) => {
    this.setState({value: event.target.value.toUpperCase()});
  }
  
  handleSubmit(event) {
    alert('A info was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
      <label>
        <input type="text" value={this.state.value} onChange={this.handleChange}
        />
      </label>
       <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default ControlledInput;
 
import React from 'react';
 
class ControlledInput extends React.Component {
  state = {
    value: '',
  }
 
  handleChange = event => {
    this.setState({
      value: event.target.value,
    }, () => console.log(this.state));
  }
 
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={event => this.handleChange(event)}
        />
      </form>
    );
  }
}
 
export default ControlledInput;
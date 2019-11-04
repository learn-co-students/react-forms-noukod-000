import React, {Component} from 'react';

export default class Form extends Component{
  render(){
    return(
      <div>
        <form>
          <input type="text" value={this.props.formData.fName} onChange={event => this.props.handleFName(event)} />
          <input type="text" value={this.props.formData.lName} onChange={event => this.props.handleLName(event)} />
        </form>
      </div>
    )
  }
}

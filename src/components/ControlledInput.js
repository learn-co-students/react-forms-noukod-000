// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
    
    state = {
        firstName: "Alix",
        lastName: "Herna",
        }

        handleFirstNameChange = (event) => {
            this.setState({
                firstName: event.target.value
            })
        }

        handleLastNameChange = event => {
            this.setState({
              lastName: event.target.value
            })
        }

        render() {
            return (
              <form>
                <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
                <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
                <h2>Hello {this.state.firstName}</h2>
              </form>
            )
        }
    

}


export default ControlledInput;
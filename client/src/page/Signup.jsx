import React, { Component } from 'react';
import axios from 'axios';
import "./style.css"; 

export default class Signup extends Component {

  state = {
    email: "",
    password: "",
    errorMessage: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios.post({
      url: "/authentication/signup",
      method: "POST",
      data: {
        email,
        password
      }
    })
    .then((response) => {
      this.props.history.push('/profile'); 
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.response.data.message
      });
    });
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };
    render() {
      // JSX
      return (
        <div className="loginpage">
            <h1 className="logintitle"> Sign up for CoLab </h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="email" onChange={this.handleChange} />
              <input type="password" name="password" onChange={this.handleChange} />
              <br></br>
              <button className="login">Sign Up</button>
            </form>
            <p>{this.state.errorMessage}</p>
          </div>
      );
    }
}
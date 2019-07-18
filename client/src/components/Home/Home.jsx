import React, { Component } from 'react';
import "./style.css";

export default class Home extends Component {


  render() {
    // JSX
    return (
      <div>
        <h1 className="logo">CoLab Logo - THIS WILL BE AN IMAGE</h1>
        <article className="container">
          <blockquote>
            <strong>Welcome</strong> to <em>our creative</em>  <strong className="community">community</strong>
          </blockquote>
        </article>

        <div className="buttons">
          <button type="button" className="login">Login</button>
          <button type="button" className="login">Register</button>
        </div>
      </div>
    );
  }
}
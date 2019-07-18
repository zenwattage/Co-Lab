import React, { Component } from 'react';
import "./style.css"; 

export default class Home extends Component {


  render() {
    // JSX
    return (
      <div>
        <article class="container">
          <blockquote>
            <strong>Welcome</strong> to <em>our creative</em>  <strong>community</strong>
          </blockquote>
        </article>
      </div>
    );
  }
}
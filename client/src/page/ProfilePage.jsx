import React, { Component } from 'react';
import { } from 'react-router-dom'
import axios from 'axios';
import "./style.css"; 
import Profile from "../components/Profile/Profile"; 

class ProfilePage extends Component{
  render(){
    return (
    <div>
      <Profile />
    </div>
    )
  }
}; 

export default ProfilePage; 
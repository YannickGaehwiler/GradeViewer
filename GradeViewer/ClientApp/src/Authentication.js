import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomeTeacher } from './components/HomeTeacher';
import { HomeStudent } from './components/HomeStudent';
import { Grades } from './components/Grades';
import { Classes } from './components/Classes';
import { LoginPopup } from './components/loginPopup';

export default class Authentication extends Component {
  displayName = Authentication.name
  constructor(props) {
    super(props);
 }
  render() {
    return (
      
      <App isTeacher = {this.props.isTeacher} isAuthenticated = {true}/>
    );
  }
}


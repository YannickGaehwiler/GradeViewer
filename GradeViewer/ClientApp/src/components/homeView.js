import React, { Component } from 'react';
import { withRouter } from "react-router";

class Home extends Component {
  displayName = Home.name

  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: ''
    }

    this.checkAuthentication = this.checkAuthentication.bind(this);
}

  checkAuthentication() {
    if(!this.props.isAuthenticated){
      this.props.history.push({
        pathname: '/login'
      });
    }
}

  render() { 
    this.checkAuthentication();

    if(this.props.isTeacher){
      return (
        <h1>Hello, world! Teacher</h1>
        );
    }
      return (
        <h1>Hello, world! Student</h1>
        );
  }
}

export const HomeView = withRouter(Home);
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomeView } from './components/homeView';
import { Grades } from './components/Grades';
import { Classes } from './components/Classes';
import { LoginPopup } from './components/loginPopup';

export default class App extends Component {
  displayName = App.name
  constructor(props) {
    super(props);
 }
  render() {
    return (
      <Layout isTeacher = {this.props.isTeacher} isAuthenticated = {this.props.isAuthenticated}>
        <Route exact path='/login' render={props => <LoginPopup isTeacher = {this.props.isTeacher} isAuthenticated = {this.props.isAuthenticated} {...props} /> }/>
        <Route exact path='/home' render={props => <HomeView isTeacher = {this.props.isTeacher} isAuthenticated = {this.props.isAuthenticated} {...props} /> } />
        <Route path='/classes' render={props => <Classes isTeacher = {this.props.isTeacher} isAuthenticated = {this.props.isAuthenticated} {...props} /> }/>
        <Route path='/grades' render={props => <Grades isTeacher = {this.props.isTeacher} isAuthenticated = {this.props.isAuthenticated} {...props} /> }/>
      </Layout>
    );
  }
}


import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomeTeacher } from './components/HomeTeacher';
import { HomeStudent } from './components/HomeStudent';
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
      <Layout isTeacher = {this.props.isTeacher}>
        <Route exact path='/login' component={LoginPopup}/>
        <Route exact path='/homeTeacher' component={HomeTeacher}/>
        <Route exact path='/homeStudent' component={HomeStudent}/>
        <Route path='/classes' component={Classes}/>
        <Route path='/grades' component={Grades}/>
      </Layout>
    );
  }
}


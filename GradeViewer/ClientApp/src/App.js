import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
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
        <Route exact path='/' component={LoginPopup} />
        <Route exact path='/home' component={Home} />
        <Route path='/classes' component={Classes} />
        <Route path='/grades' component={Grades} />
      </Layout>
    );
  }
}


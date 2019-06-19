import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name
  isTeacher = false
  render() {
    if(this.isTeacher){
      return (
        <div>
          <h1>Hello, world! TEACHER</h1>
        </div>);
        
    }else{
    return (
      <div>
        <h1>Hello, world! Student</h1>
      </div>
      
      );
    }
  }
}

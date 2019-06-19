import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { History } from 'history';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name
  constructor(props) {
    super(props);
 }

 handleClose() {
  this.props.history.push({
      pathname: '/'
  });
}

  render() {
    var linkContainerGrades;
    var linkContainerClasses;
    if(this.props.isTeacher){
      linkContainerClasses = <LinkContainer to={'/classes'}>
                              <NavItem>
                                <Glyphicon glyph='education' /> Counter
                              </NavItem>
                            </LinkContainer>;
    }else{
      linkContainerGrades = <LinkContainer to={'/grades'}>
                              <NavItem>
                                <Glyphicon glyph='th-list' /> My grades
                              </NavItem>
                            </LinkContainer>;
    }
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/home'}>GradeViewer</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/home'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            {linkContainerClasses}
            {linkContainerGrades}         
          </Nav>
        </Navbar.Collapse>
        <div><button type="button" className="btn btn-danger" style={{marginLeft: 10 + 'px'}} Click={ this.handleClose }>logout</button></div>
      </Navbar>
    );
  }
}
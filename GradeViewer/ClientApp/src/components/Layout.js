import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component{
  displayName = Layout.name
  constructor(props) {
    super(props);
 }
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={3}>
            <NavMenu isTeacher = {this.props.isTeacher} history = {this.props.history}/>
          </Col>
          <Col sm={9}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world!!!</h1>
        <p>Start project</p>
        <div>
          <Container>
            <Row>
              <Col md={4}>md=4</Col>
              <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
            </Row>
            <Row>
              <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
              <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './styles/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={style.Header}>
        <Container>
          <Row className='mb-24'>
            <Col className='flex v-center'>
              <h1 className='white f-large'>Movies for fun</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <input type="search" placeholder='Search movie'/>
              <button>Search</button>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;

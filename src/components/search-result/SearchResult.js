import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchResult = (props) => {
  return (
    <Container>
      <Row>
        <Col className='flex v-center space-between'>
          <p>
            <span><b>0</b> movies found</span>
          </p>
          <p>
            <span className='inline mr-8'>Sort by <b>Release date</b></span>
            |
            <span className='red inline ml-8'>Rating ___</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchResult;

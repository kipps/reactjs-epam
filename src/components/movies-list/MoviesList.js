import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Movie from '../movie/Movie'

const MoviesList = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Movie title='Начни сначала' genre='Мелодрама, Комедия' date='2018' img='medium'/>
        </Col>
      </Row>
    </Container>
  );
}

export default MoviesList;
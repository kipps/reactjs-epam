import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Movie from '../movie/Movie'

class MoviesList extends React.Component {
  render() {
    const content = (array) => {
      if(array.movies.length > 0){
        return array.movies.map((i, index) =>
          <div className='mb-24 mr-16 ml-16'  key={index}>
            <Movie title={i.title}
                   genre={i.genre}
                   date={i.date}
                   img={i.img}
            />
          </div>
        );
      }else {
        return <Col><h1 className='f-large'>No films found</h1></Col>
      }
    }
    return (
      <Container>
        <Row>
          {content(this.props)}
        </Row>
      </Container>
    );
  }
}

export default MoviesList;
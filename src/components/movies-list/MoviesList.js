import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Movie from '../movie/Movie'

class MoviesList extends React.Component {

  renderList = (movies) => {
    return movies.map((movie) =>
      <div className='mb-24 mr-16 ml-16' key={movie.title}>
        <Movie title={movie.title}
               genre={movie.genre}
               date={movie.date}
               img={movie.img}
        />
      </div>
    );
  }

  render() {
    const { movies } = this.props;
    return (
      <Container>
        <Row>
          { movies.length > 0 ? this.renderList(movies) : <Col><h1 className='f-large'>No films found</h1></Col> }
        </Row>
      </Container>
    );
  }
}

export default MoviesList;
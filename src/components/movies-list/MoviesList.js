import React from 'react';
import fetch from 'isomorphic-fetch'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Movie from '../movie/Movie';

class MoviesList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      title: '',
      loading: false
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://reactjs-cdp.herokuapp.com/movies/')
      .then(response => response.json())
      .then(json => json.data.map( item => item ))
      .then(movies =>
        this.setState({movies, loading: false})
      )
  }

  render() {
    const {movies, loading} = this.state
    return (loading) ?
      <Container><h1 className='flex f-large v-center h-center'>Loading Country Names...</h1></Container> :
      (!movies.length) ?
        <div>No country Names</div> :
        <Container>
          <div className='mb-24 [ flex space-between wrap ] '>
            {movies.map(
              item => (
                  <Movie key={item.id} {...item} />
              )
            )}
          </div>
        </Container>
  }
}

export default MoviesList;
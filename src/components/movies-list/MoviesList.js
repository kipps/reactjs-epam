import React from 'react';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Movie from '../movie/Movie';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {setYear} from "../../redux/actions/MoviesAction";
import {movieReducer} from "../../redux/reducers/Movies";

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
    this.setState({loading: true});
    fetch('https://reactjs-cdp.herokuapp.com/movies/')
      .then(response => response.json())
      .then(json => json.data.map( item => item ))
      .then(movies =>
        this.setState({movies, loading: false})
      )
  }

  render() {
    const { movies, loading} = this.state
    return (loading) ?
      <Container><h1 className='flex f-large v-center h-center'>Loading Country Names...</h1></Container> :
      (!movies.length) ?
        <Container><h1 className='f-large'> { movies.movies } No Movies</h1></Container> :
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

MoviesList.propTypes = {
  array: PropTypes.any,
  showMovies: PropTypes.func, // добавили новое свойство в propTypes
}

const mapStateToProps = state => {
  console.log('array', state);
  return {
    array: state.movieReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showMovies: movies => dispatch(showMovies(movies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
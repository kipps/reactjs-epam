import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import store from '../../redux/store/configureStore'
import {fetchPostsRequest, searchByTitle, headerSearchSet} from "../../redux/actions/MoviesAction";
import Movie from '../movie/Movie';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const getMovies = () => {
  let path = location.pathname;
  console.log(path);
  (path !== '/' && path.includes('/search=')) ? store.dispatch(searchByTitle(path.replace('/search=', 'search='))) : store.dispatch(fetchPostsRequest());
  (path !== '/' && path.includes('/sortOrder=')) ? store.dispatch(searchByTitle(path.replace('/sortOrder=', 'sortOrder='))) : store.dispatch(fetchPostsRequest());
  store.dispatch(headerSearchSet(true));
}

class MoviesList extends React.Component {

  componentDidMount() {
    getMovies();
  }

  componentDidUpdate(prevProps) {
    if (location.pathname !== prevProps.location.pathname) {
      getMovies();
    }
  }

  render() {
    return (this.props.loading) ?
      <Container><h1 className='flex f-large v-center h-center'>Loading Country Names...</h1></Container> :
      (!this.props.posts.length) ?
        <Container><h1 className='f-large'> No Movies </h1></Container> :
        <Container>
          <Row>
            {this.props.posts.map(
              item => (
                <Col key={item.id} md={3}>
                  <Movie path={'/film/'} {...item} />
                </Col>
              )
            )}
          </Row>
        </Container>
  }
}

MoviesList.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
  headerSearchShow: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    posts: state.moviesState.posts,
    loading: state.moviesState.loading,
    headerSearchShow: state.moviesState.headerSearchShow
  }
}

export default connect(mapStateToProps)(MoviesList)
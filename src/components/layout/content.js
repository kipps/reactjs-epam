import React from 'react';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import SearchResult from '../search-result/SearchResult'
import MoviesList from '../movies-list/MoviesList'

class Content extends React.Component {
  render() {
    return (
      <div className='Content'>
        <div className='pt-8 pb-8 grey'>
          <SearchResult/>
        </div>
        <div className='pt-24 pb-24'>
          <MoviesList/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    movies: store.movies,
  }
}
export default connect(mapStateToProps)(Content)

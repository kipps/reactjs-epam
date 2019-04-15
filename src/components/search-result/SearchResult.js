import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import store from '../../redux/store/configureStore'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

class SearchResult extends React.Component {
  sortByOrder = e => {
    console.log('click ', this.props);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col className='flex v-center space-between'>
            <p>
              <span><b>0</b> movies found</span>
            </p>
            <p>
              <span className='inline mr-8'>Sort by <Button onClick={this.sortByOrder}>Title</Button></span>
              |
              <span className='red inline ml-8'>Rating ___</span>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

SearchResult.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    posts: state.moviesState.posts,
    loading: state.moviesState.loading
  }
}

export default connect(mapStateToProps)(SearchResult)

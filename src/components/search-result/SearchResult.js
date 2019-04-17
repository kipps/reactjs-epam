import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SortComponent from "../sort-by/SortComponent";

class SearchResult extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className='flex v-center space-between'>
            <p>
              <span><b>{this.props.posts.length}</b> movies found</span>
            </p>
            <div className={'flex flex-row v-center'}>
              <span className='inline mr-8'>Sort by</span>
             <SortComponent />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

SearchResult.propTypes = {
  posts: PropTypes.array
}

const mapStateToProps = state => {
  return {
    posts: state.moviesState.posts
  }
}

export default connect(mapStateToProps)(SearchResult)

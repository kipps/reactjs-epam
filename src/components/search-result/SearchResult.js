import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

class SearchResult extends React.Component {
  render() {
    return (
      <p>
        <span><b>{this.props.posts.length}</b> movies found</span>
      </p>
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

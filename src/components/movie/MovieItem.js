import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import store from '../../redux/store/configureStore'
import {fetchPostsRequest, getPostRequest, headerSearchSet, searchByTitle} from "../../redux/actions/MoviesAction";
import {Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled, {css} from 'styled-components'
import Movie from "./Movie";

class MovieItem extends React.Component {

  componentDidMount() {
    let replace;
    window.location.pathname.includes('/search/') ? replace = '/search/film/' : replace = '/film/';
    store.dispatch(getPostRequest(window.location.pathname.replace(replace, '')));
    store.dispatch(headerSearchSet(false));
    store.dispatch(fetchPostsRequest());
  }

  render() {
    let {
      title,
      poster_path,
      tagline,
      overview,
      genres,
      release_date
    } = this.props.post;

    const posterStyle = {
      width: 280
    };

    const WrapperMoviesList = styled.div`
      text-align: center;
      overflow-x: auto;
    `
    const MoviesList = styled.div`
      width: 2000px;
      display: flex;
    `

    const showGenres = () => {
      if (genres) {
        let text;
        genres.map((item, i) => {
          text ? text = `${text}, ${item}` : text = item
        });
        return text;
      }
    }

    return (!this.props.loading) ?
      <div>
        <Container className={'mb-32'}>
          <header className={'mb-24'}>
            <div className={'mb-8'}>
              <Link to={'/'} className={'link-clear'}>
                <i className="fas fa-chevron-left inline mr-8"></i>
                Back to list
              </Link>
            </div>
            <h2 className={'f-large mb-16'}>{title}</h2>
          </header>
          <div className={'flex flex-row'} style={{alignItems: 'end'}}>
            <img alt={title} src={poster_path} style={posterStyle} className='Movie__img mr-32'/>
            <div>

              <div className={'mb-8'}>Tags: <b>{tagline ? tagline : 'no tags'}</b></div>
              <div className={'mb-8'}>Genres: <b>{showGenres()}</b></div>
              <div>Release date: <b>{release_date}</b></div>
              <div className={'pt-16'}>
                <p className={'line-hight'}>{overview}</p>
              </div>
            </div>
          </div>
        </Container>
        <div className={'bg-grey'}>
          <Container>
            <WrapperMoviesList className={' [ pt-16 pb-16 ] '}>

              <MoviesList>
                  {this.props.posts.map(
                    item => (
                      <Col key={item.id} md={1}>
                        <Movie {...item} />
                      </Col>
                    )
                  )}
              </MoviesList>

            </WrapperMoviesList>
          </Container>
        </div>
      </div> :
      <div className={'flex v-center h-center'}><h2 className={'f-large'}>Loading...</h2></div>
  }

}

MovieItem.propTypes = {
  post: PropTypes.any,
  posts: PropTypes.array,
  loading: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    post: state.moviesState.post,
    loading: state.moviesState.loading,
    posts: state.moviesState.posts
  }
}

export default connect(mapStateToProps)(MovieItem)


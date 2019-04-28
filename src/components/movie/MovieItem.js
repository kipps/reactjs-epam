import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import store from '../../redux/store/configureStore'
import {getPostRequest} from "../../redux/actions/MoviesAction";
import {Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";

class MovieItem extends React.Component {

  componentDidMount() {
    let id = (window.location.pathname).replace('/film/', '');
    store.dispatch(getPostRequest(id));
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
        <Container>
          <header className={'mb-24'}>
            <div className={'mb-8'}>
              <Link to={'/'} className={'link-clear'}><i className="fas fa-chevron-left"></i> Back</Link>
            </div>
          </header>
          <div className={'flex flex-row'} style={{alignItems: 'end'}}>
            <img alt={title} src={poster_path} style={posterStyle} className='Movie__img mr-32'/>
            <div>
              <h2 className={'f-large mb-16'}>{title}</h2>
              <div className={'mb-8'}>Tags: <b>{tagline ? tagline : 'no tags'}</b></div>
              <div className={'mb-8'}>Genres: <b>{showGenres()}</b></div>
              <div>Release date: <b>{release_date}</b></div>
              <div className={'pt-16'}>
                <p className={'line-hight'}>{overview}</p>
              </div>
            </div>
          </div>
        </Container>
      </div> :
      <div className={'flex v-center h-center'}><h2 className={'f-large'}>Loading...</h2></div>
  }

}

MovieItem.propTypes = {
  post: PropTypes.any,
  loading: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    post: state.moviesState.post,
    loading: state.moviesState.loading
  }
}

export default connect(mapStateToProps)(MovieItem)


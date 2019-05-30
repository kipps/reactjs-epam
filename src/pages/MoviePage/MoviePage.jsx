import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import s from './MoviePage.scss';

class MoviePage extends PureComponent {
  static propTypes = {
    fetchMovieById: PropTypes.func.isRequired,
    movieId: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    movie: PropTypes.any
  };

  static defaultProps = {
    movie: null,
  };

  componentWillMount() {
    this.props.fetchMovieById(this.props.movieId);
  }

  // componentDidMount() {
  //   this.props.fetchUserById(this.props.userId);
  // }

  render() {
    const { loading, movie } = this.props;
    return (
      <div className={s.Movie}>
        <h2 className={s.Movie_title}>{movie.title}</h2>
        <Loader loading={loading} />
        <div>
          <div>
            <img src={movie.poster_path} alt={'poster:' + movie.title}/>
          </div>
          <div>
            <header>
              {movie.genres}
            </header>
            <section>
              <p>{movie.overview}</p>
            </section>
            <footer>
              {movie.tagline}
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;

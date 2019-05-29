import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import styles from './MoviePage.scss';

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
      <div>
        <h2 className={styles.title}>Movie Page</h2>
        <Loader loading={loading} />
        <pre>{JSON.stringify(movie, null, 2)}</pre>
      </div>
    );
  }
}

export default MoviePage;

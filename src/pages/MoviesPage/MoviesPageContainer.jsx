import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../modules/movies';
import MoviesPage from './MoviesPage';

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);

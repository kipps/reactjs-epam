import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import s from './MoviePage.scss';

class MoviePage extends PureComponent {
    static propTypes = {
        fetchMovieById: PropTypes.func.isRequired,
        movieId: PropTypes.number.isRequired,
        loading: PropTypes.bool.isRequired,
        movie: PropTypes.object
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
        const {loading, movie} = this.props;
        console.log('test', movie);
        const details = () => {
           setTimeout(()=> {
               if (movie) {
                   return (
                       <div>
                           <h2 className={s.Movie_title}>{movie.title}</h2>
                           <Loader loading={loading}/>
                           <div>
                               <div>
                                   <img src={movie} alt={'poster:' + movie}/>
                               </div>
                               <div>
                                   <header>
                                       {movie}
                                   </header>
                                   <section>
                                       <p>{movie}</p>
                                   </section>
                                   <footer>
                                       {movie}
                                   </footer>
                               </div>
                           </div>
                       </div>
                   )
               }
           }, 0)
        }
        //console.log('test 2', movie.title);
        return (
            <div className={s.Movie}>
                Details
            </div>
        );
    }
}

export default MoviePage;

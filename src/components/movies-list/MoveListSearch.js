import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import store from '../../redux/store/configureStore'
import { searchByTitle } from "../../redux/actions/MoviesAction";
import Container from 'react-bootstrap/Container'
import Movie from '../movie/Movie';

class MoviesListSearch extends React.Component {
    componentDidMount() {
        let path = window.location.pathname;
        store.dispatch(searchByTitle(path.replace('/search/','')))
    }

    render() {
        return (this.props.loading) ?
            <Container><h1 className='flex f-large v-center h-center'>Loading Country Names...</h1></Container> :
            (!this.props.posts.length) ?
                <Container><h1 className='f-large'> No Movies </h1></Container> :
                <Container>
                    <div className='mb-24 [ flex space-between wrap ] '>
                        {this.props.posts.map(
                            item => (
                                <Movie key={item.id} {...item} />
                            )
                        )}
                    </div>
                </Container>
    }
}

MoviesListSearch.propTypes = {
    posts: PropTypes.array,
    loading: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        posts: state.moviesState.posts,
        loading: state.moviesState.loading
    }
}

export default connect(mapStateToProps)(MoviesListSearch)
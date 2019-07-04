import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import store from '../../redux/store/configureStore'
import {fetchPostsRequest, searchByTitle, headerSearchSet} from "../../redux/actions/MoviesAction";
import Movie from '../movie/Movie';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class MoviesList extends React.Component {
    componentDidMount() {
        let path = window.location.pathname;
        path.includes('/search/') ? store.dispatch(searchByTitle(path.replace('/search/', ''))) : store.dispatch(fetchPostsRequest());
        store.dispatch(headerSearchSet(true))
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            console.log('route changed');
            let path = window.location.pathname;
            path.includes('/search/') ? store.dispatch(searchByTitle(path.replace('/search/', ''))) : store.dispatch(fetchPostsRequest());
            store.dispatch(headerSearchSet(true));
        }
    }

    render() {
        return (this.props.loading) ?
            <Container><h1 className='flex f-large v-center h-center'>Loading Country Names...</h1></Container> :
            (!this.props.posts.length) ?
                <Container><h1 className='f-large'> No Movies </h1></Container> :
                <Container>
                    <Row>
                        {this.props.posts.map(
                            item => (
                                <Col key={item.id} md={3}>
                                    <Movie path={'/film/'} {...item} />
                                </Col>
                            )
                        )}
                    </Row>
                </Container>
    }
}

MoviesList.propTypes = {
    posts: PropTypes.array,
    loading: PropTypes.bool,
    headerSearchShow: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        posts: state.moviesState.posts,
        loading: state.moviesState.loading,
        headerSearchShow: state.moviesState.headerSearchShow
    }
}

export default connect(mapStateToProps)(MoviesList)
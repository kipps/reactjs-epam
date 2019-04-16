import React from 'react';
import {searchByTitle, searchByGenre} from "../../redux/actions/MoviesAction";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import User from '../user/User';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import store from '../../redux/store/configureStore';
import SearchComponent from "../search/SearchComponent";

class Header extends React.Component {

    findMoives = e => {
        let value = this.searchInput.value;
        if (this.props.searchType === 'title') {
            store.dispatch(searchByTitle(value));
        } else if (this.props.searchType === 'genre') {
            store.dispatch(searchByGenre(value));
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <header className="Header pt-24 pb-24">
                    <Container>
                        <Row className='mb-24'>
                            <Col className='flex v-center'>
                                <h1 className='white f-large'>Movies for fun</h1>
                            </Col>
                            <Col className='flex v-center h-right'>
                                <User name='Roman Shevchenko'/>
                            </Col>
                        </Row>
                        <SearchComponent className={'full'}/>
                    </Container>
            </header>
        );
    }
}

Header.propTypes = {
    searchType: PropTypes.string
}

const mapStateToProps = state => {
    return {
        searchType: state.moviesState.searchType
    }
}

export default connect(mapStateToProps)(Header)

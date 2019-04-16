import React from 'react';
import {searchByTitle, searchByGenre} from "../../redux/actions/MoviesAction";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import User from '../user/User';
import Radio from '../elements/Radio';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import store from '../../redux/store/configureStore';


let searchBy = ['Genre', 'Title'];

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
        return (
            <header className="Header pt-24 pb-24">
                <form>
                    <Container>
                        <Row className='mb-24'>
                            <Col className='flex v-center'>
                                <h1 className='white f-large'>Movies for fun</h1>
                            </Col>
                            <Col className='flex v-center h-right'>
                                <User name='Roman Shevchenko'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="search" ref={(input) => {
                                    this.searchInput = input
                                }} placeholder='Finde your movie' className='full'/>
                                <div className='flex space-between v-center pt-8'>
                                    <div className='flex v-center'>
                                        <span>Search by:</span>
                                        <Radio className='ml-8' label={searchBy} name='sort'/>
                                    </div>
                                    <div>
                                        <Button onClick={this.findMoives} variant="danger" size="sm">Search</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </form>
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

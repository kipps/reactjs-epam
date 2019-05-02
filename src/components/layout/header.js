import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import store from '../../redux/store/configureStore'

import User from '../user/User';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchComponent from "../search/SearchComponent";

class Header extends React.Component {
  render() {
    const showResultCounter = () => {
      if(this.props.headerSearchShow) {
        return (
          <SearchComponent className={'full'}/>
        )
      }
    }
    return (
      <header className="Header pt-24">
        <Container>
          <Row className='mb-24'>
            <Col className='flex v-center'>
              <h1 className='white f-large'>Movies for fun</h1>
            </Col>
            <Col className='flex v-center h-right'>
              <User/>
            </Col>
          </Row>
        </Container>
        {showResultCounter()}
      </header>
    );
  }
}


Header.propTypes = {
  headerSearchShow: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    headerSearchShow: state.moviesState.headerSearchShow
  }
}

export default connect(mapStateToProps)(Header)
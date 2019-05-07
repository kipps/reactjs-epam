import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import store from '../../redux/store/configureStore'

import User from '../user/User';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchComponent from "../search/SearchComponent";
import logoPath from '../../images/logo.png';
import SearchResult from "../search-result/SearchResult";
import SortComponent from "../sort-by/SortComponent";

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
              <h1 className='white f-large'>
                <Link to="/">
                  <img width='347px' className={'Logo'} src={logoPath} alt=""/>
                </Link>
              </h1>
            </Col>
            <Col className='flex v-center h-right'>
              <User/>
            </Col>
          </Row>
        </Container>
        {showResultCounter()}
        <div className='SortByContainer flex flex-row v-center pt-8 pb-8'>
          <Container>
            <div className={'flex flex-row v-center space-between'}>
              <div>
                <SearchResult />
              </div>
              <div>
                <SortComponent/>
              </div>
            </div>
          </Container>
        </div>
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
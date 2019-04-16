import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setYear, search} from "../../redux/actions/MoviesAction";

import User from '../user/User';
import Radio from '../elements/Radio';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import store from '../../redux/store/configureStore';


let searchBy = ['Genre', 'Title', 'Other'];

class Header extends React.Component {

  findMoives = e => {
    let text = this.searchInput.value;
    store.dispatch(search(text));
    // let array = this.props.movies.filter((item)=>{
    //   return item.title.includes(text)
    // });
    // console.log(array);
    // this.props.searchByTitleRequest(array);

  }
  render() {
    const { year } = this.props;
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
          <Row>
            <Col>
              <input type="search" ref={(input) => {this.searchInput = input}} placeholder='Finde your movie' className='full'/>
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
      </header>
    );
  }
}

Header.propTypes = {
  year: PropTypes.number,
  setYear: PropTypes.func,
  searchByTitleRequest: PropTypes.func,
  movies: PropTypes.array
}

const mapStateToProps = state => {
  return {
    year: state.userState.year,
    movies: state.moviesState.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setYear: year => dispatch(setYear(year)),
    searchByTitleRequest: movies => dispatch(searchByTitleRequest(movies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

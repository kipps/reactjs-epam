import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import User from '../user/User';
import Radio from '../elements/Radio';
import {setYear} from "../../redux/actions/MoviesAction";


let searchBy = ['Genre', 'Title', 'Other'];

class Header extends React.Component {

  onBtnClick = e => {
    // const year = +e.currentTarget.innerText;
    // this.props.setYear(year);
    console.log('click search');
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
              <input type="search" placeholder='Finde your movie' className='full'/>
             <div className='flex space-between v-center pt-8'>
               <div className='flex v-center'>
                 <span>Search by:</span>
                 <Radio className='ml-8' label={searchBy} name='sort'/>
               </div>
               <div>
                 <Button onClick={this.onBtnClick} variant="danger" size="sm">Search</Button>
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
  setYear: PropTypes.func, // добавили новое свойство в propTypes
}

const mapStateToProps = state => {
  console.log(state);
  return {
    year: state.userState.year,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // showMovies: Movies => dispatch(showMovies(Movies)),
    setYear: year => dispatch(setYear(year))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

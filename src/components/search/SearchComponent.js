import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import store from '../../redux/store/configureStore';
import {searchByTitle} from "../../redux/actions/MoviesAction";
import {Field, reduxForm} from 'redux-form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';

function showResults(value) {
  store.dispatch(searchByTitle(value))
}

const renderSelect = ({input, meta, type, name, value, className}) =>
  <select {...input}>
    <option value="vote_average">Rating</option>
    <option value="release_date">Release date</option>
  </select>

const renderInput = ({input, meta, type, name, value, className}) =>
  <input type={type} name={name} className={className} placeholder='Search' value={value} {...input}/>

let SearchComponent = ({handleSubmit, submitting}) => {
  return (
    <form onSubmit={handleSubmit(showResults)}>

      <div>
        <Container className={'pb-16'}>
          <div className='flex flex-row v-center'>
            <Field name='search' className={'full mr-16'} type='input' placeholder='search' component={renderInput}/>
            <Button type='submit' variant='dark' disabled={submitting}>Search</Button>
          </div>
          <div className='flex flex-row pt-16'>
            <p className={'mr-16 f-grey'}>Search by:</p>
            <label className='mr-16'>
              <span className={'inline mr-8'}>Title</span>
              <Field component={renderInput} name='searchBy' value={'title'} type='radio'/>
            </label>
            <label>
              <span className={'inline mr-8'}>Genre</span>
              <Field component={renderInput} name='searchBy' value={'genres'} type='radio'/>
            </label>
          </div>
        </Container>
        <div className='SortByContainer flex flex-row v-center pt-8 pb-8'>
          <Container>
            <div className={'flex flex-row v-center space-between'}>
              <div>
                Movies loaded: <b>10</b>
              </div>
              <div>
                <label className={'inline mr-8'}>Sort by:</label>
                <Field name='sortBy' className={'full mr-16'} type='select' component={renderSelect}/>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </form>
  )
}

SearchComponent.propTypes = {
  searchType: PropTypes.string,
  sortBy: PropTypes.string
}

const mapStateToProps = state => {
  return {
    searchType: state.moviesState.searchType,
    sortBy: state.form.value
  }
}

SearchComponent = reduxForm({
  form: 'search',
  destroyOnUnmount: false
})(SearchComponent)

export default connect(mapStateToProps)(SearchComponent);

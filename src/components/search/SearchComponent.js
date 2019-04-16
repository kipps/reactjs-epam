import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import store from '../../redux/store/configureStore';
import {searchByTitle, searchByGenre} from "../../redux/actions/MoviesAction";
import {Field, reduxForm} from 'redux-form';
import Button from "react-bootstrap/Button";

function showResults(value) {
  console.log('showResults', value);
  if (value.searchBy !== 'genre') {
    store.dispatch(searchByTitle(value.search));
  } else {
    store.dispatch(searchByGenre(value.search));
  }
}

const renderInput = ({input, meta, type, name, value, className}) =>
  <input type={type} name={name} className={className} placeholder='Search' value={value} {...input}/>

let SearchComponent = ({handleSubmit, submitting}) => {
  return (
    <form onSubmit={handleSubmit(showResults)}>
      <div>
        <div className='flex flex-row v-center'>
          <Field name='search' className={'full mr-16'} type='input' placeholder='search' component={renderInput}/>
          <Button type='submit' variant='dark'>Search</Button>
        </div>
        <div className='flex flex-row pt-16'>
          <p className={'mr-16 f-grey'}>Search by:</p>
          <label className='mr-16'>
            <span className={'inline mr-8'}>Title</span>
            <Field component={renderInput} name='searchBy' value={'title'} type='radio'/>
          </label>
          <label>
            <span className={'inline mr-8'}>Genre</span>
            <Field component={renderInput} name='searchBy' value={'genre'} type='radio'/>
          </label>
        </div>
      </div>
    </form>
  )
}

SearchComponent.propTypes = {
  searchType: PropTypes.string
}

const mapStateToProps = state => {
  return {
    searchType: state.moviesState.searchType
  }
}

SearchComponent = reduxForm({
  form: 'search',
  destroyOnUnmount: false
})(SearchComponent)

export default connect(mapStateToProps)(SearchComponent);

import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import store from '../../redux/store/configureStore';
import {searchByTitle} from "../../redux/actions/MoviesAction";
import {Field, reduxForm} from 'redux-form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import SearchResult from "../search-result/SearchResult";
import history from "../../history";
import SortComponent from "../sort-by/SortComponent";

function showResults(value) {
  let {search, searchBy} = value;
  let queryText, path;
  if(search != undefined ) {
    queryText = encodeURIComponent(search);
    path = `search=${queryText}&searchBy=${searchBy}`;
    history.push('/' + path);
  }
}

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
      </div>
    </form>
  )
}

SearchComponent.propTypes = {
  posts: PropTypes.array
}

const mapStateToProps = state => {
  return {
    posts: state.moviesState.posts
  }
}

SearchComponent = reduxForm({
  form: 'search',
  destroyOnUnmount: false,
  initialValues: {
    searchBy: 'title'
  }
})(SearchComponent)

export default connect(mapStateToProps)(SearchComponent);

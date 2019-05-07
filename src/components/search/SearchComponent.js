import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import store from '../../redux/store/configureStore';
import {searchByTitle} from "../../redux/actions/MoviesAction";
import {Field, reduxForm} from 'redux-form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import SearchResult from "../search-result/SearchResult";
import { withRouter } from 'react-router-dom';

// function showResults(value) {

//   // store.dispatch(searchByTitle(value));
//   let {search, searchBy, sortBy} = value;
//   let title, path;

//   if(search != undefined ) {
//     title = encodeURIComponent(search);
//     path = `search=${title}`
//   }
//   (searchBy != undefined )? path = path + `&searchBy=${searchBy}` : path = path + `&searchBy=title`;
//   (sortBy != undefined  && title != undefined) ? path = `sortOrder=${sortBy}&` + path : path = `sortOrder=vote_average&` + path;
  
//   // window.location.pathname = `/search/${path}`;
// }

const renderSelect = ({input, meta, type, name, value, className}) =>
  <select {...input}>
    <option value="vote_average">Rating</option>
    <option value="release_date">Release date</option>
  </select>

const renderInput = ({input, meta, type, name, value, className}) =>
  <input type={type} name={name} className={className} placeholder='Search' value={value} {...input}/>

let SearchComponent = props => {
  const handleSubmit = props.handleSubmit;
  const submitting = props.submitting;

  const showResults = (value) => {
    let {search, searchBy, sortBy} = value;
    let title, path;

    if(search != undefined ) {
      title = encodeURIComponent(search);
      path = `search=${title}`
    }
    (searchBy != undefined )? path = path + `&searchBy=${searchBy}` : path = path + `&searchBy=title`;
    (sortBy != undefined  && title != undefined) ? path = `sortOrder=${sortBy}&` + path : path = `sortOrder=vote_average&` + path;

    props.history.push(`/search/${path}`);
    // window.location.pathname = `/search/${path}`;
  }

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
                <SearchResult />
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
  posts: PropTypes.array
}

const mapStateToProps = state => {
  return {
    posts: state.moviesState.posts
  }
}

SearchComponent = withRouter(reduxForm({
  form: 'search',
  destroyOnUnmount: false
})(SearchComponent));

export default connect(mapStateToProps)(SearchComponent);

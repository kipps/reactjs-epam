import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from "react-bootstrap/Button";
import history from "../../history";

const showResults = (value) => {
  // let path;
  // history.push(path);
  // https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average&search=father&searchBy=title
}

const renderInput = ({input, meta, type, name, value, className}) =>
  <select {...input}>
    <option value="vote_count">Rating</option>
    <option value="release_date">Release date</option>
  </select>

let SortComponent = ({handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit(showResults)}>
        <Field name='sortBy' className={'full mr-16'} type='select' component={renderInput}/>
        <Button type='submit' className={'ml-16'} variant="secondary" size="sm">Sort</Button>
      </form>
    </div>
  )
}

SortComponent = reduxForm({
  form: 'sortForm',
  initialValues: {
    sortBy: 'vote_count'
  }
})(SortComponent)

export default SortComponent;
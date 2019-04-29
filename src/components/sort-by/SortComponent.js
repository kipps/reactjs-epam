import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from "react-bootstrap/Button";

function showResults(value) {
  console.log('sorted', value)
}

function handleChange(event) {
  console.log(event);
}

const renderInput = ({input, meta, type, name, value, className}) =>
  <select {...input}>
    <option value="rating">Rating</option>
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
  form: 'sortForm'
})(SortComponent)

export default SortComponent;
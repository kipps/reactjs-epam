import React from 'react';

const renderRadioList = (array) => {
  return array.label.map((item) =>
    <label key={item} name={array.name} className='inline ml-8 mr-8'>
      <span className='inline mr-4'>{item}</span>
      <input type='radio' name={array.name}/>
    </label>
  )
  console.log(array)
};

const Radio = (props) => {
  return (
    <div className={props.className + ' Radio'}>
      {renderRadioList(props)}
    </div>
  );
}

export default Radio;
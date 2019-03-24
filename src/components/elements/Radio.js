import React from 'react';

const Radio = (props) => {
  return(
   <div className={props.className + ' Radio'}>
     <label className='mr-12'>
       <span>{props.label_1}</span>
       <input name={props.name} value={props.label_1} type="radio" className='ml-8'/>
     </label>
     <label>
       <span>{props.label_2}</span>
       <input name={props.name} value={props.label_2} type="radio" className='ml-8'/>
     </label>
   </div>
  );
}

export default Radio;
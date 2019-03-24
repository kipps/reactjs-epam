import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const User = (props) => {
  return (
    <div className='User'>
      <a href='#' className='User__link black'>
        {props.name}
      </a>
    </div>
  );
}

export default User;
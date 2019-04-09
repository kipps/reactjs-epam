import {connect} from 'react-redux';
import React from "react";
import Movie from "../movie/Movie";

const User = (props) => {
  const { name, surname, age } = props.user
  return (
    <div className='User'>
      <a href='#' className='User__link black'>
          {name} {surname}
      </a>
    </div>
  );
}

const mapStateToProps = store => {
    return {
        user: store.user,
    }
}

export default connect(mapStateToProps)(User)
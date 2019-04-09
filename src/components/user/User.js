import {connect} from 'react-redux';
import React from "react";

const User = (props) => {
  const { name } = props;
  return (
    <div className='User'>
      <a href='#' className='User__link black'>
          {name}
      </a>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        name: state.userState.name,
    }
}

export default connect(mapStateToProps)(User)
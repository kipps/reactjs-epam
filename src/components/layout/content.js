import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InformTools from '../inform-tools/InformTools'
import MoviesList from '../movies-list/MoviesList'

class Content extends React.Component {
  render() {
    return (
      <div className='Content'>
        <div className='pt-8 pb-8 grey'>
          <InformTools/>
        </div>
        <div className='pt-24 pb-24'>
          <MoviesList movies={this.props.movies}/>
        </div>
      </div>
    );
  }
}

export default Content;
import React from 'react';
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';


class PageNotFoundComponent extends React.Component {
  render() {
    return (
      <Container>
        <div className={'text-center'}>
          <Link to={'/'} className={'link-clear inline mb-40'}>
            <i className="fas fa-chevron-left inline mr-8"></i>
            So, you can back to main page and try again!
          </Link>

          <h2 className={'mb-40'} style={{fontSize: '110px'}}>404</h2>
          <h3 className={'f-large mb-8'}>Ooops! Page not found</h3>
          <p><b>Something wrong, please send email to support.</b></p>
        </div>
      </Container>
    )
  }
}


export default PageNotFoundComponent;
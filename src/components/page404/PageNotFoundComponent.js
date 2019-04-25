import React from 'react';
import Container from "react-bootstrap/Container";


class PageNotFoundComponent extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <h2 className={'f-large mb-8'}>Page not found</h2>
                    <p><b>Something wrong, please send email to support.</b></p>
                </div>
            </Container>
        )
    }
}


export default PageNotFoundComponent;
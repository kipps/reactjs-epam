import React from 'react';
import User from '../user/User';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchComponent from "../search/SearchComponent";

class Header extends React.Component {
    render() {
        return (
            <header className="Header pt-24 pb-24">
                    <Container>
                        <Row className='mb-24'>
                            <Col className='flex v-center'>
                                <h1 className='white f-large'>Movies for fun</h1>
                            </Col>
                            <Col className='flex v-center h-right'>
                                <User/>
                            </Col>
                        </Row>
                        <SearchComponent className={'full'}/>
                    </Container>
            </header>
        );
    }
}

export default Header;

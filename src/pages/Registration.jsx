import { Navbar, Container, Button, Form, Row, Col } from 'react-bootstrap';
import NavBar from '../components/Navbar_home';


function BasicExample() {
    return (
        <>
            <NavBar />

            <Container>
                <Form style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, 30%)' }}>
                
                    <Row>
                        <Col></Col>
                        <Col>
                            <h4 className='text-center'>REGISTER</h4>
                        </Col>
                        <Col></Col>
                    </Row>


                    <Row>
                        <Col></Col>
                        <Col className='pt-2 text-end bg-dark text-light'>
                            <Form.Label><p>User Name</p></Form.Label>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Control style={{ width: '100%' }} type="text" placeholder="Enter username" />
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col className='pt-2 text-end bg-dark text-light'>
                            <Form.Label><p>E-Mail</p></Form.Label>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Control style={{ width: '100%' }} type="email" placeholder="Enter E-Mail" />
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col className='pt-2 text-end bg-dark text-light'>
                            <Form.Label><p>Password</p></Form.Label>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Control style={{ width: '100%' }} type="password" placeholder="Enter Password" />
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col className='pt-2 text-end bg-dark text-light'>
                            <Form.Label><p>Confirm Password</p></Form.Label>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Control style={{ width: '100%' }} type="password" placeholder="Retype Password" />
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row>
                        <Col> </Col>
                        <Col> </Col>
                        <Col>
                            <Button style={{ width: '100%', position: 'relative', top: '50%', left: '51%', transform: 'translate(-50%, 50%)' }} variant="primary" type="submit">
                                Login
                            </Button>
                        </Col>
                        <Col> </Col>
                        <Col></Col>
                    </Row>


                </Form>

                <Row>
                    <Col>
                        <Navbar bg="dark" variant="dark" fixed="bottom">
                            <Container>
                                <Navbar.Text className='mx-auto text-center'>
                                    <h5>MERIDA. MORE BIKE.</h5>
                                    <p> &copy; 2023 MERIDA BIKES. All rights reserved.</p>
                                </Navbar.Text>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default BasicExample;

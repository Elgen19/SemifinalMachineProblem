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




        // <>
        //     <NavBar />

        //     <div>


        //         <Form style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, 70%)' }}>
        //             <h3 className='text-center'>Register</h3>

        //             <Form.Group className="mx-5 d-flex justify-content-center align-items-center" controlId="formBasicUserName">
        //                 <Form.Label className='p-3'>User Name</Form.Label>
        //                 <Form.Control style={{ width: '25%' }} type="text" placeholder="Enter user name" />
        //             </Form.Group>

        //             <Form.Group className="mx-5 d-flex justify-content-center align-items-center" controlId="formBasicEmail">
        //                 <Form.Label className='p-3'>E-mail</Form.Label>
        //                 <Form.Control style={{ width: '25%' }} type="email" placeholder="Enter E-mail" />
        //             </Form.Group>

        //             <Form.Group className="mx-5 d-flex justify-content-center align-items-center" controlId="formBasicPassword1">
        //                 <Form.Label className='p-4'>Password</Form.Label>
        //                 <Form.Control style={{ width: '25%' }} type="password" placeholder="Password" />
        //             </Form.Group>

        //             <Form.Group className="mx-5 d-flex justify-content-center align-items-center" controlId="formBasicPassword2">
        //                 <Form.Label className='p-4'>Confirm Password</Form.Label>
        //                 <Form.Control style={{ width: '25%' }} type="password" placeholder="Confirm Password" />
        //             </Form.Group>

        //             <Form.Group>

        //                 <Button style={{ width: '20%', position: 'relative', top: '50%', left: '51%', transform: 'translate(-50%, 50%)' }} variant="primary" type="submit">
        //                     Login
        //                 </Button>
        //             </Form.Group>
        //         </Form>



        //         <Navbar bg="dark" variant="dark" fixed="bottom">
        //             <Container>
        //                 <Navbar.Text className='mx-auto text-center'>
        //                     <h5>MERIDA. MORE BIKE.</h5>
        //                     <p> &copy; 2023 MERIDA BIKES. All rights reserved.</p>
        //                 </Navbar.Text>
        //             </Container>
        //         </Navbar>
        //     </div>

        // </>
    );
}

export default BasicExample;

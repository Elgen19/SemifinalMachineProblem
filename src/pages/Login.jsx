import { Navbar, Container, Button, Form, Card, CardGroup } from 'react-bootstrap';
import NavBar from '../components/Navbar_home';


function BasicExample() {
    return (
        <>
            <NavBar />

            <div>
                     
                <Form style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, 70%)' }}>
                    <h3 className='text-center'>Sign In</h3>

                    <Form.Group className="mx-5 d-flex justify-content-center align-items-center" controlId="formBasicUserName">
                        <Form.Label className='p-3'>User Name</Form.Label>
                        <Form.Control style={{ width: '25%' }} type="text" placeholder="Enter user name" />
                    </Form.Group>

                    <Form.Group className="mx-5 d-flex justify-content-center align-items-center" controlId="formBasicPassword">
                        <Form.Label className='p-4'>Password</Form.Label>
                        <Form.Control style={{ width: '25%' }} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group>

                        <Button style={{ width: '20%', position: 'relative', top: '50%', left: '51%', transform: 'translate(-50%, 50%)' }} variant="primary" type="submit">
                            Login
                        </Button>
                    </Form.Group>
                </Form>

          

                <Navbar bg="dark" variant="dark" fixed="bottom">
                    <Container>
                        <Navbar.Text className='mx-auto text-center'>
                            <h5>MERIDA. MORE BIKE.</h5>
                            <p> &copy; 2023 MERIDA BIKES. All rights reserved.</p>
                        </Navbar.Text>
                    </Container>
                </Navbar>
            </div>

        </>
    );
}

export default BasicExample;

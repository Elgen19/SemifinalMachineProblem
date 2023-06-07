import { Container, Button, Form, Card, Row, Col } from 'react-bootstrap';
import NavBar from '../components/Navbar_home';
import FooterDisplay from '../components/FooterDisplay';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';


function LoginPage() {
    const relocateTo = useNavigate();
    const [email, setEmail] = useState(localStorage.getItem("email") ||"");
    const [password, setPassword] = useState("");
    const formGroups = [
        { controlId: "formBasicEmail", label: "Email address", type: "email", placeholder: "Enter email" , onchange: (e) => setEmail(e.target.value)},
        { controlId: "formBasicPassword", label: "Password", type: "password", placeholder: "Enter password", onchange: (e) => setPassword(e.target.value) }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        relocateTo('/');
      };
    return (

        <>
            <Container fluid style={{ padding: 0, overflowX: 'hidden', backgroundColor: 'black', color: 'white' }}>
            {/*NAVIGATION BAR DISPLAY */}
            <NavBar />
                <Row noGutters>
                    <Col>
                        <Card style={{ border: '0' }}>
                            <Card.Img variant="top" src="https://i.nextmedia.com.au/News/20190927100215_LR1_7389.jpg" style={{ height: '650px' }} className='rounded-0' />
                        </Card>
                    </Col>


                    <Col style = {{paddingLeft: '50px', paddingRight: '50px', paddingTop: '100px'}}>
                        <Form>
                            <h3 className='mb-5 text-center'>Welcome Back</h3>

                            {formGroups.map((group) => (
                                <Form.Group className="mb-3" controlId={group.controlId} key={group.controlId}>
                                    <Form.Label>{group.label}</Form.Label>
                                    <Form.Control type={group.type} placeholder={group.placeholder} onChange= {group.onchange} />
                                </Form.Group>
                            ))}
                            
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>



                            <Button variant="primary" type="submit" className='w-100' onClick={handleSubmit}>
                                Sign In
                            </Button>

                            <Link to="/Registration"><p className='mt-3 text-center'>Don't have an account? Sign up.</p></Link>


                        </Form>
                    </Col>
                </Row>
                {/*FOOTER DISPLAY */}
                <FooterDisplay/>
            </Container>
        </>

    );
}

export default LoginPage;
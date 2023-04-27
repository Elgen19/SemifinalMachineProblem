import { Navbar, Container, Button, Form, Card, CardGroup } from 'react-bootstrap';
import NavBar from '../components/Navbar_home';


function BasicExample() {
    return (
        <>
            <NavBar />

            <div>
                      {/* <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2022/BIG_TRAIL_700_blublk_MY2022.tif?p3" />
                    <Card.Body>
                        <Card.Title className="text-justify">BIG TRAIL 700</Card.Title>
                        <Card.Text>
                            29er aluminium hardcore hardtail with FOX 34 Float 140mm fork, Shimano SLX 1 x 12 drivetrain, XT multi-release shifter and a dropper seat post.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2022_Mockups_Assemblings/BIG_TRAIL_600_grnred_MOC22_1.tif?p3" />
                    <Card.Body>
                        <Card.Title>BIG TRAIL 600</Card.Title>
                        <Card.Text className="text-justify">
                            29er aluminium hardcore hardtail with Marzocchi Z2 140mm fork, Shimano Deore 1 x 12 drivetrain and a dropper seat post.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2022/BIG_TRAIL_500_gldblk_MY2022.tif?p3" />
                    <Card.Body>
                        <Card.Title>BIG TRAIL 400</Card.Title>
                        <Card.Text className="text-justify">
                            29er aluminium hardcore hardtail with Suntour XCR34 140mm air fork, Shimano Deore 1 x 10 drivetrain and a dropper seat post.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup> */}
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

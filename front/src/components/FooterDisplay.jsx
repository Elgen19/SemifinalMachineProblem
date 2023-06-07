import { Navbar, Container } from 'react-bootstrap';


function BasicExample() {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container>
                <Navbar.Text className='mx-auto text-center'>
                    <h5>MERIDA. MORE BIKE.</h5>
                    <p> &copy; 2023 MERIDA BIKES. All rights reserved.</p>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default BasicExample;

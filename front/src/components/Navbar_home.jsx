import { Container, Nav, Navbar } from 'react-bootstrap';
import Homepages from '../pages/Homepage';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MERIDA</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">BIKES</Nav.Link>          
            <Nav.Link href="">PARTS AND ACCESSORIES</Nav.Link>
            <Nav.Link href="/Login">LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
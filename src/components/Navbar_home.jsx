import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MERIDA</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">BIKES</Nav.Link>
            <Nav.Link href="#home">E-BIKES</Nav.Link>
            <Nav.Link href="#features">NEWS</Nav.Link>
            <Nav.Link href="#pricing">LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
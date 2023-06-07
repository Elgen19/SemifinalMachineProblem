import React, { useState } from 'react';
import { Container, Button, Form, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavBar from '../components/Navbar_home';
import FooterDisplay from '../components/FooterDisplay';
import { Link } from 'react-router-dom';

function RegistrationPage() {
  const [entries, setRegistration] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setRegistration((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/users/add", entries)
      .then((res) => {
        setRegistration({ firstname: "", lastname: "", email: "", password: "" });
        console.log("User added", res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  };

  const formGroups = [
    { controlId: "formBasicFirstName", label: "First Name", type: "text", placeholder: "Enter First Name", name: "firstname", value: entries.firstname },
    { controlId: "formBasicLastName", label: "Last Name", type: "text", placeholder: "Enter Last Name", name: "lastname", value: entries.lastname },
    { controlId: "formBasicEmail", label: "E-Mail", type: "email", placeholder: "Enter E-Mail", name: "email", value: entries.email },
    { controlId: "formBasicPassword", label: "Password", type: "password", placeholder: "Enter password", name: "password", value: entries.password },
  ];

  return (
    <>
      <Container fluid style={{ padding: 0, overflowX: 'hidden', backgroundColor: 'black', color: 'white' }}>
        {/*NAVIGATION BAR DISPLAY */}
        <NavBar />

        <Row noGutters>
          {/* THIS COLUMN REPRESENTS THE LEFT SIDE. THIS DISPLAYS AN IMAGE.*/}
          <Col>
            <Card style={{ border: '0' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/R.2bc3a040455f8e1bbb8b0babdd4b5ade?rik=vH2nVl%2f6J85yHQ&riu=http%3a%2f%2fbikerumor.com%2fwp-content%2fuploads%2f2016%2f05%2fMerida_Big-Trail_cross-country-Trail-aluminum-alloy-hardtail-mountain-bike_complete_r.jpg&ehk=tmsKjyjXRQFtEkO8e%2fofg8gED8exRvNyjyivupEyMt4%3d&risl=&pid=ImgRaw&r=0" style={{ height: '650px' }} className='rounded-0' />
            </Card>
          </Col>

          {/*THIS COLUMN REPRESENTS THE RIGHT SIDE. THIS DISPLAYS THE FORMS.*/}
          <Col style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '0px' }}>
            <Form onSubmit={handleSubmit}>
              <h3 className='mt-3 mb-2 text-center'>Register</h3>

              {formGroups.map((group) => (
                <Form.Group className="mb-3" controlId={group.controlId} key={group.controlId}>
                  <Form.Label>{group.label}</Form.Label>
                  <Form.Control type={group.type} placeholder={group.placeholder} name={group.name} value={group.value} onChange={handleChange} />
                </Form.Group>
              ))}

              <Button variant="primary" type="submit" className='w-100'>
                Sign Up
              </Button>

              <Link to="/Login"><p className='mt-3 text-center'>Already have an account? Sign in.</p></Link>
            </Form>
          </Col>
        </Row>

        {/*FOOTER DISPLAY*/}
        <FooterDisplay />
      </Container>
    </>
  );
}

export default RegistrationPage;

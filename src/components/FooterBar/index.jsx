import React, { useState } from "react";
import { FaMailBulk, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const FooterBar = () => {
  // State to handle email input
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer className='footer text-white py-4'>
      <Container>
        <Row className='align-items-center justify-content-center text-start'>
          {/* Left Column with Form */}
          <Col xs={12} md={6} lg={5} className=' text-md-left'>
            <h5>Subscribe to Newsletter</h5>
            <p>Get the latest updates and news on Agriculture to your inbox!</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='email'>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant='primary' type='submit' className='mt-3'>
                Subscribe
              </Button>
            </Form>
            {message && <p className='mt-3'>{message}</p>}
          </Col>

          <Col xs={12} md={6} lg={5} className=' text-md-right mt-4 mt-md-0'>
            <h5>Connect With Me</h5>
            <p>Stay connected with the latest development in Agriculture</p>

            <a
              href='https://www.linkedin.com/in/lateef-sanni-9807131a6/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white mx-2'>
              <FaLinkedin size={30} />
            </a>
            <a
              href='mailto:name@email.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white mx-2'>
              <FaMailBulk size={30} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterBar;

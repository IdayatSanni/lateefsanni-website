import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Hero() {
  return (
    <Container className='hero-container'>
      <Row className='align-items-center'>
        <Col xs={12} md={4} lg={6} className='text-start'>
          <h1>PROFESSOR LATEEF OLADIMEJI SANNI</h1>
          <p>
            Professor Lateef Oladimeji Sanni, a Professor of Food Science and
            Technology from Federal University of Agriculture, Abeokuta, the
            President, International Society of Tropical Root Crops (ISTRC),
            Executive Director, Nigerian Stored Products Research Institute
            (NSPRI).
          </p>
        </Col>
        <Col xs={12} md={12} lg={6} className='d-flex justify-content-center'>
          <img
            src='/images/hero-img.JPG'
            alt='Professor Lateef Oladimeji Sanni'
            className='img-fluid hero-img'
          />
        </Col>
      </Row>
    </Container>
  );
}

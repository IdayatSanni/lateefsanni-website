import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutSection() {
  return (
    <Container className=' py-4'>
      <Row className='align-items-center justify-content-center'>
        <Col xs={12} md={4} lg={12} className='text-center'>
          <p>
            Professor Lateef Sanni has 32 years of experience as a post-harvest
            expert on tropical root crops, mostly with the Natural Resources
            Institute in the United Kingdom, and the International Institute of
            Tropical Agriculture, the Association of African Universities, the
            West and Central African Council for Agricultural Research and
            Development (CORAF/WECARD), and the International Society of
            Tropical Root Crops.
          </p>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs={12} md={4} lg={3} className='gallery-item mb-2'>
          <img
            src='/images/gallery-imag1.JPG'
            alt='Gallery Image 1'
            className='img-fluid gallery-img'
          />
        </Col>
        <Col xs={12} md={4} lg={3} className='gallery-item mb-2'>
          <img
            src='/images/gallery-imag2.JPG'
            alt='Gallery Image 2'
            className='img-fluid gallery-img'
          />
        </Col>
        <Col xs={12} md={4} lg={3} className='gallery-item mb-2'>
          <img
            src='/images/gallery-imag3.JPG'
            alt='Gallery Image 3'
            className='img-fluid gallery-img'
          />
        </Col>
        <Col xs={12} md={4} lg={3} className='gallery-item mb-2'>
          <img
            src='/images/gallery-imag4.JPG'
            alt='Gallery Image 4'
            className='img-fluid gallery-img'
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;

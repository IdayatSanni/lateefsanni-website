import React, { useState } from "react";
import Calendar from "react-calendar";
import { Container, Row, Col } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";

export default function CalendarForm() {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <Row className='justify-content-center align-items-center'>
        <Col xs={12} md={6} lg={6} className='text-start'>
          <h2>Book A Free 15Mins Consultation</h2>
          <p>
            All information will be communcated via email once a date has been
            book
          </p>
        </Col>

        <Col xs={12} md={6} lg={4} className='calendar-container'>
          <Calendar onChange={onChange} value={value} />
        </Col>
      </Row>
    </Container>
  );
}

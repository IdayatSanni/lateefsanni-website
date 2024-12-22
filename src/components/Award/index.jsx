import React from "react";
import Card from "react-bootstrap/Card";


export default function Award({ award }) {
  return (
    <Card className='bg-white text-dark m-2 justify-content-center'>
      <Card.Img
        src='/images/award-logo-2.svg'
        alt='Award Logo'
        className='img-fluid opacity-25'
      />

      <Card.ImgOverlay className='d-flex flex-column justify-content-center text-center'>
        <Card.Title className='fw-bold text-wrap'>
          {award.organization}
        </Card.Title>
        <Card.Text className='award-text fw-semibold text-wrap'>
          {award.award}
        </Card.Text>
        <Card.Text className='award-date fw-bold'>{award.awardDate}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

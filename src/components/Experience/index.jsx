import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Container from "react-bootstrap/Container";

const Experience = () => {
  return (
    <Container className='hero-container'>
      <VerticalTimeline lineColor='#bc4123'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#fff", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(188, 65, 34)" }}
          date='2019 - present'
          iconStyle={{ background: "#bc4123" }}>
          <h3 className='vertical-timeline-element-title'>
            Director / Chief Executive Officer, NSPRI
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#fff", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(188, 65, 34)" }}
          date='2017 - 2019'
          iconStyle={{ background: "#bc4123" }}>
          <h3 className='vertical-timeline-element-title'>
            Deputy Vice-Chancellor (Development)
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#fff", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(188, 65, 34)" }}
          date='2014 - 2017'
          iconStyle={{ background: "#bc4123" }}>
          <h3 className='vertical-timeline-element-title'>
            Dean, College of Food Science and Human Ecology, Federal University
            of Agriculture, Abeokuta, Nigeria.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#fff", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(188, 65, 34)" }}
          date='2011 - 2013'
          iconStyle={{ background: "#bc4123" }}>
          <h3 className='vertical-timeline-element-title'>
            Head Food Science and Technology Department, Federal University of
            Agriculture, Abeokuta, Nigeria.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(67, 143, 229)", color: "#fff" }}
        />
      </VerticalTimeline>
    </Container>
  );
};

export default Experience;

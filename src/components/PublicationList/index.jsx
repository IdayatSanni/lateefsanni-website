import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import Publication from "../Publication";

const PublicationList = ({ numberOfPublications }) => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://node-express-app-lr3l.onrender.com/api/publication"
        );
        const data = await response.json();
        setPublications(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const publicationsToDisplay = numberOfPublications
    ? publications.slice(0, numberOfPublications)
    : publications;

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {publicationsToDisplay.map((publication) => (
          <Col key={publication._id}>
            <Card>
              <Card.Body>
                <Publication publication={publication} />
                <Link
                  to={`/publications/${publication._id}`}
                  state={{ publication }}
                  className='puublication-link'>
                  <Button id='btn-publication'>View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PublicationList;

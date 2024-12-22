import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Award from "../Award";

const AwardList = ({ numberOfAwards }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: numberOfAwards || 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://node-express-app-lr3l.onrender.com/api/award"
        );
        const data = await response.json();
        setAwards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container className='my-4 py-4'>
      <div>
        <h2>Award List</h2>
        <Container className=''>
          <Slider {...settings}>
            {awards.map((award) => (
              <div key={award._id}>
                <Award award={award} />
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </Container>
  );
};

export default AwardList;

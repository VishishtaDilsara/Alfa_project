import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Next } from "react-bootstrap/esm/PageItem";

export const ProjectCard = ({ title, description, imgUrl, moreImages }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div className="slick-next">Next</div>,
    prevArrow: <div className="slick-prev">Prev</div>,
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Close" : "Show More"}
          </Button>
        </div>

        {showMore && (
          <div className="slider-overlay">
            <div className="slider-container">
              {/* React Slick Slider */}
              <Slider {...sliderSettings}>
                {moreImages &&
                  moreImages.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Additional image ${index + 1}`} />
                    </div>
                  ))}
              </Slider>
              <Button
                className="close-slider"
                onClick={() => setShowMore(false)}
              >
                Close
              </Button>
            </div>
            <div
              className="slider-overlay-background"
              onClick={() => setShowMore(false)}
            ></div>
          </div>
        )}
      </div>
    </Col>
  );
};

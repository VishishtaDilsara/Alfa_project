import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import reviewImg1 from "../assets/img/Review/1.jpg";
import reviewImg2 from "../assets/img/Review/2.jpg";
import reviewImg3 from "../assets/img/Review/3.jpg";
import reviewImg4 from "../assets/img/Review/4.jpg";
import star5 from "../assets/img/Review/Stars/5-stars.png";
import star4_5 from "../assets/img/Review/Stars/4.5-stars.png";
import star4 from "../assets/img/Review/Stars/4-stars.png";


// Sample review data
const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: reviewImg1,
    feedback: "Amazing service! Highly recommended.",
    stars: star5,
    date: "March 20, 2025",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: reviewImg2,
    feedback: "Professional and creative designs!",
    stars: star4,
    date: "March 18, 2025",
  },
  {
    id: 3,
    name: "Michael Lee",
    image: reviewImg3,
    feedback: "Very satisfied with the branding work.",
    stars: star4_5,
    date: "March 15, 2025",
  },
  {
    id: 4,
    name: "Reena Dante",
    image: reviewImg4,
    feedback: "Very professional and Modern looking output.",
    stars: star4_5,
    date: "March 10, 2025",
  },
];

export const Reviews = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Reviews</h2>
              <p>
                We specialize in creating effective digital strategies that
                drive growth, boost engagement, and enhance your online
                presence.
                <br />
                Our expertise covers a wide range of digital marketing solutions
                to help your business succeed.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {reviews.map((review) => (
                  <div className="review-card" key={review.id}>
                    <img
                      src={review.image}
                      alt={review.name}
                      className="reviewer-img"
                    />
                    <h5 className="reviewer-name">{review.name}</h5>
                    <p className="review-text">{review.feedback}</p>
                    <img
                      src={review.stars}
                      alt="rating"
                      className="review-stars"
                    />
                    <p className="review-date">{review.date}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};

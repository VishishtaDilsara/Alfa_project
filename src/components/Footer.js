import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/NAME.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-4">
          {/* Logo Section */}
          <Col md={4} sm={12}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>

          {/* Quick Links Section */}
          <Col md={4} sm={12} className="text-center text-sm-start">
            <h5 className="footer-heading">Navigate</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} sm={12} className="text-center text-sm-end">
            <h5 className="footer-heading-contact">Contact Us</h5>
            <p>123 Main St, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 234 567 890</p>
            <div className="social-icon mt-3">
              <a href="">
                <img src={navIcon1} alt="Icon 1" />
              </a>
              <a href="">
                <img src={navIcon2} alt="Icon 2" />
              </a>
              <a href="">
                <img src={navIcon3} alt="Icon 3" />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="text-center pt-4">
          <Col sm={12}>
            <p className="text-muted">
              &copy; 2025 Your Company. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

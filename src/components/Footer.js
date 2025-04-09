import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Noxium Logo full.png";
import navIcon1 from "../assets/img/icon-tiktok.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/icon-behance.svg";

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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} sm={12} className="text-center text-sm-end">
            <h5 className="footer-heading-contact">Contact Us</h5>
            <p>No.01,Indigasketiya, Baddegama</p>
            <p>Email: vishishtadilsara2002@gmail.com</p>
            <p>Phone: +94 787673391</p>
            <div className="social-icon mt-3">
              <a
                href="https://www.tiktok.com/@_vish_x__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Icon 1" />
              </a>
              <a
                href="https://www.facebook.com/share/1XyohWZCqX/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Icon 2" />
              </a>
              <a
                href="https://www.behance.net/vishishdilsara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Icon 3" />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="text-center pt-4">
          <Col sm={12}>
            <p className="text-muted">
              &copy; 2025 Noxium. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

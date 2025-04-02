import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectImg1 from "../assets/img/Project images/Logo Noxium New/1.png";
import projectImg2 from "../assets/img/Project images/Logo Noxium New/2.png";
import projectImg3 from "../assets/img/Project images/Logo Noxium New/3.png";
import projectImg4 from "../assets/img/Project images/Logo Noxium New/4.png";
import projectImg5 from "../assets/img/Project images/Logo Noxium New/5.png";
import projectImg6 from "../assets/img/Project images/Logo Noxium New/6.png";
import projectImg7 from "../assets/img/Project images/Logo Noxium New/7.png";
import projectImg8 from "../assets/img/Project images/Logo Noxium New/8.png";
import projectImg9 from "../assets/img/Project images/Logo Noxium New/9.png";
import projectImg10 from "../assets/img/Project images/Logo Noxium New/10.png";
import projectImg11 from "../assets/img/Project images/Logo/projImg11.png";
import projectImg13 from "../assets/img/Project images/Logo/projImg13.png";

import colorSharp2 from "../assets/img/color-sharp2.png";

import projectImg1_1 from "../assets/img/Project images/Logo Noxium New/1.1.png";
import projectImg1_2 from "../assets/img/Project images/Logo Noxium New/1.2.png";
import projectImg1_3 from "../assets/img/Project images/Logo Noxium New/1.3.png";

import projectImg2_1 from "../assets/img/Project images/Logo Noxium New/2.1.png";
import projectImg2_2 from "../assets/img/Project images/Logo Noxium New/2.2.png";
import projectImg2_3 from "../assets/img/Project images/Logo Noxium New/2.3.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const Projects = [
    {
      title: "A+ Institute",
      description:
        "Designed to the Institute of Education A + Education. We made sure to prepare as a simple logo and easy to remember.",
      imgUrl: projectImg1,
      moreImages: [projectImg1_1, projectImg1_2, projectImg1_3],
    },
    {
      title: "Mouj The Maa",
      description:
        " A Logo, created for a traditional manufacturing company in India. The specialty of this is that it is designed to symbolize a woman (his mother). It was his request. Created using illustrator & built in 2-3 days.",
      imgUrl: projectImg2,
      moreImages: [projectImg2_1, projectImg2_2, projectImg2_3],
    },
    {
      title: "Eyes of the NISH",
      description:
        "A logo designed to the Youtube channel. Client's request was to add his chariots logo. He chose the individual Silver color and this was completed within 3 days.",
      imgUrl: projectImg3,
    },
    {
      title: "Dahan Trading",
      description:
        "A design that came to Alfhaxeonix as a Farlancing Oder to a farm in Australia. Clint requests three animals to create logo to represent a farm.",
      imgUrl: projectImg4,
    },
    {
      title: "Madhava's Kitchen",
      description:
        "A little different logo. Mr. Mahadawa The kitchen logo is designed to an Indian Client.This took 3 days to finish it was created by the software.",
      imgUrl: projectImg5,
    },
    {
      title: "Namma Uur",
      description:
        "One of the most enjoyable logo, Designed with the fish industry, it was created through the Illustrator Software.",
      imgUrl: projectImg6,
    },
    {
      title: "Kebab Corner",
      description:
        "One of the designed to a Indonesian Clint, his request was a colorful, delicious logo, alfhaxeonix, and gave us his request for three days.",
      imgUrl: projectImg7,
    },
    {
      title: "Auto Mobile",
      description:
        "At a time ago for the Auto Mobil, London suddenly created a logo.",
      imgUrl: projectImg8,
    },
    {
      title: "Monarch",
      description:
        "An Art logo designed for Monarch Hotel. Created by photoshop software.",
      imgUrl: projectImg9,
    },
    {
      title: "School in India",
      description:
        "Alfhaxeonix creating logo in any language, and this was based on a school in India.",
      imgUrl: projectImg10,
    },
    {
      title: "Clean Colour Gems",
      description:
        "Mr. Malith Maduranga is one of the oders given to us. Designed to the minimal logo format, this was official logo His GEM BUSINESS",
      imgUrl: projectImg11,
    },

    {
      title: "Austrailian Spice Business",
      description:
        "AlfhaXeonix successfully designed a traditional logo for Mr. Herman Melanson's spice business in Australia. The logo embodies a classic and authentic aesthetic, incorporating elements that reflect the rich heritage and natural essence of the spice trade. With earthy tones and elegant design details, it captures the authenticity and quality of the products while resonating with both traditional and modern markets.",
      imgUrl: projectImg13,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Our Projects</h2>
            <p>
              Here are some of the projects we’ve successfully delivered to our
              clients. We take pride in our work and the impact these projects
              have made. Explore our diverse range of completed projects,
              showcasing our commitment to quality and innovation.
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                is="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Logo Designs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Facebook Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">AI Arts</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {Projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          moreImages={project.moreImages}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum 2</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum 3</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

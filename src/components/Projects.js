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

import colorSharp2 from "../assets/img/color-sharp2.png";

import projectImg1_1 from "../assets/img/Project images/Logo Noxium New/1.1.png";
import projectImg1_2 from "../assets/img/Project images/Logo Noxium New/1.2.png";
import projectImg1_3 from "../assets/img/Project images/Logo Noxium New/1.3.png";

import projectImg2_1 from "../assets/img/Project images/Logo Noxium New/2.1.png";
import projectImg2_2 from "../assets/img/Project images/Logo Noxium New/2.2.png";
import projectImg2_3 from "../assets/img/Project images/Logo Noxium New/2.3.png";

import projectImg3_1 from "../assets/img/Project images/Logo Noxium New/3.1.png";
import projectImg3_2 from "../assets/img/Project images/Logo Noxium New/3.2.png";
import projectImg3_3 from "../assets/img/Project images/Logo Noxium New/3.3.png";
import projectImg3_4 from "../assets/img/Project images/Logo Noxium New/3.4.png";
import projectImg3_5 from "../assets/img/Project images/Logo Noxium New/3.5.png";

import projectImg4_1 from "../assets/img/Project images/Logo Noxium New/4.1.png";
import projectImg4_2 from "../assets/img/Project images/Logo Noxium New/4.2.png";
import projectImg4_3 from "../assets/img/Project images/Logo Noxium New/4.3.png";
import projectImg4_4 from "../assets/img/Project images/Logo Noxium New/4.4.png";
import projectImg4_5 from "../assets/img/Project images/Logo Noxium New/4.5.png";

import projectImg5_1 from "../assets/img/Project images/Logo Noxium New/5.1.png";
import projectImg5_2 from "../assets/img/Project images/Logo Noxium New/5.2.png";
import projectImg5_3 from "../assets/img/Project images/Logo Noxium New/5.3.png";

import projectImg6_1 from "../assets/img/Project images/Logo Noxium New/6.1.png";
import projectImg6_2 from "../assets/img/Project images/Logo Noxium New/6.2.png";
import projectImg6_3 from "../assets/img/Project images/Logo Noxium New/6.3.png";

import projectImg7_1 from "../assets/img/Project images/Logo Noxium New/7.1.png";
import projectImg7_2 from "../assets/img/Project images/Logo Noxium New/7.2.png";
import projectImg7_3 from "../assets/img/Project images/Logo Noxium New/7.3.png";
import projectImg7_4 from "../assets/img/Project images/Logo Noxium New/7.4.png";

import projectImg8_1 from "../assets/img/Project images/Logo Noxium New/8.1.png";
import projectImg8_2 from "../assets/img/Project images/Logo Noxium New/8.2.png";
import projectImg8_3 from "../assets/img/Project images/Logo Noxium New/8.3.png";
import projectImg8_4 from "../assets/img/Project images/Logo Noxium New/8.4.png";

import projectImg9_1 from "../assets/img/Project images/Logo Noxium New/9.1.png";
import projectImg9_2 from "../assets/img/Project images/Logo Noxium New/9.2.png";
import projectImg9_3 from "../assets/img/Project images/Logo Noxium New/9.3.png";
import projectImg9_4 from "../assets/img/Project images/Logo Noxium New/9.4.png";

import projectImg10_1 from "../assets/img/Project images/Logo Noxium New/10.1.png";
import projectImg10_2 from "../assets/img/Project images/Logo Noxium New/10.2.png";
import projectImg10_3 from "../assets/img/Project images/Logo Noxium New/10.3.png";

import socialImg1 from "../assets/img/Project images/Social Media/1.png";
import socialImg2 from "../assets/img/Project images/Social Media/2.png";
import socialImg3 from "../assets/img/Project images/Social Media/3.png";
import socialImg4 from "../assets/img/Project images/Social Media/4.png";
import socialImg5 from "../assets/img/Project images/Social Media/5.png";
import socialImg6 from "../assets/img/Project images/Social Media/6.png";
import socialImg7 from "../assets/img/Project images/Social Media/7.png";
import socialImg8 from "../assets/img/Project images/Social Media/8.png";
import socialImg9 from "../assets/img/Project images/Social Media/9.png";

import otherImg1 from "../assets/img/Project images/Other/1.png";
import otherImg2 from "../assets/img/Project images/Other/2.png";
import otherImg3 from "../assets/img/Project images/Other/3.png";
import otherImg4 from "../assets/img/Project images/Other/4.png";
import otherImg5 from "../assets/img/Project images/Other/5.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const Projects = [
    {
      title: "NextGen Graphic",
      imgUrl: projectImg1,
      moreImages: [projectImg1_1, projectImg1_2, projectImg1_3],
    },
    {
      title: "Travel Tales",

      imgUrl: projectImg2,
      moreImages: [projectImg2_1, projectImg2_2, projectImg2_3],
    },
    {
      title: "See Lanka Travels",
      imgUrl: projectImg3,
      moreImages: [
        projectImg3_1,
        projectImg3_2,
        projectImg3_3,
        projectImg3_4,
        projectImg3_5,
      ],
    },
    {
      title: "Glam by Reena Beauty",
      imgUrl: projectImg4,
      moreImages: [
        projectImg4_1,
        projectImg4_2,
        projectImg4_3,
        projectImg4_4,
        projectImg4_5,
      ],
    },
    {
      title: "Mooi Lanka Travels",
      imgUrl: projectImg5,
      moreImages: [projectImg5_1, projectImg5_2, projectImg5_3],
    },
    {
      title: "Saksas Higher Educational Institute",
      imgUrl: projectImg6,
      moreImages: [projectImg6_1, projectImg6_2, projectImg6_3],
    },
    {
      title: "Jayawickrama Group",
      imgUrl: projectImg7,
      moreImages: [projectImg7_1, projectImg7_2, projectImg7_3, projectImg7_4],
    },
    {
      title: "Dzac by RnS",
      imgUrl: projectImg8,
      moreImages: [projectImg8_1, projectImg8_2, projectImg8_3, projectImg8_4],
    },
    {
      title: "DL Easy",
      imgUrl: projectImg9,
      moreImages: [projectImg9_1, projectImg9_2, projectImg9_3, projectImg9_4],
    },
    {
      title: "Chela Clicks Photography",
      imgUrl: projectImg10,
      moreImages: [projectImg10_1, projectImg10_2, projectImg10_3],
    },
  ];

  const SocialMediaProjects = [
    {
      imgUrl: socialImg1,
    },
    {
      imgUrl: socialImg2,
    },
    {
      imgUrl: socialImg3,
    },
    {
      imgUrl: socialImg4,
    },
    {
      imgUrl: socialImg5,
    },
    {
      imgUrl: socialImg6,
    },
    {
      imgUrl: socialImg7,
    },
    {
      imgUrl: socialImg8,
    },
    {
      imgUrl: socialImg9,
    },
  ];

  const OtherProjects = [
    {
      imgUrl: otherImg1,
    },
    {
      imgUrl: otherImg2,
    },
    {
      imgUrl: otherImg3,
    },
    {
      imgUrl: otherImg4,
    },
    {
      imgUrl: otherImg5,
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
                  <Nav.Link eventKey="second">Social Media Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Others</Nav.Link>
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
                <Tab.Pane eventKey="second">
                  <Row>
                    {SocialMediaProjects.map((project, index) => {
                      return (
                        <ProjectCard key={index} imgUrl={project.imgUrl} />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {OtherProjects.map((project, index) => {
                      return (
                        <ProjectCard key={index} imgUrl={project.imgUrl} />
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

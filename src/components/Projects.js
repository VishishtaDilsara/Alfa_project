import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectImg1 from "../assets/img/project-img1.png";
import projectImg2 from "../assets/img/project-img2.png";
import projectImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const Projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>lorem simple dummy line</p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                is="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {Projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
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

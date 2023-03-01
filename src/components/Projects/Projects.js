import { React, Component } from "react";
import { Container, Row, Col, ThemeProvider } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import data from "../../data/portfolio_shared_data.json";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let card = data.projects.map(function (i) {
      return (
        <Col md={5} className="project-card">
          <ProjectCard
            imgPath={i.images[0]}
            images={i.images}
            title={i.name}
            technologies={i.technologies}
            descriptions={i.descriptions}
            codelink={i.codeLink}
            liveDemoLink={i.liveDemoLink}
            videoLink={i.videoLink}
          />
        </Col>
      );
    });

    return (
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {card}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Projects;

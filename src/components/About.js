import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={"/images/about.png"} alt="about" className="img-fluid" />
          </Col>

          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              ABOUT <strong className="purple">ME</strong>
            </h1>

            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hi, I am <span className="purple">Quinn Peterson</span>.
                    <br /> <br />
                    I am passionate about creating and learning. I enjoy the
                    process of taking an idea and turning it into a functioning
                    program. When it comes to software engineering I am
                    constantly seeking new ways to improve my skills and stay up
                    to date with the latest and greatest technologies.
                    <br /> <br />I am excited about the opportunity to
                    contribute my skills and enthusiasm for creating and
                    learning to a company that shares my passion for technology
                    and understands the importance of working effectively with
                    others in a team environment.
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

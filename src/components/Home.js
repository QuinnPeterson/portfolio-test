import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Projects from "./Projects/Projects";
import Contact from "./Contact";
import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

import About from "./About";

import data from "../data/portfolio_shared_data.json";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">
                  {" "}
                  {data.basic_info.name.toLocaleUpperCase()}
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter
                  options={{
                    strings: data.basic_info.titles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>

              <div style={{ width: "100%", padding: 50, textAlign: "center" }}>
                {/* <Button variant="primary" href={""} target="_blank">
                  <BiLinkExternal /> &nbsp;
                  {"View Projects"}
                  
                </Button> */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={"/images/home-main.svg"}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </section>
  );
}

export default Home;

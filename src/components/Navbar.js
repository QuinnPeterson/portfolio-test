import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img
            src={"/portfolio-test/images/logo.png"}
            className="img-fluid logo"
            alt="brand"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link as={Link} to="" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item> */}

            <HashLink
              smooth
              to="/#projects"
              className="nav-link navbar-nav nav-item"
            >
              <a>
                {" "}
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </a>
            </HashLink>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link href="" target="" rel="noreferrer">
                <AiOutlineMail style={{ marginBottom: "2px" }} /> Email
              </Nav.Link>
            </Nav.Item> */}

            <HashLink
              smooth
              to="/#contact"
              className="nav-link navbar-nav nav-item"
            >
              <a>
                {" "}
                <AiOutlineMail style={{ marginBottom: "2px" }} /> Email
              </a>
            </HashLink>

            <Nav.Item>
              <Nav.Link
                href="https://github.com/QuinnPeterson"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub style={{ marginBottom: "2px" }} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://linkedin.com/in/quinn-peterson-software-engineer"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin style={{ marginBottom: "2px" }} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

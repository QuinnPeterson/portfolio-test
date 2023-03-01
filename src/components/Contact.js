import { React, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import emailjs from "@emailjs/browser";
import { Modal } from "react-bootstrap";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k2m192w",
        "template_a63jf42",
        form.current,
        "uMU4-ahsr2QlxyJwY"
      )
      .then(
        function () {
          console.log("SUCCESS!");
          e.target.reset();
          window.alert("Thank you, your email has been sent!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <Container fluid className="">
      <h1 className="project-heading">
        CONTACT <strong className="purple">ME </strong>
      </h1>
      <p style={{ color: "white" }}>
        {" "}
        I will respond as soon as possible. If you prefer to contact me
        directly, send your email to:{" "}
        <strong className="purple"> quinn.peterson99@gmail.com </strong>
      </p>

      {/* <!-- contact form --> */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="hidden" name="contact_number" />
        {/* <!-- name --> */}
        <div className="form-group">
          <label htmlFor="name" className="contact-label">
            Name
          </label>
          <input
            type="name"
            name="user_name"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* <!-- email --> */}
        <div className="form-group">
          <label htmlFor="email" className="contact-label">
            Email address
          </label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email_body" className="contact-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="email_body"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary contact-btn">
          Submit
        </button>
      </form>
    </Container>
  );
}

export default Contact;

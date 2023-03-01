import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

import { Link, Route, Routes } from "react-router-dom";

import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../../css/style.css";

class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      const images = this.props.data.images;
      var title = this.props.data.title;
      var videoLink = this.props.data.videoLink;
      var liveDemoLink = this.props.data.liveDemoLink;

      var descriptions = this.props.data.descriptions;

      var newLink = "";
      var buttonString = "Live Demo";

      if (videoLink) {
        newLink = videoLink;
        buttonString = "View Video";
      } else {
        newLink = liveDemoLink;
      }

      if (this.props.data.descriptions) {
        if (this.props.data.descriptions.length > 1) {
          var newDesc = descriptions.map((i) => {
            return <>{i}<br/><br/><br/><br/></>;
          });
        } else {
          newDesc = descriptions.map((i) => {
            return <>{i}</>;
          });
        }
      }

      if (this.props.data.images) {
        var img = images.map((elem, i) => {
          return <div key={i} data-src={elem} />;
        });
      }
    }

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <div className="modalRight">
          <p className="closeBtn" onClick={this.props.onHide}>
            X
          </p>
          <div className="content">
            <AwesomeSlider animation="cubeAnimation" className="slider-image">
              {img}
            </AwesomeSlider>

            <h1 className="modal-title">{title}</h1>

            <div className="tech-used">
              <h5>Technologies used</h5>
              {this.props.data.technologies.map(function (i) {
                return <h1 className="tech tech-icons-modal">{i}</h1>;
              })}
            </div>
            <div id="growth">{newDesc}</div>
          </div>

          <div className="btnContainer">
            <Button className="btnPrimary" href={this.props.data.codelink}>
              <AiFillGithub /> &nbsp;
              {"View Code"}
            </Button>
            <Button className="btnPrimary" href={newLink}>
              <BiLinkExternal /> &nbsp;
              {buttonString}
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;

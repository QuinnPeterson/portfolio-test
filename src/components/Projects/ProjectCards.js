import { React, Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import ProjectDetailsModal from "./ProjectDetailsModal";

class ProjectCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    return (
      <section id="portfolio">
        <Card className="project-card-view">
          <Card.Img variant="top" src={this.props.imgPath} alt="card-img" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Title>
              {this.props.technologies.map(function (i) {
                return <h1 className="tech">{i}</h1>;
              })}
            </Card.Title>
            <Button
              variant="primary"
              onClick={() => detailsModalShow(this.props)}
            >
              <BiLinkExternal /> &nbsp;
              {"View Project"}
            </Button>
          </Card.Body>
        </Card>

        <div className="col-md-12">
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.props}
          />
        </div>
      </section>
    );
  }
}

export default ProjectCards;

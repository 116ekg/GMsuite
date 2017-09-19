import React from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Col,
  Button,
  Well,
  Row
} from "react-bootstrap";
import axios from "axios";

export default class EditPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      lastName: "",
      firstName: "",
      height: "",
      weight: "",
      profilepic: "",
      teamName: "",
      teamMarket: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let temp = event.target.name;
    this.setState({
      [temp]: event.target.value
    });
  }

  handleSubmit() {
    axios
      .put(`/api/players/editPlayer`, this.state)
      .then(data => {
        console.log("EDITPLAYERDATA: ", data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <Row>
          <Col lg={12}>
            <h4 id="test">Edit Player</h4>
            <hr />
          </Col>
        </Row>
        <Well>
          <Row>
            <Form>
              <Col lg={3} lgOffset={1}>
                <FormGroup>
                  <ControlLabel>Last Name</ControlLabel>
                  {/* Maybe change service to dropdown selection */}
                  <FormControl
                    required
                    name="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col lg={3} lgOffset={1} sm={12}>
                <FormGroup>
                  <ControlLabel>Team City</ControlLabel>
                  <FormControl
                    name="teamMarket"
                    type="text"
                    placeholder="Enter Team Market"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col lg={3} sm={12}>
                <FormGroup>
                  <ControlLabel>Team Name</ControlLabel>
                  <FormControl
                    name="teamName"
                    type="text"
                    placeholder="Enter Team Name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col lg={3} lgOffset={1} sm={12}>
                <FormGroup>
                  <ControlLabel>First Name</ControlLabel>
                  <FormControl
                    name="firstName"
                    type="text"
                    placeholder="Enter First Name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col lg={3} lgOffset={1} sm={12}>
                <FormGroup>
                  <ControlLabel>Height</ControlLabel>
                  <FormControl
                    name="height"
                    type="text"
                    placeholder="Height"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col lg={3} sm={12}>
                <FormGroup>
                  <ControlLabel>Weight</ControlLabel>
                  <FormControl
                    name="weight"
                    type="text"
                    placeholder="Weight"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col lg={6} lgOffset={1} sm={12}>
                <FormGroup>
                  <ControlLabel>Player Picture</ControlLabel>
                  <FormControl
                    name="profilepic"
                    type="text"
                    placeholder="Enter player picture URL"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col lg={10} lgOffset={1} sm={12}>
                <FormGroup>
                  <ControlLabel>Additional Notes</ControlLabel>
                  <FormControl
                    componentClass="textarea"
                    name="formAdditionalNotes"
                    type="text"
                    placeholder="Enter any additional notes here"
                  />
                </FormGroup>
              </Col>
              <Col lg={10} lgOffset={1} sm={12}>
                <Button onClick={this.handleSubmit}>Submit</Button>
              </Col>
            </Form>
          </Row>
        </Well>
      </div>
    );
  }
}

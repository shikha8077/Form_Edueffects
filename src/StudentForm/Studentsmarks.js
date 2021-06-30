import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";

export default class Studentsmarks extends Component {
  state = {
    marks: { english: "", computer: "", math: "", science: "" },
  };
  handleSubmitMarks = (e) => {
    e.preventDefault();
    this.props.viewMarks(this.state.marks);
  };
  handleMarks = (e) => {
    console.log(e.target.value);
    let localMarks = this.state.marks;
    localMarks[e.target.name] = e.target.value;
    this.setState({ marks: localMarks });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmitMarks}>
          <Form.Group className="mb-3" controlId="maths">
            <Form.Label>Math</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter math marks"
              name="math"
              value={this.state.marks.math}
              onChange={this.handleMarks}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="English">
            <Form.Label>English</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter english marks"
              name="english"
              value={this.state.marks.english}
              onChange={this.handleMarks}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Science">
            <Form.Label>Science</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Science marks"
              name="science"
              value={this.state.marks.science}
              onChange={this.handleMarks}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="computer">
            <Form.Label>Computer</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter computer marks"
              name="computer"
              value={this.state.marks.computer}
              onChange={this.handleMarks}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

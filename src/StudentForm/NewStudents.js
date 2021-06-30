import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";

export default class NewStudents extends Component {
  state = {
    studentData: {
      name: "",
      course: "",
      year: "",
      id: "",
    },
    studentArray: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let localStudent = this.state.studentData;
    localStudent.id = Math.floor(Math.random() * 100);
    console.log(this.state.studentArray);
    // let localArray = [...this.state.studentArray];
    // localArray.push(localStudent);
    // this.setState({ studentArray: localArray });
    this.props.viewStudents(localStudent, 2);
  };
  handleInput = (e) => {
    console.log(e.target.value);
    let localData = this.state.studentData;
    localData[e.target.name] = e.target.value;
    this.setState({ studentData: localData });
  };
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Name"
              name="name"
              placeholder="Enter Name"
              value={this.state.studentData.name}
              onChange={this.handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="course"
              name="course"
              placeholder="Enter Course"
              value={this.state.studentData.course}
              onChange={this.handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="Year"
              name="year"
              placeholder="Enter Year"
              value={this.state.studentData.year}
              onChange={this.handleInput}
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

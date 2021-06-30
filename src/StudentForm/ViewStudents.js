import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, Form, Row, Col } from "react-bootstrap";

export default class ViewStudents extends Component {
  state = {
    studentData: this.props.studentData,
  };
  handleEnter = (id) => {
    this.props.marksEnter(id);
  };
  render() {
    console.log(this.state.studentData);
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th> Name</th>
              <th>Course</th>
              <th>Year</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            {this.state.studentData.map((p) => (
              <tr>
                <td>{p.name}</td>
                <td>{p.course}</td>
                <td>{p.year}</td>
                <td>{p.marks}</td>

                <td>
                  <Button
                    variant="primary"
                    onClick={() => this.handleEnter(p.id)}
                  >
                    Enter
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

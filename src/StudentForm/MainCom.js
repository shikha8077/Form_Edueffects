import React, { Component } from "react";
import NewStudents from "./NewStudents";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import ViewStudent from "./ViewStudents";
import Studentsmarks from "./Studentsmarks";

export default class MainCom extends Component {
  state = {
    view: 0,
    studentData: [],
    studentId: "",
    viewMarks: 0,
  };
  handleView = () => {
    this.setState({ view: 1 });
  };
  viewMarks = (marks) => {
    let localStudent = this.state.studentData;
    let totalMarks =
      parseInt(marks.science) +
      parseInt(marks.english) +
      parseInt(marks.computer) +
      parseInt(marks.math);
    let findIndex = localStudent.findIndex(
      (data) => data.id === this.state.studentId
    );
    localStudent[findIndex].marks = totalMarks;
    this.setState({
      view: 2,
      viewMarks: totalMarks,
      studentData: localStudent,
    });
  };
  viewStudents = (data, view) => {
    let localStudent = [...this.state.studentData];
    localStudent.push(data);
    this.setState({ studentData: localStudent, view });
  };
  marksEnter = (p) => {
    this.setState({ studentId: p, view: 3 });
  };
  render() {
    let localStudent = this.state.studentData;
    return (
      <div>
        <Button
          variant="primary"
          type="submit"
          onClick={() => this.handleView()}
        >
          New Students
        </Button>
        <Button variant="primary" type="submit">
          List of Students
        </Button>
        {this.state.view === 0 ? (
          <p> Welcome to the new students</p>
        ) : this.state.view === 1 ? (
          <NewStudents viewStudents={this.viewStudents} />
        ) : this.state.view === 2 ? (
          <ViewStudent
            studentData={this.state.studentData}
            marksEnter={this.marksEnter}
          />
        ) : (
          <Studentsmarks viewMarks={this.viewMarks} />
        )}
      </div>
    );
  }
}

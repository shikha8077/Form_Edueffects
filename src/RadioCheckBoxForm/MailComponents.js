import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import ListStudents from "./ListStudents";

export default class MailComponents extends Component {
  state = {
    view: 0,
  };
  handleList = () => {
    this.setState({ view: 1 });
  };
  render() {
    return (
      <div>
        <Button variant="primary">New Customer</Button>
        <Button variant="primary" onClick={() => this.handleList()}>
          List Of Cutomer
        </Button>
        {this.state.view === 0 ? (
          <p>Welcome To the Customer System</p>
        ) : (
          <ListStudents />
        )}
      </div>
    );
  }
}

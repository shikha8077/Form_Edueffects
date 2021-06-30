import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";

export default class Product extends Component {
  state = {
    view: 0,
  };

  handleView = () => {
    this.props.handleFormView(0);
  };
  handleEdit = (data) => {
    this.props.handleEditView(2, data);
  };

  render() {
    console.log(this.props.userData);
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleView()}>
          Add Products
        </Button>
        <br /> <br />
        <p>List of course:</p>
        <br /> <br />
        {this.props.userData.length == 0 ? (
          <li> There are Zero Products</li>
        ) : (
          <div>
            {this.props.userData.map((p) => (
              <div>
                <li>
                  Name:{p.name} &nbsp; Email:{p.email}&nbsp;&nbsp;
                  <Button variant="primary" onClick={() => this.handleEdit(p)}>
                    Edit
                  </Button>
                </li>

                <br />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

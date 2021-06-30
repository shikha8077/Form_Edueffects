import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row } from "react-bootstrap";

export default class Newstudents extends Component {
    state={
        Customers:{name:'',gender:'',delivery:'',payment:''}
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="name" />
            <input type="radio" name="gender" value={} /> Male
            <input type="radio" name='gender' value={}/> Female
          <h3>Choose Your Delivery option:</h3>
          <input type="radio" name='delivery' value={}/>Home
          <input type="radio" name='delivery' value={}/>Office
          <input type="radio" name='delivery' value={}/>Pickup
          
        </form>
      </div>
    );
  }
}

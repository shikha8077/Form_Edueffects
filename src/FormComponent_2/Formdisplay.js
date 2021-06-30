import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";

class ShikhaForm extends Component {
  state = {
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    zip: "",
    data: {},
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let localData = {};
    localData.email = this.state.email;
    localData.address1 = this.state.address1;
    localData.address2 = this.state.address2;
    localData.zip = this.state.zip;
    localData.city = this.state.city;
    console.log(this.state);
    this.setState({
      email: "",
      password: "",
      address1: "",
      address2: "",
      city: "",
      zip: "",
      data: localData,
    });
  };
  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address"
              value={this.state.address1}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              name="address2"
              value={this.state.address2}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="city"
                value={this.state.city}
                onChange={this.handleInput}
              />
            </div>

            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                name="zip"
                value={this.state.zip}
                onChange={this.handleInput}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        Email:{this.state.data.email}
        <br />
        Address1:{this.state.data.address1}
        <br />
        Address2:{this.state.data.address2}
        <br />
        city:{this.state.data.city}
        <br />
        zip:{this.state.data.zip}
        <br />
      </div>
    );
  }
}
export default ShikhaForm;

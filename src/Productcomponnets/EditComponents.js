import React, { Component } from "react";

export default class FormData extends Component {
  state = {
    userData: this.props.editData,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.userData);

    this.props.handlEditView(1, this.state.userData);
  };
  handleInput = (e) => {
    let localData = this.state.userData;
    localData[e.target.name] = e.target.value;
    this.setState({ userData: localData });
  };
  render() {
    //   localdata=this.props.editData
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userData.name}
            name="name"
            onChange={this.handleInput}
          />
          <br />
          <input
            type="text"
            value={this.state.userData.email}
            name="email"
            onChange={this.handleInput}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

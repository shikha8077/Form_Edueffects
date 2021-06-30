import React, { Component } from "react";

export default class ListStudents extends Component {
  state = {
    Studentsarray: [],
  };

  render() {
    return (
      <div>
        {this.state.Studentsarray.length === 0 ? (
          <p> Their are zero student</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

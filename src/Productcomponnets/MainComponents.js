import React, { Component } from "react";
import Product from "./Product";
import FormData from "./Form";
import EditData from "./EditComponents";

export default class MainComponents extends Component {
  state = {
    view: 1,
    editData: {},
    viewArray: [],
  };
  handleFormView = (data) => {
    this.setState({ view: data });
  };
  handleDataView = (data, formData) => {
    let localdata = [...this.state.viewArray];

    localdata.push(formData);
    this.setState({ view: data, viewArray: localdata });
  };
  handleEditView = (data, p) => {
    this.setState({ view: data, editData: p });
  };
  render() {
    console.log(this.state.view);
    return (
      <div>
        {this.state.view === 1 ? (
          <Product
            handleFormView={this.handleFormView}
            userData={this.state.viewArray}
            handleEditView={this.handleEditView}
          />
        ) : this.state.view === 0 ? (
          <FormData handleDataView={this.handleDataView} />
        ) : (
          <EditData
            editData={this.state.editData}
            handleDataView={this.handleDataView}
          />
        )}
      </div>
    );
  }
}

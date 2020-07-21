import React, { Component } from "react";
const data = require("../data.js").data;
let responses = [];
for (let item in data.responses) {
  data.responses[item].id = item;
  responses.push(data.responses[item]);
}
data.responses = responses;
console.log(data.responses);

class DashboardScreen extends Component {
  state = {
    data: data,
    selectedItem: null,
    searchValue: "",
  };
  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchValue: event.target.value });
  };
  onResultChange = (id) => {
    this.detailElem.value = JSON.stringify(
      this.state.data.responses.find((item) => item.id === id),
      null,
      "\t"
    );
    this.setState({ selectedItem: id });
    console.log(id);
  };
  render() {
    let results = this.state.data.responses
      .filter((item) => JSON.stringify(item).includes(this.state.searchValue))
      .map((item) => (
        <div
          className={
            item.id === this.state.selectedItem
              ? "dashboard__result dashboard__result--selected"
              : "dashboard__result"
          }
          onClick={() => this.onResultChange(item.id)}
          key={item.id}
        >
          {item.id}
        </div>
      ));

    return (
      <div>
        <div className="curtain"></div>
        <div className="dashboard">
          <div className="dashboard__header">
            <div className="dashboard__header-section-1">
              <button className="dashboard__button">Tìm kiếm</button>
            </div>
            <div className="dashboard__header-section-2">
              <input
                onChange={(event) => this.onSearchChange(event)}
                className="dashboard__input"
              ></input>
            </div>
          </div>
          <div className="dashboard__body">
            <div className="dashboard__result-list">{results}</div>
            <div className="dashboard__toolbar">
              <div className="dashboard__toolbar-section">
                <button className="dashboard__button">Lưu</button>
              </div>
              <div className="dashboard__toolbar-section">
                <button onClick={()=>this.onResultChange(this.state.selectedItem)} className="dashboard__button">Tải lại</button>
              </div>
            </div>
            <div className="dashboard__detail">
              <textarea
                ref={(elem) => (this.detailElem = elem)}
                className="dashboard__textarea"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardScreen;

import React, { Component } from "react";
import showSnackbar from "../utils";

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    let data = JSON.parse(JSON.stringify(this.props.data));
    console.log("pre", data);
    let responses = [];
    console.log("Run constructor");
    for (let item in data.responses) {
      console.log(item);
      data.responses[item].id = item;
      responses.push(data.responses[item]);
    }
    data.responses = responses;

    this.state = {
      data: data,
      selectedItem: null,
      searchValue: "",
    };
  }

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
  submit = () => {
    console.log(this.detailElem.value);
    try {
      const item = JSON.parse(this.detailElem.value);
      console.log(item);
      this.state.data.responses[
        this.state.data.responses.findIndex((i) => i.id === item.id)
      ] = item;
      const data = new URLSearchParams();
      data.append("data", JSON.stringify(item));
      fetch("/data", {
        method: "POST",
        body: data,
      })
        .then(function (data) {
          console.log("Request success: ", data);
          showSnackbar("SUCCESS");
        })
        .catch(function (error) {
          console.log("Request failure: ", error);
          showSnackbar("FAILED");
        });
    } catch (e) {
      console.log("input error");
      showSnackbar("CHECK YOUR INPUT");
      return;
    }
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
        <div id="snackbar" className="snackbar snackbar--hide">SUCCESS</div>
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
                <button onClick={this.submit} className="dashboard__button">
                  Lưu
                </button>
              </div>
              <div className="dashboard__toolbar-section">
                <button
                  onClick={() => this.onResultChange(this.state.selectedItem)}
                  className="dashboard__button"
                >
                  Tải lại
                </button>
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

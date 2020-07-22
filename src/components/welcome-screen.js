import React, { Component } from "react";
function sleep(interval) {
  return new Promise((resolve) => setTimeout(resolve, interval));
}


class WelcomeScreen extends Component {
displayMessage = async(msg) => {
        var elem = document.getElementsByClassName("welcome-message")[0];
        if (!elem) return;
        let accumulator = "";
        for (var i = 0; i < msg.length; i++) {
          console.log(msg, msg.length);
          accumulator += msg[i];
          elem.innerText = accumulator;
          await sleep(70);
        }
        await sleep(500);
        if (this.props.done) this.props.done();
      }
  componentDidMount() {
    const welcomeMsg = "Welcome to rabbit coding... GVHD: Thầy Tuấn Anh ... Loading ...";
    this.displayMessage(welcomeMsg);
  }
  render() {
    return <span className="welcome-message"> </span>;
  }
}
export default WelcomeScreen;

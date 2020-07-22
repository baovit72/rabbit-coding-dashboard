import React from "react";
import WelcomeScreen from "./components/welcome-screen";
import DashboardScreen from "./components/dashboard-screen";
import "./App.css";

class App extends React.Component {
  state = {
    isLoadingData: true,
    isLoadingWelcome: true,
    data: null,
  };
  componentDidMount() {
    fetch("/data")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data, isLoadingData: false });
      });
  }
  render() {
    if (this.state.isLoadingWelcome || this.state.isLoadingData)
      return (
        <WelcomeScreen
          done={() => this.setState({ isLoadingWelcome: false })}
        ></WelcomeScreen>
      );
    return <DashboardScreen data={this.state.data} />;
  }
}

export default App;

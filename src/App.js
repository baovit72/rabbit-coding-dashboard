import React from "react";
import logo from "./logo.svg";
import WelcomeScreen from "./components/welcome-screen" 
import DashboardScreen from "./components/dashboard-screen"
import "./App.css";


function doneWelcome(){
    console.log("done welcome");
}
function App() {
    // return <WelcomeScreen done={doneWelcome}></WelcomeScreen>;
    return <DashboardScreen></DashboardScreen>
}

export default App;
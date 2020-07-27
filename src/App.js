import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          <Route exact path="/chat">
            I am the chat page
          </Route>
          <Route exact path="/">
            <TinderCards></TinderCards>
          </Route>
        </Switch>
        {/* Tinder Cards */}
        {/* Buttons below Tinder card */}

        {/* chat screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
};

export default App;

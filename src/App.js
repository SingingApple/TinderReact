import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButtons";
const App = () => {
  return (
    <div className="App">
      <Router>
        {/* Header */}

        <Switch>
          <Route exact path="/chat">
            <Header backButton="/" />
            <h1>I</h1>
          </Route>
          <Route exact path="/">
            <Header />
            <TinderCards></TinderCards>
            <SwipeButton />
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

import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Redirect to="login" />
      </Route>
      <Route path="/login" exact>
        <SignIn></SignIn>
      </Route>
    </Router>
  );
}

export default App;

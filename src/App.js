import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn.jsx";
import Dashboard from './pages/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Redirect to="login" />
      </Route>
      <Route path="/login" exact>
        <SignIn></SignIn>
      </Route>
      <Route path="/home" exact>
        <Dashboard></Dashboard>
      </Route>
    </Router>
  );
}

export default App;

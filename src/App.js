import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import ModalSwitch from "./components/ModalSwitch";

export default function App() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
  }
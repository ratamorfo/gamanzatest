import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Episodes from "./components/pages/Episodes";
import App from "./App";

const RouterComponent = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/episodes" component={Episodes} />
      </Switch>
    </App>
  );
};

export default RouterComponent;

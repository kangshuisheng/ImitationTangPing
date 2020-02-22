import React from "react";
import { render } from "react-dom";
import App from "./App";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./font-icon/iconfont.css";
import "./index.less";
import NavBar from "./components/NavBar/NavBar";
import NavHead from "./components/NavHead/NavHead";

import { mainRouter } from "./router";
// import store from "./store";
// import { Provider } from "react-redux";
render(
  <Router>
    <div className="index-wrap">
      <NavHead />
      <Switch>
        <Route
          path="/landing"
          render={routeProps => {
            // 当进入/index时,才能触发App
            return <App {...routeProps} />;
          }}
        />
        {mainRouter.map(route => {
          return (
            <Route
              key={route.pathname}
              path={route.pathname}
              exact={route.exact}
              render={routeProps => {
                console.log(route)
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}
        
        <Redirect to="/landing" from="/" exact />
        <Redirect to="/login" />
      </Switch>
      <NavBar />
    </div>
  </Router>,
  document.querySelector("#root")
);

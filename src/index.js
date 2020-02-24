import React, { Component } from "react";
import { render } from "react-dom";
import App from "./App";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
  // BrowserRouter
} from "react-router-dom";

import "./font-icon/iconfont.css";
import "./index.less";

import { mainRouter } from "./router";
// import store from "./store";
// import { Provider } from "react-redux";
export default class index extends Component {}
render(
  <Router>
    <div className="index-wrap">
      <Switch>
        <Route
          path="/landing"
          render={routeProps => {
            // 当进入/landing时,才能走App组件
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
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}

        {/* 一般的Reirect 都放在 Switch里面,并且是在最后一行 */}
        {/* <Redirect from="/" to="/langing/follow" exact/> */}
        <Redirect to="/login" />
      </Switch>
    </div>
  </Router>,
  document.querySelector("#root")
);

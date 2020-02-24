import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { landingRouter } from "../src/router/";
import NavBar from "./components/NavBar/NavBar"
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          {landingRouter.map(route => {
            return (
              <Route
                exact={route.exact}
                key={route.pathname}
                path={route.pathname}
                render={propsRoute => {
                  return <route.component {...propsRoute} />;
                }}
              />
            );
          })}
        </Switch>
        {this.props.children}
        <NavBar />
      </div>
    );
  }
}

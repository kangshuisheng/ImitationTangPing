import React, { Component } from "react";
import "./NavBar.less";
import { NavLink } from "react-router-dom";
export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      navBarActive: 1
    };
  }
  // changeActive = e => {
  //   // 使用currentTarget的话,就不会点击到子元素上面了
  //   let num = parseInt(e.currentTarget.dataset.value);
  //   if (num < 3) {
  //     this.setState({
  //       navBarActive: num
  //     });
  //   } else if (num > 2 && localStorage.getItem("TOKEN")) {
  //     this.setState({
  //       navBarActive: num
  //     });
  //   } else {
  //     return
  //   }
  // };
  render() {
    return (
      <ul className="nav-bar-container">
        <NavLink exact activeClassName="active-nav-bar-item" to="/">
          <li className="nav-bar-item">
            <span className="iconfont">&#xe65f;</span>
            <span>躺平</span>
          </li>
        </NavLink>
        <NavLink activeClassName="active-nav-bar-item" to="/circle">
          <li className="nav-bar-item">
            <span className="iconfont">&#xe632;</span>
            <span>圈子</span>
          </li>
        </NavLink>
        <NavLink activeClassName="active-nav-bar-item" to="/add">
          <li className="nav-bar-item">
            <span className="iconfont">&#xe60d;</span>
            <span>创建</span>
          </li>
        </NavLink>
        <NavLink activeClassName="active-nav-bar-item" to="/message">
          <li className="nav-bar-item">
            <span className="iconfont">&#xe743;</span>
            <span>消息</span>
          </li>
        </NavLink>
        <NavLink activeClassName="active-nav-bar-item" to="/myhome">
          <li className="nav-bar-item">
            <span className="iconfont">&#xe608;</span>
            <span>我家</span>
          </li>
        </NavLink>
        {this.props.children}
      </ul>
    );
  }
}

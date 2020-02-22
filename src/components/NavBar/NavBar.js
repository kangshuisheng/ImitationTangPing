import React, { Component } from "react";
import "./NavBar.less";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      navBarActive: 1
    };
  }
  changeActive = e => {
    // 使用currentTarget的话,就不会点击到子元素上面了
    let num = parseInt(e.currentTarget.dataset.value);
    this.setState({
      navBarActive: num
    });
  };
  render() {
    return (
      <ul className="nav-bar-container">
        <Link to="/">
          <li
            data-value="1"
            onClick={this.changeActive}
            className={
              this.state.navBarActive === 1
                ? "active-nav-bar-item"
                : "nav-bar-item"
            }
          >
            <span className="iconfont">&#xe65f;</span>
            <span>躺平</span>
          </li>
        </Link>
        <Link to="/circle">
          <li
            data-value="2"
            onClick={this.changeActive}
            className={
              this.state.navBarActive === 2
                ? "active-nav-bar-item"
                : "nav-bar-item"
            }
          >
            <span className="iconfont">&#xe632;</span>
            <span>圈子</span>
          </li>
        </Link>
        <Link to="/add">
          <li
            data-value="3"
            onClick={this.changeActive}
            className={
              this.state.navBarActive === 3
                ? "active-nav-bar-item"
                : "nav-bar-item"
            }
          >
            <span className="iconfont">&#xe60d;</span>
            <span>创建</span>
          </li>
        </Link>
        <Link to="/message">
          <li
            data-value="4"
            onClick={this.changeActive}
            className={
              this.state.navBarActive === 4
                ? "active-nav-bar-item"
                : "nav-bar-item"
            }
          >
            <span className="iconfont">&#xe743;</span>
            <span>消息</span>
          </li>
        </Link>
        <Link to="/myhome">
          <li
            data-value="5"
            onClick={this.changeActive}
            className={
              this.state.navBarActive === 5
                ? "active-nav-bar-item"
                : "nav-bar-item"
            }
          >
            <span className="iconfont">&#xe608;</span>
            <span>我家</span>
          </li>
        </Link>
      </ul>
    );
  }
}

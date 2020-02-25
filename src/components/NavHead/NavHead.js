import React, { Component } from "react";
import "./index.less";
export default class index extends Component {
  render() {
    return (
      <div className="nav-head-wrap">
        <div className="left-logo">
          <img src={this.props.img_src} alt=""/>
        </div>
        <div className="search-frame">
          <input type="text" placeholder="搜索内容或者圈子" />
        </div>
        <div  className="my-icon">
          <span className="iconfont">&#xe615;</span>
          <span>我的</span>
        </div>
      </div>
    );
  }
}

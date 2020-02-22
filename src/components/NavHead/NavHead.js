import React, { Component } from "react";
import "./index.less";
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="nav-head-wrap">
        <div className="left-logo">
          <img src="https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=3177717926,2057855627&fm=74&app=80&f=JPG&size=f121,121?sec=1880279984&t=141c800d3653b239f695b813f2c3c22b" alt=""/>
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

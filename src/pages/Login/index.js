import React, { Component } from "react";
import { Button } from "antd-mobile";
import "./index.less"
// import { Link } from "react-router-dom"
export default class index extends Component {
  goHome = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="login-wrap">
        <div className="go-back" onClick={this.goHome}>✖</div>
        <div className="top">
          <img src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=9b0dc14f3f4e251fe2f7e3fe9fbdae2a/08f790529822720ed6ca818f74cb0a46f21fabbb.jpg" alt="" />
          <span>阿里巴巴旗下</span>
          <span>生活方式分享社区</span>

        </div>
        <div className="bottom">
          <Button style={{ height: "10vh", lineHeight: "10vh" }} >淘宝快速登录</Button>
          <Button style={{ height: "10vh", lineHeight: "10vh" }} >手机号码登陆</Button>
        </div>
      </div>
    );
  }
}

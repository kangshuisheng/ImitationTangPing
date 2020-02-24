import React, { Component } from "react";
import "./index.less";
export default class index extends Component {
  render() {
    console.log("RecomMent", this.props);
    return (
      <div className="recom-ment-wrap">
        <div className="pictorial-wrap">
          <div className="pictorial">
            <img
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg"
              alt=""
            />
            <div className="small-tag">
              <div className="left">
                <span className="day">24</span>
                <span className="month">02</span>
              </div>
              <div className="right">图报</div>
            </div>
          </div>
          <div className="box1"></div>
          <div className="box2"></div>
        </div>
        {/* 下面开始瀑布流布局 */}
        <div className="falls-wrap">
          
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./index.less";
export default class index extends Component {
  componentDidMount(){
    console.log("Recomment加载好了");
  }
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
          <div className="fill-item">
            <div className="img-part">
              <img src="imgs/maonv.png" alt="" />
              <span>每天学习,成为优秀的人吧</span>
            </div>
            <div className="author-part">
              <div>
                <img src="imgs/dm.jpg" alt="" />
                <span>康水生</span>
              </div>
              <div>
                <img src="logo192.png" alt="" />
              </div>
            </div>
          </div>
          <div className="fill-item">
            <div className="img-part">
              <img src="imgs/dm.jpg" alt="" />
              <span>每天学习,成为优秀的人吧</span>
            </div>
            <div className="author-part">
              <div>
                <img src="imgs/dm.jpg" alt="" />
                <span>康水生</span>
              </div>
              <div>
                <img src="logo192.png" alt="" />
              </div>
            </div>
          </div>
          <div className="fill-item">
            <div className="img-part">
              <img src="imgs/dm.jpg" alt="" />
              <span>每天学习,成为优秀的人吧</span>
            </div>
            <div className="author-part">
              <div>
                <img src="imgs/dm.jpg" alt="" />
                <span>康水生</span>
              </div>
              <div>
                <img src="logo192.png" alt="" />
              </div>
            </div>
          </div>
          <div className="fill-item">
            <div className="img-part">
              <img src="imgs/maonv.png" alt="" />
              <span>每天学习,成为优秀的人吧</span>
            </div>
            <div className="author-part">
              <div>
                <img src="imgs/dm.jpg" alt="" />
                <span>康水生</span>
              </div>
              <div>
                <img src="logo192.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

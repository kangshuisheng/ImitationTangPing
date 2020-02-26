import React, { Component } from "react";
import NavHead from "../../components/NavHead/NavHead";
import NavBar from "../../components/NavBar/NavBar";
import "./index.less";

/**
 * @author kang
 * @created 2020/02/26 17:38:38
 * @Email 2538041184@qq.com
 * @aphorism 今天不努力,明天挑大粪
 */

// 加入的圈子
const Joined = props => {
  console.log(props);
  return (
    <div className="joined">
      <h3>
        已加入<span>{props.joinNum}</span>
      </h3>
      <img
        onClick={() => props.history.push("/")}
        src="http://upload.rzw.com.cn/2017/0921/1505977428426.gif"
        alt=""
      />
      <span>{props.joinTitle}</span>
    </div>
  );
};

// 推荐列表title

const RecommendTitle = props => {
  return (
    <div className="title">
      <h2>{props.title[0]}</h2>
      <span>
        {props.title[1]} <span>></span>
      </span>
    </div>
  );
};

// 圈内话题
const CircleTopic = props => {
  return props.type === "circle" ? (
    // 圈内话题
    <div className="circle-topic">
      <RecommendTitle title={props.title} />
      <div className="content-wrap">
        <div className="item">
          <div className="left">
            <h4>{props.title[0]}</h4>
            <span>{props.title[1]}</span>
          </div>
          <div className="right">
            <img
              src="http://img3.imgtn.bdimg.com/it/u=3183274783,1271682948&fm=26&gp=0.jpg"
              alt=""
            />
            <img
              src="http://img3.imgtn.bdimg.com/it/u=3183274783,1271682948&fm=26&gp=0.jpg"
              alt=""
            />
            <img
              src="http://img3.imgtn.bdimg.com/it/u=3183274783,1271682948&fm=26&gp=0.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    // 推荐圈子
    <div className="recommend-circle">
      <RecommendTitle title={props.title} />
      <div className="item">
        <div className="circle-title">
          <div>
            <img
              src="http://img1.imgtn.bdimg.com/it/u=1723551275,2227233080&fm=26&gp=0.jpg"
              alt=""
            />
            <span>hello</span>
          </div>
          <span>></span>
        </div>
        <div className="circle-people-number">
          <div className="left">
            <span>{}已加入</span>
            <span>{}篇内容</span>
          </div>
          <div className="right">
            圈话题:{props.title[0]}
          </div>
        </div>
        <div className="bottom">
          <img
            src="http://img1.imgtn.bdimg.com/it/u=3588115084,700427085&fm=11&gp=0.jpg"
            alt=""
          />
          <img
            src="http://img1.imgtn.bdimg.com/it/u=3588115084,700427085&fm=11&gp=0.jpg"
            alt=""
          />
          <img
            src="http://img1.imgtn.bdimg.com/it/u=3588115084,700427085&fm=11&gp=0.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinNum: 0,
      joinTitle: "生活的仪式感"
    };
  }

  render() {
    return (
      <div className="circle-wrap">
        <NavHead img_src="https://tvax1.sinaimg.cn/crop.0.0.1080.1080.180/007En0Qfly8gbk5x6twwlj30u00u0my6.jpg?KID=imgbed,tva&Expires=1582442779&ssig=Eyul6ZTt2R" />
        <Joined {...this.state} {...this.props} />
        <CircleTopic title={["圈内话题", "所有话题"]} type="circle" />
        <CircleTopic title={["推荐圈子", "所有圈子"]} type="recommend" />
        <NavBar />
      </div>
    );
  }
}

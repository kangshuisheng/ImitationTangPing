import React, { Component } from "react";
import "./index.less";

const RecomMentAuthor = params => {
  console.log(params);
  return (
    <div className="recomment-author-wrap">
      <p>为你推荐</p>
      {params.data.map((item, index) => {
        return (
          <div className="recomment-author-item" key={index}>
            <div className="top">
              <img className="icon" src={item.icon} alt="" />
              <div className="album">
                {item.images
                  ? item.images.map((list, index) => {
                      return index < 3 ? (
                        // 下面的三目运算. 给index等于1跟2的图片加上各自的圆角
                        <img style={index === 0 ? {borderRadius:"10px 0 0 10px"} : index === 2 ? {borderRadius:"0 10px 10px 0"} : {}}  key={index} src={index < 3 ? list : ""} alt="" />
                      ) : (
                        ""
                      );
                    })
                  : ""}
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <span className="user-name">{item.author}</span>
                <span>{item.age}</span>
              </div>
              <div className="right">关注</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default class index extends Component {
  state = {
    data: [
      {
        author: "kang",
        age: 23,
        icon: "https://forum.javcdn.pw/i.imgur.com/t4dM7xI.jpg",
        images: [
          "https://forum.javcdn.pw/i.imgur.com/t4dM7xI.jpg",
          "https://forum.javcdn.pw/i.imgur.com/KFwfsK7.jpg",
          "https://forum.javcdn.pw/i.imgur.com/OoDi58S.jpg",
          "https://forum.javcdn.pw/i.imgur.com/awlcxe3.jpg"
        ]
      },
      {
        author: "kang",
        age: 23,
        icon: "https://forum.javcdn.pw/i.imgur.com/t4dM7xI.jpg",
        images: [
          "https://forum.javcdn.pw/i.imgur.com/t4dM7xI.jpg",
          "https://forum.javcdn.pw/i.imgur.com/KFwfsK7.jpg",
          "https://forum.javcdn.pw/i.imgur.com/OoDi58S.jpg",
          "https://forum.javcdn.pw/i.imgur.com/awlcxe3.jpg"
        ]
      },
      {
        author: "kang",
        age: 23,
        icon: "https://forum.javcdn.pw/i.imgur.com/t4dM7xI.jpg",
        images: [
          "https://forum.javcdn.pw/i.imgur.com/BWznoQc.jpg",
          "https://forum.javcdn.pw/i.imgur.com/BWznoQc.jpg",
          "https://forum.javcdn.pw/i.imgur.com/BWznoQc.jpg",
          "https://forum.javcdn.pw/i.imgur.com/BWznoQc.jpg"
        ]
      },
      {
        author: "kang",
        icon: "https://forum.javcdn.pw/i.imgur.com/t4dM7xI.jpg",
        age: 23,
        images: [
          "https://forum.javcdn.pw/i.imgur.com/BWznoQc.jpg",
          "https://forum.javcdn.pw/i.imgur.com/BWznoQc.jpg",
          "https://forum.javcdn.pw/i.imgur.com/BWznoQc.jpg",
          "https://forum.javcdn.pw/i.imgur.com/BWznoQc.jpg"
        ]
      }
    ]
  };
  render() {
    return (
      <div className="follow-wrap">
        <img className="place-holder-img" src="imgs/maonv.png" alt="" />
        <RecomMentAuthor data={this.state.data} />
      </div>
    );
  }
}

import React, { Component } from "react";
import NavHead from "../../components/NavHead/NavHead";
import NavBar from "../../components/NavBar/NavBar";
import Follow from "../Follow";
import RecomMent from "../RecomMent";
import "./index.less";

// 使用sticky 来完成 antd 的tab 吸顶
import { Tabs } from "antd-mobile";
import { StickyContainer, Sticky } from "react-sticky";

const tabs = [{ title: "推荐" }, { title: "订阅" }];

export default class TangPing extends Component {
  render() {
    const renderTabBar = props => {
      console.log("TP");
      return (
        <Sticky>
          {({ style }) => (
            <div style={{ ...style, zIndex: 1 }}>
              <Tabs.DefaultTabBar {...props} />
            </div>
          )}
        </Sticky>
      );
    };
    return (
      <div>
        <NavHead img_src="https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=3177717926,2057855627&fm=74&app=80&f=JPG&size=f121,121?sec=1880279984&t=141c800d3653b239f695b813f2c3c22b" />
        <StickyContainer>
          <Tabs
            tabBarBackgroundColor="#f5f5f9"
            tabBarTextStyle={{ fontSize: "14px" }}
            tabBarUnderlineStyle={{border:"1px solid black"}}
            tabBarActiveTextColor="#333"
            tabBarInactiveTextColor="#a8a8a8"
            tabs={tabs}
            renderTabBar={renderTabBar}
            onChange={(tab, index) => {
              console.log("onChange", index, tab);
              this.props.history.push("/follow");
            }}
          >
            <RecomMent />
            <Follow />
          </Tabs>
        </StickyContainer>
        <NavBar />
      </div>
    );
  }
}

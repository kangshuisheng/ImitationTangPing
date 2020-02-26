import React, { Component } from "react";
import NavHead from "../../components/NavHead/NavHead";
import NavBar from "../../components/NavBar/NavBar";
import "./index.less";
import { Route } from "react-router-dom";

// 使用sticky 来完成 antd 的tab 吸顶
import { Tabs } from "antd-mobile";
import { StickyContainer, Sticky } from "react-sticky";

const tabs = [{ title: "推荐" }, { title: "订阅" }];

export default class TangPing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    };
  } 
  changeActive = params => { //TODO: 把父元素的方法传递给子元素,子元素触发这个方法来 完成数据的 修改,
    console.log("params",this.state.active);
    console.log("");
    this.setState({
      active: params
    });
  };

  render() {

    const { children } = this.props; //把子路由从中解构出来

    const renderTabBar = props => {
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
    const flag = false;
    return (
      <div style={{ paddingBottom: "8vh" }}>
        <NavHead img_src="https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=3177717926,2057855627&fm=74&app=80&f=JPG&size=f121,121?sec=1880279984&t=141c800d3653b239f695b813f2c3c22b" />
        <StickyContainer>
          <Tabs
            tabBarBackgroundColor="#f5f5f9"
            tabBarTextStyle={{ fontSize: "14px" }}
            tabBarUnderlineStyle={{ border: "1px solid black" }}
            tabBarActiveTextColor="#333"
            tabBarInactiveTextColor="#a8a8a8"
            tabs={tabs}
            renderTabBar={renderTabBar}
            onChange={(tabs, index) => {
              index === 1 && !flag
                ? this.props.history.push("/login")
                : console.log(index);
            }}
          >
            {children.map((list, index) => {
              //渲染结构出来的子路由
              return (
                <Route
                  path={list.path}
                  key={index}
                  render={routeProps => {
                    return (
                      <list.props.render
                        setChildData={this.changeActive}
                        {...routeProps}
                      />
                    );
                  }}
                />
              );
              
            })}
          </Tabs>
        </StickyContainer>
        <NavBar />
      </div>
    );
  }
}

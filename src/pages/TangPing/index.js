import React, { Component } from 'react'
import {Button} from "antd-mobile"
export default class TangPing extends Component {
  render() {
    return (
      <div>
        <div className="tabbat">
          <Button>移动antD</Button>
          <ul>
            <li>推荐</li>
            <li>关注</li>
          </ul>
        </div>
      </div>
    )
  }
}

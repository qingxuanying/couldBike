/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Input, Textarea } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

export default class AddZixun extends Component {
  constructor(props) {
    super(props)
    this.state = {
      st: '公开'
    }
  }
  componentDidMount() {

  }

  wenhao = () => {
    Taro.showModal({
      title: '提示',
      cancelText: '取消',
      cancelColor: 'black',
      confirmText: '确认',
      confirmColor: 'black',
      content: '公开此次咨询 本条咨询将进入咨询广场 且每次围观 你将获得部分收益 不公开此次咨询 本条咨询将只有你与专家可见 你可以在我的咨询里找到',
      showCancel: false,
    })
  }
  qiehuan = () => {
    if (this.state.st == '公开') {
      this.setState({
        st: '私密'
      })
    } else {
      this.setState({
        st: '公开'
      })
    }
  }


  render() {
    return (
      <View className='add_body'>
        <View className='header'>
          <View className='gongkai' onClick={this.qiehuan}>{this.state.st}</View>
          <View className='wenhao' onClick={this.wenhao}>?</View>
        </View>
        <View className='input_add'>
          <Textarea className='i_add'></Textarea>
        </View>
        <View className='con'>发送</View>
      </View>
    )
  }
}
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './more.css'

export default class More extends Component {

  toxun = () => {
    Taro.navigateTo({
      url: '/pages/xunlian/index'
    })
  }
  toGuide = () => {
    Taro.navigateTo({
      url: '/pages/guide/index'
    })
  }
  tozixun = () => {
    Taro.navigateTo({
      url: '/pages/zixun/index'
    })
  }
  tomine = () => {
    Taro.navigateTo({
      url: '/pages/mine/index'
    })
  }
  render() {
    return (
      <View className='more_body'>
        <View className='more_main'>
          <View className='card' onClick={this.toxun}>训练</View>
          <View className='card' onClick={this.toGuide}>指南</View>
          <View className='card' onClick={this.tozixun}>咨询</View>
          <View className='card' onClick={this.tomine}>我的</View>
        </View>
      </View>
    )
  }
}
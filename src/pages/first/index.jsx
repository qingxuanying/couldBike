import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

export default class First extends Component {
  to3d = () => {
    console.log(1234)
    Taro.navigateTo({
      url: '/pages/3d/index'
    })
  }
  tologin = () => {
    console.log(1234)
    Taro.navigateTo({
      url: '/pages/login/index'
    })
  }
  render() {
    return (
      <View className='first_body'>
        <View className='body_m'>
            <View className='but_1' onClick={this.tologin}>我是车迷</View>
            <View className='but_2' onClick={this.tologin}>我是专家</View>
        </View>
      </View>
    )
  }
}
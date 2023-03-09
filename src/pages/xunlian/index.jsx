/* eslint-disable import/newline-after-import */
import React, { Component } from 'react'
import { View, Video } from '@tarojs/components'
import './index.css'
// import ve from './vedio/ve1.mp4'
export default class Xunlian extends Component {


  render() {
    return (
      <View className='xunlian_body'>
        <View className='left'>
          <View className='left_card'>体能训练1</View>
          <View className='left_card'>体能训练2</View>
          <View className='left_card'>基础训练</View>
          <View className='left_card'>进阶训练</View>
          <View className='left_card'>车手训练</View>
        </View>
        <View className='xun_text'>
          <View className='ti'>体能训练1</View>
          <View className='te'>
            <Video className='video' 
              src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
              controls 
              id='video' 
              enablePlayGesture
            ></Video>
          </View>
        </View>
      </View>
    )
  }
}
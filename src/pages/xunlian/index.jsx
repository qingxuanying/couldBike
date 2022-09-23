import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.css'

export default class Xunlian extends Component {

  
    render() {
      return (
        <View className='xunlian_body'>
          <View className='left'>
            <View className='left_card'>体能训练</View>
            <View className='left_card'>体能训练</View>
            <View className='left_card'>体能训练</View>
            <View className='left_card'>体能训练</View>
            <View className='left_card'>体能训练</View>
          </View>
          <View className='xun_text'>
            <View className='ti'>体能训练</View>
            <View className='te'>
              我是体能训练文本我是体能训练文本我是体能训练文本我是体能训练文本我是体能训练文本我是体能训练文本我是体能训练文本
            </View>
          </View>
        </View>
      )
    }
  }
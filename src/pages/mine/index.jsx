import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import {img1} from './img/bianji.png'
import {tou} from './img/tou.png'

export default class Mine extends Component {
  componentDidMount() {
    Taro.showModal({
      title: '提示',
      cancelText: '取消',
      cancelColor: 'black',
      confirmText: '确认',
      confirmColor: 'black',
      content: '请将手机竖直以获得更好的体验',
      showCancel: false,
    })
  }
  render() {
    return (
      <View className='mine_body'>
        <View className='my_head'>
          <View className='head_i'>
            <Image src={tou} className='touxiang'></Image>
          </View>
          <View className='head_t'>
            <View className='te_1'>test1111</View>
            <View className='te_2'>男</View>
          </View>
          <View className='con_img'>
            <Image src={img1} className='img'></Image>
          </View>
        </View>
        <View className='kefu'>
          联系客服
        </View>
      </View>
    )
  }
}
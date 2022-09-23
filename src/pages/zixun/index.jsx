import React, { Component } from 'react'
import { View, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import Item from './item/item'

export default class Zixun extends Component {
    componentDidMount(){
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
    toAdd=()=>{
      Taro.navigateTo({
        url: '/pages/addZixun/index'
      })
    }  
    render() {
      return (
        <View className='zixun_body'>
          <Item />
          <Item />
          <View className='footer'>
            <Input className='input'></Input>
            <View className='bu' onClick={this.toAdd}>新咨询</View>
          </View>
        </View>
      )
    }
  }
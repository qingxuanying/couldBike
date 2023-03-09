import React, { Component } from 'react'
import { Input, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

export default class Login extends Component {
  to3d = () => {
    Taro.navigateTo({
      url: '/pages/3d/index'
    })
  }
  toregest = () => {
    Taro.navigateTo({
      url:'/pages/regest/index'
    })
  }
  render() {
    return (
      <View className='first_body'>
        <View className='top'>
          <Input className='userid' placeholder='请输入账号'></Input>
          <Input className='password' placeholder='请输入密码' type='password'></Input>
        </View>
        <View className='bus'>
          <View className='but1' onClick={this.to3d}>登入</View>
          <View className='but2' onClick={this.toregest}>注册</View>
        </View>
      </View>
    )
  }
}
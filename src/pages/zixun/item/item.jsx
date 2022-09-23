/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
// import Taro from '@tarojs/taro'
import './item.css'

export default class Item extends Component {
    constructor(props){
        super(props)

    }
  
    render() {
      return (
        <View className='item'>
         <View className='item_body'>
            <View className='item_head'>
                <View className='touxiang'>
                    {/* <Image></Image> */}
                </View>
                <View className='name'>我的咨询</View>
                <View className='time'>2022.4.29</View>
            </View>
            <View className='text_item'>我是问题描述我是问题描述我是问题描述我是问题描述我是问题描述</View>
         </View>
        </View>
      )
    }
  }
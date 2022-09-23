import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.css'

export default class Xunlian extends Component {
  constructor(props){
    super(props)
    this.state={
      data:'配车指南125111111111111111111',
      title:'配车指南'
    }
  }
  pei=()=>{
    this.setState({
      data:'配车指南125111111111111111111',
      title:'配车指南'
    })
  }
  an=()=>{
    this.setState({
      data:'安装指南222222222222222',
      title:'安装指南'
    })
  }
  
    render() {
      return (
        <View className='xunlian_body'>
          <View className='left'>
            <View className='left_card' onClick={this.pei}>配车指南</View>
            <View className='left_card' onClick={this.an}>安装指南</View>
          </View>
          <View className='xun_text'>
            <View className='ti'>{this.state.title}</View>
            <View className='te'>{this.state.data}</View>
          </View>
        </View>
      )
    }
  }
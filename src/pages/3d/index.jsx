import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
// import Three from '../three/index.jsx'
import More from '../more/more.jsx'


export default class Model extends Component {
  constructor(props){
    super(props)
    this.state={
      statu:0
    }
  }

  componentWillMount() { }

  componentDidMount() {
    Taro.showModal({
      title: '提示',
      cancelText: '取消',
      cancelColor: 'black',
      confirmText: '确认',
      confirmColor: 'black',
      content: '请将手机横置以获得更好的体验',
      showCancel: false,
    })
   }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  more = () => {
    if(this.state.statu == 0){
      this.setState({
        statu:1
      })
    }else if(this.state.statu == 1){
      this.setState({
        statu:0
      })
    }
  }

  render() {
    if(this.state.statu == 0){
      return (
        <View className='model_main'>
          <View className='left_select'>
            <Text className='img'>Bike_8</Text>
            <Image src={img1} className='img'></Image>
            <Image src={img2} className='img'></Image>
            <Image src={img3} className='img'></Image>
            <Image src={img4} className='img'></Image>
          </View>
          <View className='model_show'>
            {/* <Three /> */}
          </View>
          <View className='right_select'>
            <View className='r1'>装配</View>
            <View className='r2'>历史</View>
            <View className='r3'>推荐</View>
            <View className='r4' onClick={this.more}>更多</View>
          </View>
        </View>
      )
    }else if(this.state.statu == 1){
      return (
        <View>
        <View className='model_main2'>
          <View className='left_select'>
            <Text className='img'>Bike_8</Text>
            <Image src={img1} className='img'></Image>
            <Image src={img2} className='img'></Image>
            <Image src={img3} className='img'></Image>
            <Image src={img4} className='img'></Image>
          </View>
          <View className='model_show'>
            {/* <Three /> */}
          </View>
          <View className='right_select'>
            <View className='r1'>装配</View>
            <View className='r2'>历史</View>
            <View className='r3'>推荐</View>
            <View className='r4' onClick={this.more}>更多</View>
          </View>
          
        </View>
        <More />
        </View>
      )
    }
    
  }
}

import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.css'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
// import Three from './three/three'


export default class Model extends Component {

    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    render () {
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
        </View>
      )
    }
  }
  
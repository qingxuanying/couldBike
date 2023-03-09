import React, { Component } from 'react'
import { View } from '@tarojs/components'
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; //鼠标控制器
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"; //模型加载器
import './index.css'

export default class Three extends Component {

  componentDidMount() {
    this.initThree();
  }
  initThree=()=> {
    let scene = new THREE.Scene(); //新建场景
    let width = window.innerWidth; //窗口宽度
    let height = window.innerHeight; //窗口高度
    let k = width / height; //窗口宽高比
    let camera = new THREE.PerspectiveCamera(60, k, 0.1, 1000); //透视相机
    camera.position.set(0, 0, 10); //设置相机位置
   
    console.log('test1')

      let loader = new GLTFLoader();
    //此路径是相当对于public中index.html的，模型必须放在public路径下
    loader.load("models/blueWhite.gltf", (gltf) => {
      console.log(gltf);
      gltf.scene.position.set(0, 0, 0);
      scene.add(gltf.scene);
    });

    console.log('test2')

    let ambientLight = new THREE.AmbientLight(0x6aceff); //设置环境光
    scene.add(ambientLight); //将环境光添加到场景中
    let pointLight = new THREE.PointLight(0xffffff, 1, 0);
    pointLight.position.set(10, 10, 0); //设置点光源位置
    scene.add(pointLight); //将点光源添加至场景

     //创建渲染器
     let renderer = new THREE.WebGLRenderer({
      antialias: true, //抗锯齿
      alpha: true,
    });
    renderer.setSize(width, height); //设置渲染区域尺寸
    document
      .getElementById("model")
      .appendChild(this.renderer.domElement); //将画布添加到container中

      console.log('test3')
  }
  //创建宇宙背景
  createUniverse() {
    let texture = new THREE.TextureLoader().load(); //加载背景贴图
    this.scene.background = texture; //设置场景背景
  }

  加载模型
  loadModel() {
    let loader = new GLTFLoader();
    //此路径是相当对于public中index.html的，模型必须放在public路径下
    loader.load("models/blueWhite.gltf", (gltf) => {
      console.log(gltf);
      gltf.scene.position.set(0, 0, 0);
      this.scene.add(gltf.scene);
    });
  }

  创建光源
  createLight() {
    this.ambientLight = new THREE.AmbientLight(0x6aceff); //设置环境光
    this.scene.add(this.ambientLight); //将环境光添加到场景中
    this.pointLight = new THREE.PointLight(0xffffff, 1, 0);
    this.pointLight.position.set(10, 10, 0); //设置点光源位置
    this.scene.add(this.pointLight); //将点光源添加至场景
  }



  render() {
    return (
      <View className='threeModel' id='model'>
        <View>1234654</View>
      </View>
    )
  }
}
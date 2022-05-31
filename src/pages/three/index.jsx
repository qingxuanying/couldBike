import * as THREE from "three/build/three";
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.css'

export default class Three extends Component {

  componentDidMount() {
    this.initThree();
  }

  initThree=()=> {
    let scene = new THREE.Scene();//创建场景
    
    var geometry = new THREE.BoxGeometry( 100, 100, 100);

    let material = new THREE.MeshLambertMaterial({
      color: 0x0000ff
    }); //材质对象Material
    let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    mesh.translateX(0);
   // mesh.translateY(-100);
    mesh.translateZ(0);
    scene.add(mesh); //网格模型添加到场景中
    /**
 * 光源设置
 */
    //点光源
    let point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    let ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);

    console.log(scene)
    console.log(scene.children)
    /**
     * 相机设置
     */
    let width = window.innerWidth; //窗口宽度
    let height = window.innerHeight; //窗口高度
    let k = width / height; //窗口宽高比
    let s = 100; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    let camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 500);
    camera.position.set(300, 200, 300); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    let renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);//设置渲染区域尺寸
    renderer.setClearColor(0xffffff, 0); //设置背景颜色
    document.getElementById('model').appendChild( renderer.domElement )
    
    //this.mount.appendChild( renderer.domElement ); //body元素中插入canvas对象
    //执行渲染操作   指定场景、相机作为参数
    renderer.render(scene, camera);

  }




  render() {
    return (
      <View className='threeModel' id='model'>
        <View></View>
      </View>
    )
  }
}
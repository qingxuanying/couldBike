/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.css'
import * as THREE from "three/build/three";
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { RoughnessMipmapper } from "three/examples/jsm/utils/RoughnessMipmapper";


export default class Three extends Component {
    
    componentDidMount() {
        this.initThree();
      }

    initThree() {
        threeStart();
    
        var container, stats, controls;
        var camera, scene, renderer, light;
        var width, height;
    
        function threeStart() {
          init();
          render();
          loadGLTF("pedestrian_overpass_2k.hdr", "Bot_Skinned.gltf");
          animation();
        }
        function render() {
          renderer.render(scene, camera);
        }
    
        function animation() {
          requestAnimationFrame(animation);
          renderer.render(scene, camera);
          //stats.update();
        }
    
        function init() {
          container = document.getElementById("canvas-frame");
          width = container.offsetWidth;
          height = container.offsetHeight;
    
          //性能插件
           //stats = new Stats();
           //stats.domElement.style.position = 'relative';
           //stats.domElement.style.left = '0px'; // (0,0)px,左上角
           //stats.domElement.style.top = '50px';
           //container.appendChild(stats.domElement);
          
          renderer = new THREE.WebGLRenderer({
            antialias: true,
          });
          renderer.setSize(width, height);
          //renderer.setClearColor(0x999999, 1.0);
          renderer.setPixelRatio(window.devicePixelRatio);
    
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.toneMappingExposure = 1;
          renderer.outputEncoding = THREE.sRGBEncoding;
          container.appendChild(renderer.domElement);
    
    
    
          //相机
          camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
          camera.position.set(0, 0, 400); //设置相机位置
          //camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20);
          //camera.position.set(-1.8, 0.6, 2.7);
    
          //场景
          scene = new THREE.Scene();
    
          //环境光源
          // light = new THREE.AmbientLight(0xFFFFFF);
          // light.position.set(300, 300, 0);
          // scene.add(light);
    
          //相机控件
          controls = new OrbitControls(camera, renderer.domElement);
          //controls.screenSpacePanning = true;
          controls.addEventListener("change", render); 
          controls.minDistance = 2;
          controls.maxDistance = 10;
          controls.target.set(0, 0, -0.2);
          controls.update();
        }
    
        function loadGLTF(backImage, gltf) {
          new RGBELoader()
            .setDataType(THREE.UnsignedByteType)
            .setPath("")
            .load(backImage, function (texture) {
              var envMap = pmremGenerator.fromEquirectangular(texture).texture;
    
              scene.background = envMap;
              scene.environment = envMap;
    
              texture.dispose();
              pmremGenerator.dispose();
    
              render();
    
              // model
    
              // use of RoughnessMipmapper is optional
              var roughnessMipmapper = new RoughnessMipmapper(renderer);
    
              var loader = new GLTFLoader().setPath("");
              loader.load(gltf, function (gltf) {
                gltf.scene.traverse(function (child) {
                  if (child.isMesh) {
                    // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
                    // roughnessMipmapper.generateMipmaps( child.material );
                  }
                });
    
                scene.add(gltf.scene);
                roughnessMipmapper.dispose();
                render();
              });
            });
    
          var pmremGenerator = new THREE.PMREMGenerator(renderer);
          pmremGenerator.compileEquirectangularShader();
    
          window.addEventListener("resize", onWindowResize, false);
        }
    
        function onWindowResize() {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
    
          renderer.setSize(width, height);
    
          render();
        }
      }

      


    render(){
        return (
            <View className='threeModel'>

            </View>
        )
    }
}
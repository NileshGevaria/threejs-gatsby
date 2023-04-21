import React, { useState, useEffect } from 'react'
import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Experience () {
  const ref = React.useRef()
  // const gltf = useLoader(GLTFLoader, 'model/a_windy_day.glb')
  const gltf = useLoader(GLTFLoader, 'model/planet_earth.glb')
  useFrame(() => {
    if(ref.current) {
      ref.current.rotation.y += 0.001
      ref.current.rotation.z += 0.001
    }
  })
  const [scale, setScale] = useState(2.8);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    if(screenSize.dynamicWidth >= 768 && screenSize.dynamicWidth <= 1100){
      setScale(2.7)
    }else if(screenSize.dynamicWidth <= 767){
      setScale(3)
    }
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

    return (
     <>
     <ambientLight intensity={4}/>
       <OrbitControls enableZoom={false} enablePan={false} position={[0,0,0]} />
        <mesh ref={ref}>
         <primitive object={gltf.scene} scale={scale} />
        </mesh>
      </>
    );
  };
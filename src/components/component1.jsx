import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import reactImage from '../assets/react.jpeg';
import cppImage from '../assets/cpp.png';
import pythonImage from '../assets/python.png';
import jsImage from '../assets/JavaScript.png';
import aiImage from '../assets/ai.jpg';
import sunImage from '../assets/sun.jpg';
import mongoImage from '../assets/mongo.png'
import fastImage from '../assets/fastapi.jpg'
import * as THREE from 'three';
import { Html, OrbitControls, useEnvironment } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import Header from "./component2";
import ChatBox from "./component3";
import { Text } from "@react-three/drei";

const angleToRadians = (x) => {
    return x*(Math.PI/180)
}

let time = new THREE.Clock;

const onReactImg = false;

const Three = () => {
    const [positionHTML, setHtmlPosition] = useState('');
    const envMap = useEnvironment({path: "./img"});
    let [reactImgPos, setReactPos] = useState([3, 0, 0]);
    const reactTexture = useLoader(THREE.TextureLoader, reactImage);
    const cppTexture = useLoader(THREE.TextureLoader, cppImage);
    const pythonTexture = useLoader(THREE.TextureLoader, pythonImage);
    const jsTexture = useLoader(THREE.TextureLoader, jsImage);
    const mongoTexture = useLoader(THREE.TextureLoader, mongoImage);
    const aiTexture = useLoader(THREE.TextureLoader, aiImage);
    const sunTexture = useLoader(THREE.TextureLoader, sunImage);
    const fastTexture = useLoader(THREE.TextureLoader, fastImage);

    const orbitControlRef = useRef(null);
    const cameraRef = useRef(null);
    const htmlRef = useRef(null);
    let step = 0;
    
    const calculateRotationalMotion = (r, omega, phase, z, delta_time) => {
        step += 1;
        return [((Math.sqrt(r))*Math.sin(omega*delta_time + phase)), z*Math.cos(omega*delta_time + phase)];
    }

    const handleDrag = (e) => {
        e.preventDefault();
    }

    
    const reactImageRef = useRef(null);
    const reactImageLight = useRef(null);
    let onReactImg = false;
    
    const cppImageRef = useRef(null);
    const cppImageLight = useRef(null);
    let onCppImg = false;

    const pythonImageRef = useRef(null);
    const pythonImageLight = useRef(null);
    let onPythonImg = false;

    const jsImageRef = useRef(null);
    const jsImageLight = useRef(null);
    let onJsImg = false;

    const mongoImageRef = useRef(null);
    const mongoImageLight = useRef(null);
    let onMongoImg = false;

    const aiImageRef = useRef(null);
    const aiImageLight = useRef(null);
    let onAiImg = false;

    const fastImageRef = useRef(null);
    const fastImageLight = useRef(null);
    let onfastImg = false;
    
    
    const sunImageRef = useRef(null);
    const sunImageLight = useRef(null);



    const htmlReloader = () => {
        setHtmlPosition((prevState) => {
            return [9*orbitControlRef.current.getAzimuthalAngle(), 0, 9*orbitControlRef.current.getAzimuthalAngle()]
        })
    }

   

    let elapsed_time = 0;

    useFrame((state, delta) => {
        const clock = state.clock;
        if (onReactImg === true && clock.running === true){
            elapsed_time += clock.getElapsedTime();
            clock.stop();
        }
        else{
            if (clock.running === false){
                clock.start();
            };
        }
        let {x, y} = state.mouse;
        orbitControlRef.current.setAzimuthalAngle(angleToRadians(x*200));
        orbitControlRef.current.setPolarAngle(angleToRadians(y*10));
        orbitControlRef.current.maxDistance = 20;
        orbitControlRef.current.update();
        // // console.log(orbitControlRef.current.getAzimuthalAngle());
        // const x_pos = 9*Math.cos(orbitControlRef.current.getAzimuthalAngle());
        // const z_pos = 9*Math.sin(orbitControlRef.current.getAzimuthalAngle());
        // htmlRef.current.position.x = x_pos;
        // htmlRef.current.position.z = z_pos;
        // htmlRef.current.position.y = 0;
        // console.log(htmlRef.current.position);
        if (onReactImg === false){
            let position;
            let t1 = clock.getElapsedTime() + elapsed_time;
            sunImageRef.current.rotation.y = t1;
            reactImageRef.current.rotation.y = 3*t1;
            position = calculateRotationalMotion(9, 0.4, 0, 2, t1);
            reactImageRef.current.position.x = position[0];
            // reactImageLight.current.position.x = position[0];
            reactImageRef.current.position.z = position[1];


            position = calculateRotationalMotion(9, 0.4, angleToRadians(180), 2, t1);
            cppImageRef.current.rotation.y = 3*t1;
            cppImageRef.current.position.x = position[0];
            cppImageRef.current.position.z = position[1];
            // cppImageLight.current.position.z = position[1];

            position = calculateRotationalMotion(36, 0.8, angleToRadians(180), 4, t1);
            pythonImageRef.current.rotation.y = 5*t1;
            pythonImageRef.current.position.x = position[0];
            pythonImageRef.current.position.z = position[1];
            // pythonImageLight.current.position.z = position[1];

            position = calculateRotationalMotion(36, 0.8, 0, 4, t1);
            jsImageRef.current.rotation.y = 4*t1;
            jsImageRef.current.position.x = position[0];
            jsImageRef.current.position.z = position[1];
            // jsImageLight.current.position.z = position[1];

            position = calculateRotationalMotion(81, 0.9, angleToRadians(180), 6, t1);
            mongoImageRef.current.rotation.y = 5*t1;
            mongoImageRef.current.position.x = position[0];
            mongoImageRef.current.position.z = position[1];
            // mongoImageLight.current.position.x = position[0];


            position = calculateRotationalMotion(81, 0.9, 0, 6, t1);
            aiImageRef.current.rotation.y = 5.5*t1;
            aiImageRef.current.position.x = position[0];
            aiImageRef.current.position.z = position[1];

            position = calculateRotationalMotion(121, 0.4, 0, 10, t1);
            fastImageRef.current.rotation.y = 5.5*t1;
            fastImageRef.current.position.x = position[0];
            fastImageRef.current.position.z = position[1];
            // aiImageLight.current.position.x = position[0];
        }
        // else {
        //     alert("Just Learnt React !!");
        // }
        // if (onCppImg === false){
        //     cppImageRef.current.rotation.y += 0.02;
        // }
        // if (onPythonImg === false){
        //     pythonImageRef.current.rotation.y += 0.02;
        // }
        // if (onJsImg === false){
        //     jsImageRef.current.rotation.y += 0.02;
        // }
        // if (onMongoImg === false){
        //     mongoImageRef.current.rotation.y += 0.02;
        // }
    })

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 3, 12.4]} fov={50} ref={cameraRef}></PerspectiveCamera>
            <OrbitControls ref={orbitControlRef} minPolarAngle={angleToRadians(90)} maxPolarAngle={angleToRadians(90)}></OrbitControls>
            <mesh rotation={[angleToRadians(6), angleToRadians(-110), angleToRadians(0)]} position={[3, 0, 0]} ref={reactImageRef}>
                <sphereGeometry args={[0.5, 32, 32]}></sphereGeometry>
                <meshStandardMaterial map={reactTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[-3, 0, 0]} ref={cppImageRef}>
                <sphereGeometry args={[0.5, 32, 32]}></sphereGeometry>
                <meshStandardMaterial map={cppTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[-6, 0, 0]} ref={pythonImageRef}>
                <sphereGeometry args={[0.5, 32, 32]}></sphereGeometry>
                <meshStandardMaterial map={pythonTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[6, 0, 0]}  rotation = {[angleToRadians(-60), angleToRadians(0), angleToRadians(0)]} ref={jsImageRef}>
                <sphereGeometry args={[0.5, 32, 32]}></sphereGeometry>
                <meshStandardMaterial map={jsTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[-9, 0, 0]} ref={mongoImageRef}>
                <sphereGeometry args={[0.5, 32, 32]}></sphereGeometry>
                <meshStandardMaterial map={mongoTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[9, 0, 0]} ref={aiImageRef}>
                <sphereGeometry args={[0.5, 32, 32]}></sphereGeometry>
                <meshStandardMaterial map={aiTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[11, 0, 0]} ref={fastImageRef}>
                <sphereGeometry args={[0.5, 32, 32]}></sphereGeometry>
                <meshStandardMaterial map={fastTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>


            <mesh position={[0, 0, 0]} ref={sunImageRef}>
                <sphereGeometry args={[1, 32, 32]}></sphereGeometry>
                <meshStandardMaterial map={sunTexture} metalness={0.01} roughness={1}></meshStandardMaterial>
            </mesh>

            <pointLight color={'#FCA987'} intensity={80} position={[0, 0, 2]}></pointLight>
            <pointLight color={'#FCA987'} intensity={50} position={[0, 2, 0]}></pointLight>
            <pointLight color={'#FCA987'} intensity={10} position={[2, 0, 0]}></pointLight>
            <pointLight color={'#FCA987'} intensity={110} position={[0, 0, -2]}></pointLight>
            <pointLight color={'#FCA987'} intensity={90} position={[0, -2, 0]}></pointLight>
            <pointLight color={'#FCA987'} intensity={90} position={[-2, 0, 0]}></pointLight>
            <pointLight color={'#FCA987'} intensity={90} position={[0, 2, 2]}></pointLight>
            <pointLight color={'#FCA987'} intensity={100} position={[2, 2, 0]}></pointLight>
            <pointLight color={'#FCA987'} intensity={100} position={[2, 0, 2]}></pointLight>
            <pointLight color={'#FCA987'} intensity={100} position={[0, -2, -2]}></pointLight>
            <pointLight color={'#FCA987'} intensity={100} position={[-2, -2, 0]}></pointLight>
            <pointLight color={'#FCA987'} intensity={100} position={[-2, 0, -2]}></pointLight>
            
            <spotLight args={['#FCA987', 50]} position={[2, 0, 2]} distance={7} angle={angleToRadians(100)} ref={reactImageLight}></spotLight>
            <spotLight args={['#FCA987', 50]} position={[-2, 0, 2]} distance={7} angle={angleToRadians(100)} ref={cppImageLight}></spotLight>
            <spotLight args={['#FCA987', 50]} position={[-2, 0, 2]} distance={7} angle={angleToRadians(100)} ref={pythonImageLight}></spotLight>
            <spotLight args={['#FCA987', 50]} position={[-4, 0, 2]} distance={7} angle={angleToRadians(100)} ref={jsImageLight}></spotLight>
            <spotLight args={['#FCA987', 50]} position={[-6, 0, 4]} distance={100} angle={angleToRadians(150)} ref={mongoImageLight}></spotLight>
            <spotLight args={['#FCA987', 50]} position={[6, 0, 4]} distance={100} angle={angleToRadians(150)} ref={aiImageLight}></spotLight>
            
            <Html position={positionHTML} fullscreen as='div' onAfterRender={htmlReloader} onDrag={handleDrag}>
                <Header></Header>
            </Html>
            <Environment map={envMap} background>
            </Environment>
        </>
    )
}

export default Three;
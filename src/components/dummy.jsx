import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import reactImage from '../assets/react.jpeg';
import cppImage from '../assets/cpp.png';
import pythonImage from '../assets/python.png';
import jsImage from '../assets/JavaScript.png';
import aiImage from '../assets/ai.jpg';
import sunImage from '../assets/sun.jpg';
import mongoImage from '../assets/mongo.png'
import * as THREE from 'three';
import { Html, OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import Header from "./component2";
import { Text } from "@react-three/drei";


const angleToRadians = (x) => {
    return x*(Math.PI/180)
}


const Three = () => {
    const reactTexture = useLoader(THREE.TextureLoader, reactImage);
    const cppTexture = useLoader(THREE.TextureLoader, cppImage);
    const pythonTexture = useLoader(THREE.TextureLoader, pythonImage);
    const jsTexture = useLoader(THREE.TextureLoader, jsImage);
    const mongoTexture = useLoader(THREE.TextureLoader, mongoImage);
    const aiTexture = useLoader(THREE.TextureLoader, aiImage);
    const sunTexture = useLoader(THREE.TextureLoader, sunImage);

    const orbitControlRef = useRef(null);
    let step = 0;
    const calculateRotationalMotion = (r, omega, phase, z, delta_time) => {
        step++;
        return [(Math.sqrt(r))*Math.sin(omega*step + phase), z*Math.cos(omega*step + phase)];
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

    
    
    const sunImageRef = useRef(null);
    const sunImageLight = useRef(null);



    
    const handlePointerEnter = (e) => {
        onReactImg = true;
        onCppImg = true;
        onPythonImg = true;
        onJsImg = true;
        onMongoImg = true;
        onAiImg = true;

    }
    const handlePointerLeave = (e) => {
        onReactImg = false;
        onCppImg = false;
        onPythonImg = false;
        onJsImg = false;
        onMongoImg = false;
        onAiImg = false;

    }


    useFrame((state, delta) => {
        sunImageRef.current.rotation.y += 0.1;
        let {x, y} = state.mouse;
        // orbitControlRef.current.setAzimuthalAngle(angleToRadians(x*180));
        // orbitControlRef.current.setPolarAngle(angleToRadians(y*10));
        // orbitControlRef.current.update();

        
        let w1 = [0.006, 0.00058], w2 = [0.008, 0.00078], w3 = [0.009, 0.00088];
        let org1, org2, org3;
        let count = 0;
        if (100*delta < 1.5){
            org1 = w1[1];
            org2 = w2[1];
            org3 = w3[1];
        }
        else {
            org1 = w1[0];
            org2 = w2[0];
            org3 = w3[0];
        }
        if (onReactImg === false){
            let position;
            reactImageRef.current.rotation.y += 100*delta >= 2 ? 0.2: 0.03;
            position = calculateRotationalMotion(9, org1, 0, 2, delta);
            reactImageRef.current.position.x = position[0];
            // reactImageLight.current.position.x = position[0];
            reactImageRef.current.position.z = position[1];


            position = calculateRotationalMotion(9, org1, angleToRadians(180), 2, delta);
            cppImageRef.current.rotation.y += 100*delta >= 2 ? 0.2: 0.03;
            cppImageRef.current.position.x = position[0];
            cppImageRef.current.position.z = position[1];
            // cppImageLight.current.position.z = position[1];

            position = calculateRotationalMotion(36, org2, angleToRadians(180), 4, delta);
            pythonImageRef.current.rotation.y += 100*delta >= 2 ? 0.25: 0.08;
            pythonImageRef.current.position.x = position[0];
            pythonImageRef.current.position.z = position[1];
            // pythonImageLight.current.position.z = position[1];

            position = calculateRotationalMotion(36, org2, 0, 4, delta);
            jsImageRef.current.rotation.y += 100*delta >= 2 ? 0.25: 0.04;
            jsImageRef.current.position.x = position[0];
            jsImageRef.current.position.z = position[1];
            // jsImageLight.current.position.z = position[1];

            position = calculateRotationalMotion(36, org3, angleToRadians(180), 6, delta);
            mongoImageRef.current.rotation.y += 100*delta >= 2 ? 0.2: 0.050;
            mongoImageRef.current.position.x = position[0];
            mongoImageRef.current.position.z = position[1];
            // mongoImageLight.current.position.x = position[0];


            position = calculateRotationalMotion(64, org3, 0, 6, delta);
            aiImageRef.current.rotation.y += 100*delta >= 2 ? 0.2: 0.055;
            aiImageRef.current.position.x = position[0];
            aiImageRef.current.position.z = position[1];
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
            <PerspectiveCamera makeDefault position={[0, 0.5, 10]} fov={50}></PerspectiveCamera>
            {/* <OrbitControls ref={orbitControlRef} minPolarAngle={angleToRadians(85)} maxPolarAngle={angleToRadians(30)}></OrbitControls> */}
            <mesh rotation={[angleToRadians(6), angleToRadians(-110), angleToRadians(0)]} position={[3, 0, 0]} ref={reactImageRef} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
                <sphereGeometry args={[0.5, 320, 320]}></sphereGeometry>
                <meshStandardMaterial map={reactTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[-3, 0, 0]} ref={cppImageRef} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
                <sphereGeometry args={[0.5, 320, 320]}></sphereGeometry>
                <meshStandardMaterial map={cppTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[-6, 0, 0]} ref={pythonImageRef} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
                <sphereGeometry args={[0.5, 320, 320]}></sphereGeometry>
                <meshStandardMaterial map={pythonTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[6, 0, 0]}  rotation = {[angleToRadians(-60), angleToRadians(0), angleToRadians(0)]} ref={jsImageRef} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
                <sphereGeometry args={[0.5, 320, 320]}></sphereGeometry>
                <meshStandardMaterial map={jsTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[-8, 0, 0]} ref={mongoImageRef} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
                <sphereGeometry args={[0.5, 320, 320]}></sphereGeometry>
                <meshStandardMaterial map={mongoTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <mesh position={[8, 0, 0]} ref={aiImageRef} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
                <sphereGeometry args={[0.5, 320, 320]}></sphereGeometry>
                <meshStandardMaterial map={aiTexture} metalness={0.65} roughness={0.2}></meshStandardMaterial>
            </mesh>

            <group>
                <mesh position={[0, 0, 0]} ref={sunImageRef}>
                    <sphereGeometry args={[1, 320, 320]}></sphereGeometry>
                    <meshStandardMaterial map={sunTexture} metalness={0.01} roughness={1}></meshStandardMaterial>
                </mesh>
                <Text position={[-9, 0, 0]} color={'white'}>
                        Hey
                </Text>
            </group>

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
            <Environment files={'./img/starmap.hdr'} background>
            </Environment>
        </>
    )
}

export default Three;
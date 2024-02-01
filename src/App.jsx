import { Suspense, useState } from 'react'
import './App.css'
import {Canvas} from "@react-three/fiber";
import Three from './components/component1';
import Header from './components/component2';
import { Html } from '@react-three/drei';
import { Text } from '@react-three/drei';
import LightWeight from '../src/components/component4'
import { Color } from 'three';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div id='Canvas'>
      <Canvas id='subcanvas'>
        <Suspense fallback={<Html as='div' fullscreen><LightWeight></LightWeight></Html>}>
          <Three></Three>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App

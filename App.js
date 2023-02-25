import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import "./style.css";



function Orb(props) {
  const mesh = useRef();
  
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  return (
    <>
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
         <sphereGeometry args={[1, 32, 32]} />
         <ambientLight intensity={0.2} />
         <directionalLight />
         {/* <meshStandardMaterial map={colorMap}/> */}
      <meshStandardMaterial color={hovered ? 'green' : 'blue'} />
    </mesh>
        {/* const colorMap = useLoader(TextureLoader, 'assets/textures/lava_black_d.jpg') */}
    </>
  )
}




createRoot(document.getElementById('root')).render(
  <Canvas>
    <Suspense fallback={null}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Orb position={[0, 0, 0]} />
    </Suspense>
  </Canvas>,
)


export default App;
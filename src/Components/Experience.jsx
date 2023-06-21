import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {

    const cubeRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta)=>{
        cubeRef.current.rotation.y += delta;
        groupRef.current.rotation.y +=delta;
    })

  return (
    <>
        <group ref={groupRef}> 
            <mesh ref={cubeRef} rotation-y={Math.PI* 0.25} position-x={2} scale={1.5}>
                <boxGeometry/>
                <meshBasicMaterial color="mediumpurple"/>
            </mesh>

            <mesh  rotation-y={Math.PI* 0.25} position-x={-2}>
                <sphereGeometry/>
                <meshBasicMaterial color="orange"/>
            </mesh>
        </group>
  

        <mesh rotation-x={Math.PI*-0.5} position-y={-1} scale={10} >
            <planeGeometry/>
            <meshBasicMaterial color="green"/>
        </mesh>

    </>
   
    
  )
}

export default Experience

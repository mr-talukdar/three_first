import { Canvas } from "@react-three/fiber"
import Experience from "./Components/Experience"

function App() {
 
  return (
    <>
     <div className=" fixed  h-full w-full">
        <Canvas>
          <Experience/>
        </Canvas>
     </div>
    </>
  )
}

export default App

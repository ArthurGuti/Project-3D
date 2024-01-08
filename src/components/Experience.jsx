import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} /> {/* Aqui eu estou deixando mais claro */}
      <OrbitControls enableZoom={false} />    {/*Serve para mover a camera*/}
      {/* <mesh>
          <boxGeometry />             * Aqui criamos um cubo 3D *
          <meshNormalMaterial />
      </mesh> */}
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};

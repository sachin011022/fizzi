import { Loader, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

type Props = {
  className?: string;
};

export default function ViewCanvas({ className }: Props) {
  return (
    <>
      <Canvas
        className={className}
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          overflow: "hidden",
          height: "100%",
        }}
        dpr={[1, 1.5]}
        shadows
        gl={{ antialias: false }}
        camera={{
          fov: 30,
        }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} />
    </>
  );
}

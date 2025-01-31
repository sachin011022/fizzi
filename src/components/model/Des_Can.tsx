import { useRef } from "react";

// GSAP librabry
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Three JS And React Three Library
import * as Three from "three";
import { Environment } from "@react-three/drei";

// Three D Can Model
import FloatCan from "./FloatCan";

export default function Des_Can({
  index,
  flavor,
}: {
  index: string;
  flavor?:
    | "lemonLime"
    | "grape"
    | "blackCherry"
    | "strawberryLemonade"
    | "watermelon";
}) {
  const canGroupRef = useRef<Three.Group>(null);

  useGSAP(() => {
    if (!canGroupRef.current) return;

    gsap.set(canGroupRef.current.position, {
      x: index === "Left" ? -1.5 : 1.5,
    });
  }, []);

  return (
    <group ref={canGroupRef}>
      <FloatCan flavor={flavor} />
      <Environment files={"./hdr/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}

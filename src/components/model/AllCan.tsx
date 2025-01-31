import { useRef } from "react";
import FloatCan from "./FloatCan";
import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {};

const FLOAT_SPEED = 1.5;

export default function AllCan({}: Props) {
  const can1Ref = useRef<THREE.Group>(null);
  const can2Ref = useRef<THREE.Group>(null);
  const can3Ref = useRef<THREE.Group>(null);
  const can4Ref = useRef<THREE.Group>(null);
  const can5Ref = useRef<THREE.Group>(null);

  const can1GroupRef = useRef<THREE.Group>(null);
  const can2GroupRef = useRef<THREE.Group>(null);

  const groupref = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupref.current
    )
      return;

    // Can 1 and Can 2 Postion

    // Can 1
    gsap.set(can1Ref.current?.position, { x: -1.5 });
    gsap.set(can1Ref.current.rotation, { z: -0.5 });

    //Can
    gsap.set(can2Ref.current?.position, { x: 1.5 });
    gsap.set(can2Ref.current.rotation, { z: 0.5 });

    //Can 3
    gsap.set(can3Ref.current.position, { y: 5, z: 2 });

    //Can 4
    gsap.set(can4Ref.current.position, { x: 2, y: 4, z: 2 });

    //Can 5
    gsap.set(can5Ref.current.position, { y: -5 });

    // TimeLine
    const scrolltl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrolltl
      // Rotate can group
      .to(groupref.current.rotation, { y: Math.PI * 2 })

      // Can 1 - black cherry
      .to(can1Ref.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
      .to(can1Ref.current.rotation, { z: 0.3 }, 0)

      // Can 2 - Lemon Lime
      .to(can2Ref.current.position, { x: 1, y: -0.2, z: -1 }, 0)
      .to(can2Ref.current.rotation, { z: 0 }, 0)

      // Can 3 - Grape
      .to(can3Ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      .to(can3Ref.current.rotation, { z: -0.1 }, 0)

      // Can 4 - Strawberry Lemonade
      .to(can4Ref.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
      .to(can4Ref.current.rotation, { z: 0.3 }, 0)

      // Can 5 -Watermelon
      .to(can5Ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
      .to(can5Ref.current.rotation, { z: -0.25 }, 0)
      .to(
        groupref.current.position,
        { x: 1, duration: 3, ease: "sine.inOut" },
        1.3,
      );
  }, []);
  return (
    <group ref={groupref}>
      <group ref={can1GroupRef}>
        <FloatCan ref={can1Ref} flavor="blackCherry" floatSpeed={FLOAT_SPEED} />
      </group>
      <group ref={can2GroupRef}>
        <FloatCan ref={can2Ref} flavor="lemonLime" floatSpeed={FLOAT_SPEED} />
      </group>

      <FloatCan ref={can3Ref} flavor="grape" floatSpeed={FLOAT_SPEED} />

      <FloatCan
        ref={can4Ref}
        flavor="strawberryLemonade"
        floatSpeed={FLOAT_SPEED}
      />

      <FloatCan ref={can5Ref} flavor="watermelon" floatSpeed={FLOAT_SPEED} />

      <OrbitControls />
      <Environment files="./hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}

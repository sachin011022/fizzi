import { useRef } from "react";

import * as THREE from "three";
import { Cloud, Clouds, Environment, Text, View } from "@react-three/drei";

import FloatCan from "./FloatCan";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Bounded } from "../Bounded";

type Props = {};

export default function DivCan({}: Props) {
  return (
    <Bounded className="skyCan">
      {/* <h2 className="text-4xl uppercase">dive into better </h2> */}
      <View className="h-screen w-full">
        {/* <AllCan /> */}
        <Scene sentence="DIVE INTO BETTER" />
      </View>
    </Bounded>
  );
}

const Scene = ({ sentence }: { sentence: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const canRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const wordsRef = useRef<THREE.Group>(null);
  const cloudGroupRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (
      !groupRef.current ||
      !canRef.current ||
      !cloud1Ref.current ||
      !wordsRef.current ||
      !cloudGroupRef.current ||
      !cloud2Ref.current
    )
      return;

    gsap.set(cloudGroupRef.current.position, { z: 10 });
    gsap.set(canRef.current.position, { x: -1.5, y: 3.6 });

    gsap.set(
      wordsRef.current.children.map((word) => word.position),
      { x: 1.5, y: -1.5, z: 2 },
    );

    gsap.to(canRef.current.rotation, {
      y: Math.PI * 2,
      duration: 1.7,
      repeat: -1,
      ease: "none",
    });

    gsap.set(cloud1Ref.current.position, {
      x: 1.5,
      y: -1.5,
    });
    gsap.set(cloud2Ref.current.position, {
      x: 1.5,
      y: -2.5,
    });

    gsap.to(cloud1Ref.current.position, {
      y: 3,
      x: -3,
      repeat: -1,
      duration: 6,
      ease: "none",
    });
    gsap.to(cloud2Ref.current.position, {
      y: 3,
      x: -3,
      repeat: -1,
      duration: 6 / 2,
      ease: "none",
      delay: 0.8,
    });

    const scrolltl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skyCan     ",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
      },
    });

    //Change Body Color
    scrolltl
      .to("body", {
        backgroundColor: "#C0F0F5",
        overwrite: "auto",
        duration: 0.1,
      })
      .to(cloudGroupRef.current.position, { z: 0, duration: 0.1 }, 0)
      .to(canRef.current.position, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      })
      .to(
        wordsRef.current.children.map((word) => word.position),
        {
          keyframes: [
            { x: 0, y: 0, z: -1 },
            { x: -1.5, y: 2 },
          ],
          stagger: 0.3,
        },
      );
  }, []);

  return (
    <group ref={groupRef}>
      {/* Cloud Group Ref */}
      <group ref={cloudGroupRef}>
        <Clouds>
          <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
          <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
        </Clouds>
      </group>

      {/* Text */}
      <group ref={wordsRef}>
        {sentence && <ThreeD_Text sentence={sentence} color="#F97315" />}
      </group>

      {/* Lights */}
      <ambientLight intensity={2} color="#9DDEFA" />

      {/* Can Ref */}
      <group rotation={[0, 0, 0.5]}>
        <FloatCan ref={canRef}>
          <pointLight intensity={30} color="#8C0413" decay={0.6} />
        </FloatCan>
        <Environment files={"./hdr/field.hdr"} environmentIntensity={1.5} />
      </group>
      {/* <OrbitControls /> */}
    </group>
  );
};

const ThreeD_Text = ({
  sentence,
  color,
}: {
  sentence: string;
  color: string;
}) => {
  const material = new THREE.MeshLambertMaterial();

  const words = sentence.split(" ");

  return words.map((word, index) => (
    <Text
      key={`${index}-${word}`}
      scale={1}
      color={color}
      material={material}
      font="/fonts/Alpino-Variable.woff"
      fontWeight={900}
      anchorX={"center"}
      anchorY={"middle"}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?'"
    >
      {word}
    </Text>
  ));
};

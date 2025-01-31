import { forwardRef, ReactNode } from "react";
import { CanModel, SodaCanProps } from "./CanModel";
import { Group } from "three";
import { Float } from "@react-three/drei";

type FloatCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatCan = forwardRef<Group, FloatCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <CanModel flavor={flavor} />
        </Float>
      </group>
    );
  },
);

FloatCan.displayName = "FloatCan";
export default FloatCan;

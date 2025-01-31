import { useState, SVGProps } from "react";
import { Center, Environment, View } from "@react-three/drei";

import FloatCan from "../components/model/FloatCan";
import { SodaCanProps } from "../components/model/CanModel";

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
  price: string;
}[] = [
  {
    flavor: "blackCherry",
    color: "#710523",
    name: "Black Cherry",
    price: "12 Cans - $4.99",
  },
  {
    flavor: "grape",
    color: "#572981",
    name: "Grape Goodness",
    price: "12 Cans - $2.99",
  },
  {
    flavor: "lemonLime",
    color: "#164405",
    name: "Lemon Lime",
    price: "12 Cans - $3.99",
  },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
    price: "12 Cans - $5.99",
  },
  {
    flavor: "watermelon",
    color: "#4B7002",
    name: "Watermelon Crush",
    price: "12 Cans - $4.99",
  },
];

export default function Carausal() {
  const [active, setActive] = useState(1);

  const handleToChange = (index: number) => {
    const currentIndex = (index + FLAVORS.length) % FLAVORS.length;
    setActive(currentIndex);
  };

  return (
    <section
      className="grid h-screen w-full grid-rows-[auto,4fr,auto] place-items-center py-12"
      style={{
        backgroundColor: FLAVORS[active].color,
      }}
    >
      <h1 className="text-5xl font-bold text-white">{"Choose Your Flavor"}</h1>
      <div className="flex h-[75vh] w-full items-center">
        {/* left Icon */}
        <ArrowIcon
          className="size-12 cursor-pointer rounded-full bg-black/65 p-2 text-white"
          onClick={() => handleToChange(active + 1)}
        />

        {/* Three_D Can */}
        <View className="h-[75vh] w-full">
          <Center position={[0, 0, 1]}>
            <FloatCan flavor={FLAVORS[active].flavor} />
            <Environment files={"./hdr/lobby.hdr"} environmentIntensity={1.5} />
            <directionalLight position={[0, 0, 5]} intensity={1.5} />
          </Center>
        </View>

        {/* right Icon */}
        <ArrowIcon
          className="size-12 rotate-180 cursor-pointer rounded-full bg-black/65 p-2 text-white"
          onClick={() => handleToChange(active - 1)}
        />
      </div>

      {/* foter Text */}
      <div className="text-area relative mx-auto text-center">
        <div className="text-wrapper text-4xl font-medium">
          <p>{FLAVORS[active].name}</p>
        </div>
        <div className="mt-2 text-2xl font-normal opacity-90">
          <p>{FLAVORS[active].price}</p>
        </div>
      </div>
    </section>
  );
}

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 52 52"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 25.7c0 1.1.6 2.2 1.1 2.8l18.6 18.6a4.4 4.4 0 006.2 0 4.4 4.4 0 000-6.2L19.7 25.7 35 10.5a4.4 4.4 0 000-6.2 4.4 4.4 0 00-6.2 0l-18 18C9.6 23.4 9 24.6 9 25.7z"
      />
    </svg>
  );
};

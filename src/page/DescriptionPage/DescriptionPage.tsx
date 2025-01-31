import { View } from "@react-three/drei";

import { Bounded } from "../../components/Bounded";
import Des_Can from "../../components/model/Des_Can";

export default function DescriptionPage() {
  return (
    <div
      className="relative h-auto w-full overflow-hidden"
      id="des-body-container"
    >
      <Bounded>
        <div className="relative z-[100] grid h-auto w-full">
          {/* Left Text And Right Can  */}

          <LeftPage />

          {/* Right Text And Left Can */}

          <RightPage />

          <LastLeft />
        </div>
      </Bounded>
    </div>
  );
}

const LeftPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-between">
      <View className="pointer-events-none absolute top-[100vh] z-50 hidden h-screen w-full md:block">
        <Des_Can index="Left" flavor="watermelon" />
      </View>
      <div className="grid gap-4">
        <h1 className="text-6xl font-bold text-gray-900">
          Gut-Friendly Goodness
        </h1>
        <div className="w-xl">
          <p className="text-xl">
            Our soda is packed with prebiotics and 1 billion probiotics, giving
            your gut the love it deserves. Say goodbye to bloating and hello to
            a happy, healthy digestive system with every sip.
          </p>
        </div>
      </div>
      <div />
    </div>
  );
};

const LastLeft = () => {
  return (
    <div className="flex h-screen w-full items-center justify-between">
      <View className="pointer-events-none absolute bottom-0 z-50 hidden h-screen w-full md:block">
        <Des_Can index="Right" flavor="grape" />
      </View>
      <div className="grid gap-4">
        <h1 className="text-6xl font-bold text-gray-900">
          Naturally Refreshing
        </h1>
        <div className="w-xl">
          <p className="text-xl">
            Made with only the best natural ingredients, our soda is free from
            artificial sweeteners and flavors. It’s a crisp, clean taste that
            feels as good as it tastes, giving you a boost of real, natural
            refreshment.
          </p>
        </div>
      </div>
      <div />
    </div>
  );
};

const RightPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-between">
      <div />
      <View className="pointer-events-none absolute top-0 z-50 hidden h-screen w-full md:block">
        <Des_Can index="Right" flavor="strawberryLemonade" />
      </View>
      <div className="grid gap-4">
        <h1 className="text-6xl font-bold text-gray-900">
          Light Calories, Big Flavor
        </h1>
        <div className="w-xl">
          <p className="text-xl">
            Indulge in bold, refreshing taste without the guilt. At just 20
            calories per can, you can enjoy all the flavor you crave with none
            of the compromise.
          </p>
        </div>
      </div>
    </div>
  );
};

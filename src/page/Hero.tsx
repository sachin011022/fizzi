import { View } from "@react-three/drei";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Bounded } from "../components/Bounded";
import Splitter from "../components/Splitter";
import AllCan from "../components/model/AllCan";

type Props = {};

export default function Hero({}: Props) {
  useGSAP(() => {
    const heroTl = gsap.timeline();

    //  animate hero large text
    heroTl
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        delay: 0.3,
        stagger: 1,
        ease: "power4.in",
      })
      .from(".hero-subheading", {
        opacity: 0,
        y: 100,
      });

    // scrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Animate Data Elements

    //Change Body Color
    tl.fromTo(
      "body",
      {
        backgroundColor: "#FDE047",
      },
      {
        backgroundColor: "#D9F99D",
        overwrite: "auto",
      },
      1,
    )
      // Animate Text & SubHeading
      .from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".text-side-body", {
        y: 20,
        opacity: 0,
      });
  }, []);
  return (
    <div className="hero-container h-auto w-full">
      <Bounded className="hero">
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-full md:block">
          <AllCan />
        </View>
        <div className="grid h-screen place-items-center">
          <h1 className="hero-header mt-8 text-center text-7xl leading-[.8] font-black text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
            <Splitter
              text={"Live Gusty"}
              wordDisplayStyle="block"
              className="hero-header-word"
            />
          </h1>

          <div className="hero-subheading text-5xl font-semibold text-sky-950 lg:text-6xl">
            Soda Perfected
            <div className="hero-body text-center text-2xl font-normal text-sky-950">
              3-5g sugar. 9g fiber. 5 delicious flavors.
            </div>
          </div>
          <button className="hero-button cursor-pointer rounded-lg bg-orange-500 px-4 py-3 text-2xl font-bold text-white uppercase duration-150 hover:bg-orange-600">
            shop now
          </button>
        </div>
        <div className="flex h-screen items-center justify-between">
          <section className="w-fit">
            <div className="max-w-xl">
              <h2 className="text-side-heading text-6xl font-black text-balance text-sky-950 uppercase lg:text-8xl">
                <Splitter
                  text={"try all five flavors"}
                  wordDisplayStyle="inline-block"
                />
              </h2>
            </div>
            <div className="text-side-body mt-4 max-w-xl text-xl font-normal text-balance text-sky-950">
              <p>
                Our soda is made with real fruit juice and a touch of cane
                sugar. We never use artificial sweeteners or high fructose corn
                syrup. Try all five flavors and find your favorite!
              </p>
            </div>
          </section>
          <div />
        </div>
      </Bounded>
    </div>
  );
}

// const SpliteText = ({
//   words,
//   wordId,
//   charId,
// }: {
//   words: string;
//   wordId?: string;
//   charId?: string;
// }) => {
//   const allText = words.split("<br/> ");

//   return allText.map((word, index) => (
//     <div className="block" key={index} id={wordId}>
//       {word.split("").map((char, index) => (
//         <span className="inline-block" key={index} id={charId}>
//           {char}
//         </span>
//       ))}
//     </div>
//   ));
// };

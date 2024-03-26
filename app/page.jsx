"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "./components/Hero";
import Episode from "./components/Episode";
import About from "./components/About";
import Cast from "./components/Cast";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <Parallax pages={5}>
        <ParallaxLayer speed={1}>
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <Episode />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <About />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <Cast />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

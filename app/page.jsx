'use client'

import React from "react";

import { Link, Element } from "react-scroll";
import Hero from "./components/Hero";
import Episode from "./components/Episode";
import About from "./components/About";
import Cast from "./components/Cast";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="episode">
        <Episode />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="cast">
        <Cast />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

"use client";
import React from "react";
import dynamic from "next/dynamic"

const TypeAnimation = dynamic(
  () =>
    import("react-type-animation").then(
      (mod) => mod.TypeAnimation
    ),
  { ssr: false }
);

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

      <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Prince Yadav
        </span>
      </h1>

      <h2 className="mt-4 text-xl font-medium text-zinc-300 md:text-3xl">
        Backend Developer | Full Stack Developer
      </h2>

      <div className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 min-h-[120px] md:text-xl">
        <TypeAnimation
          sequence={[
            "Computer Science student passionate about Backend Engineering, scalable systems, and building real-time applications.",
            1000,
            "I specialize in Node.js, Express, MongoDB, React, Next.js, and Socket.io.",
            1000,
            "Currently focused on Backend Development, DSA, and creating production-ready projects.",
            1000,
          ]}
          wrapper="span"
          speed={60}
          repeat={Infinity}
        />
      </div>
      <button
        className="mt-10 rounded-xl bg-[linear-gradient(to_right,#4776E6_0%,#8E54E9_51%,#4776E6_100%)] bg-[length:200%_auto] px-10 py-4 uppercase text-white shadow-[0_0_25px_rgba(142,84,233,0.35)] transition-all duration-500 hover:scale-105 hover:bg-[position:right_center] hover:shadow-[0_0_35px_rgba(142,84,233,0.55)] cursor-pointer font-bold"
      >
        View Resume
      </button>


    </section>
  );
};

export default Hero;
import React from "react";
import { useState, useEffect, useRef } from "react";
import { about } from "../data/constants";

const Home = () => {
  const name = about.name;
  const ref = useRef(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText(() => text + name[ref.current - 1]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="area relative z-0 bg-black w-screen h-screen">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        className="hero relative h-[calc(100vh)] flex justify-center items-center text-white"
        id="hero"
      >
        <div className="pt-4 h-36 backdrop-blur-sm rounded-3xl">
          <h1 className="text-6xl sm:text-7xl font-extrabold mt-2">
            Hi, I'm&nbsp;
            <span className="text-yellow-200 font-extrabold">{text}</span>
          </h1>
          <p className="mt-3 text-xl">{about.caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "../App.css";
import { services } from "../constants";
import ButtonLink from "./ButtonLink";
import Footer from "./Footer";

const ServiceCard = ({ service }) => (
  <div className="sm:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px]">
      <div
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ background: "#151030" }}
      >
        <img
          src={service.icon}
          alt="some_icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div
        className="bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden"
        id="about"
      >
        <div className="flex flex-col justify-around">
          <div className="sm:px-16 px-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
              Introduction
            </h2>
            <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
              👨‍💻 Hi, I'm Vijay Solaraju, a 2021 graduate🎓 with a strong
              background in front-end development and a growing expertise in
              full stack development. With 1.8 years of hands-on experience as a
              Front-End Developer at NeoSoft Technologies, I've honed my skills
              in React, JavaScript, HTML, CSS, and Bootstrap, transforming
              design prototypes into fully responsive and efficient web
              applications.
            </p>
            <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
              🚀 My journey into full stack development has equipped me with a
              solid understanding of the MERN stack. I am passionate about
              building scalable and optimized web applications, continuously
              exploring new technologies and techniques to enhance my skill set.
            </p>

            <ButtonLink
              url="https://drive.google.com/file/d/1QFyHOqexhckBHDxdCARuOEGQWbtbENrL/view?usp=sharing"
              text="View Resume →"
              padding={`p-3`}
            />
          </div>
          <div className="mt-20 flex justify-center flex-wrap gap-7">
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

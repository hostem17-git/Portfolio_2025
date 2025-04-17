import gsap from "gsap";

import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    img: "/1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    id: "project-1",
  },
  {
    img: "/2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    id: "project-2",
  },
    {
      img: "/3.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      id: "project-3",
    },
    {
      img: "/4.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      id: "project-4",
    },
];

function Projects() {
  useEffect(() => {
    projects.forEach((project) => {
      gsap.to(`#${project.id}`, {
        height: 0,
        scrollTrigger: {
          trigger: `#${project.id}-section`,
          start: "bottom 54%",
          end: "bottom 6%",
          scrub: 0,
          markers: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full relative">
      {projects.map((project, index) => (
          <div
          key={index + "img"}
            id={project.id}
            className={`w-80 fixed left-1/2 -translate-x-1/2 overflow-clip top-10 `}
            style={{zIndex:`${20-index}`}}
          >
            <img className="w-full h-80 " src={project.img} alt={project.id} />
          </div>
      ))}

      {projects.map((project, index) => (
        <div key={index}>
          <div
            id={project.id + "-section"}
            className="relative w-full min-h-screen overflow-hidden z-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 blur-md transition-all duration-500 hover:scale-125 hover:blur-sm"
              style={{ backgroundImage: `url(${project.img})` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;

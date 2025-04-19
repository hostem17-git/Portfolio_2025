import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const ScrambleText = ({ text, className = "", duration = 2 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const scrambleChars = "!<>-_\\/[]{}—=+*^?#________";

    const scrambled = text
      .split("")
      .map((char) =>
        char === " "
          ? " "
          : scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
      )
      .join("");

    el.textContent = scrambled;

    gsap.to(el, {
      text: {
        value: text,
        delimiter: "", 
      },
      duration,
      ease: "power2.in",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        markers:true,
      },
    });
  }, [text, duration]);

  return (
    <p
      ref={textRef}
      className={`font-mono  ${className}`}
    ></p>
  );
};

export default ScrambleText;

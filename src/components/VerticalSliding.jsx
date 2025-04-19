import React from "react";

function VerticalSlidingText({ text, className="" }) {
  const splitText = text.split("");

  return (
    <div className={`flex group cursor-pointer text-center ${className}`}>
      {splitText.map((char, index) => (
        <span key={index} className="inline-block relative overflow-hidden">
          <span
            className={`block absolute transform transition-transform duration-250 group-hover:-translate-y-full`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {char}
          </span>
          <span
            className={`block transform translate-y-full transition-transform duration-250 group-hover:translate-y-0`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {char}
          </span>
        </span>
      ))}
    </div>
  );
}

export default VerticalSlidingText;

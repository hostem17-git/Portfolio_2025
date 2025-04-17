import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ShootingStars from "./shootingStar";

function Home() {
  const titleRef = useRef();

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 400,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      {/* Background Layer */}
      <div className="absolute z-10 w-full h-full bg-[url('/mountainOnly.webp')] bg-cover bg-center flex items-center justify-center" />

      {/* Title */}
      <div
        ref={titleRef}
        className="text-[7vw] z-[5] markazi-text-700 text-white absolute left-1/2 -translate-x-1/2 top-2/6"
      >
        Vinayak Jaiswal
      </div>

      {/* Shooting Stars */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* <ShootingStars count={20} />  */}
      </div>

      {/* Background Layer (Sky) */}
      <div className="absolute w-full h-full bg-[url('/sky.webp')] bg-cover bg-center flex items-center justify-center" />
    </div>
  );
}

export default Home;

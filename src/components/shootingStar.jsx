import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function ShootingStars({ count = 10 }) {
  const starRefs = useRef([]);

  useEffect(() => {
    starRefs.current.forEach((ref, i) => {
      // Random start position
      const startX = Math.random() * window.innerWidth * 0.5;
      const startY = Math.random() * window.innerHeight * 0.5;

      // Random end position (within a random range)
      const randomAngle = Math.random() * Math.PI * 2;  // Random angle between 0 and 2π
      const randomDistance = Math.random() * 500 + 1000;  // Random length (from 1000 to 1500px)

      const endX = startX + randomDistance * Math.cos(randomAngle);
      const endY = startY + randomDistance * Math.sin(randomAngle);

      // Calculate rotation based on random start and end positions
      const dx = endX - startX;
      const dy = endY - startY;
      const angleRad = Math.atan2(dy, dx);
      const angleDeg = angleRad * (180 / Math.PI);

      const delay = Math.random() * 1;  // Shorter delay for quicker frequency

      const tl = gsap.timeline({
        repeat: -1,
        // repeatDelay: 2,  
        // delay,
      });

      tl.fromTo(
        ref,
        {
          x: startX,
          y: startY,
          opacity: 0,
          scale: 0.3,
          rotation: angleDeg,
          display: "block",  // Ensure the star is initially visible
        },
        {
          x: endX,
          y: endY,
          opacity: 1,
          scale: 1,
          rotation: angleDeg,
          duration: 3,
          ease: "power1.in",
          onStart: () => {
            gsap.set(ref, { display: "block" });  // Keep it visible while animating
          },
          onComplete: () => {
            gsap.set(ref, { opacity: 0, display: "none" });  // Hide after animation completes
          },
        }
      );
    });
  }, [count]);

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (starRefs.current[i] = el)}
          className="absolute shooter z-[3] w-64 h-0.5 bg-gradient-to-l from-white to-transparent rounded-full"
          style={{
            clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
          }}
        />
      ))}
    </>
  );
}

export default ShootingStars;

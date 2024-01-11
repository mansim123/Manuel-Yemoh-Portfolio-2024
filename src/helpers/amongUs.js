import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const AmongUsBackground = () => {
  const [dots, setDots] = useState([]);
  const dotRefs = useRef([]);
  const amountOfDots = 100;

  useEffect(() => {
    const generateRandomDot = () => {
      const size = Math.floor(Math.random() * 6) + 2;
      const top = Math.floor(Math.random() * window.innerHeight);
      const dot = {
        size,
        top,
      };
      return dot;
    };

    const createDots = () => {
      const newDots = [];
      for (let i = 0; i < amountOfDots; i++) {
        const dot = generateRandomDot();
        newDots.push(dot);
      }
      setDots(newDots);
    };

    createDots();

    const animateDots = () => {
      //const tl = gsap.timeline({ repeat: -1 }); // Infinite loop

      for (let i = 0; i < dotRefs.current.length; i++) {
        gsap.to(dotRefs.current[i], {
          duration: Math.floor(Math.random() * 20) + 14, 
          x: window.innerWidth,
          ease: "linear",
          repeat:-1,
          // onComplete: () => {
          //   dotRefs.style.left = '0px';
          // },
          delay: i / 8, // Add a small delay to stagger animations
        });
      }
    };

    setTimeout(() => {
      animateDots();
    }, 500);

    // // Clean up the animation after a certain duration (adjust this as needed)
    // const animationDuration = 20000;
    // setTimeout(() => {
    //   setDots([]);
    // }, animationDuration);
  }, []);

  return (
    <div className="h-screen w-full absolute overflow-hidden z-[1] top-0">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="bg-[#ffffff] rounded-full absolute dot"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: `${dot.top}px`,
            left: "-10px",
          }}
          ref={(ref) => (dotRefs.current[index] = ref)}
        ></div>
      ))}
    </div>
  );
};

export default AmongUsBackground;

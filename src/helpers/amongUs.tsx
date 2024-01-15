import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const AmongUsBackground: React.FC = () => {
  const [dots, setDots] = useState<{ size: number; top: number }[]>([]);
  const dotRefs = useRef<HTMLDivElement[]>([]);
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
      const newDots: { size: number; top: number }[] = [];
      for (let i = 0; i < amountOfDots; i++) {
        const dot = generateRandomDot();
        newDots.push(dot);
      }
      setDots(newDots);
    };

    createDots();

    const stopAnimations = () => {

      for (let i = 0; i < dotRefs.current.length; i++) {
        gsap.killTweensOf(dotRefs.current[i]);
        gsap.to(dotRefs.current[i], {
          duration:0.001,
          x:-50,
          onComplete:() =>{
            animateDots();
          }
        });
      }

    }

    window.addEventListener('resize', stopAnimations);


    const animateDots = () => {
      for (let i = 0; i < dotRefs.current.length; i++) {
        gsap.to(dotRefs.current[i], {
          duration: Math.floor(Math.random() * 20) + 14,
          x: window.innerWidth,
          ease: "linear",
          repeat: -1,
          delay: i / 8,
        });
      }
    };

    setTimeout(() => {
      animateDots();
    }, 500);
    return () => {
      window.removeEventListener('resize', stopAnimations);
    };
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
          ref={(ref) => (dotRefs.current[index] = ref as HTMLDivElement)}
        ></div>
      ))}
    </div>
  );
};

export default AmongUsBackground;

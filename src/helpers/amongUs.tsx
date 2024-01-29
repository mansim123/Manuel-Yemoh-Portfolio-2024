import React, { useEffect, useState, useRef } from "react";
import gsap, { TweenLite } from "gsap";

interface AmongUsBackgroundProps {
  dotRefs: React.MutableRefObject<HTMLDivElement[]>;
  dotsAnimation: React.MutableRefObject<TweenLite[]>;
  amongUsBackgroundRef: React.MutableRefObject<any>;
}

const AmongUsBackground: React.FC<AmongUsBackgroundProps> = ({
  dotRefs,
  dotsAnimation,
  amongUsBackgroundRef,
}) => {
  const [dots, setDots] = useState<{ size: number; top: number }[]>([]);
  const aboutUsCont = useRef<HTMLDivElement>(null);
  const amountOfDots = 100;

  const [aboutUsContHeight, setAboutUsContHeight] = useState<number>(0);
  const [allowResize, setAllowResize] = useState<boolean>(false);

  useEffect(() => {
    let previousWidth = window.innerWidth;

    // Window resize function
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth !== previousWidth && allowResize === true) {
        initAnimation();
      }
      else {
      }
      previousWidth = currentWidth;
    };

    const initAnimation = () => {
      resetDotPositions(dotRefs, dotsAnimation.current);
      stopAnimations();
      animateDots(dotRefs, dotsAnimation.current);
    };

    // Function to call initAnimation
    const callInitAnimation = () => {
      initAnimation();
      setAllowResize(true);
    };

    const animateDots = (
      dotRefs: React.MutableRefObject<HTMLDivElement[]>,
      dotsAnimation: TweenLite[]
    ) => {
      for (let i = 0; i < dotRefs.current.length; i++) {
        const dot = dotRefs.current[i];
        const animation = gsap.to(dot, {
          duration: Math.floor(Math.random() * 16) + 12,
          x: window.innerWidth,
          ease: "linear",
          repeat: -1,
          delay: i / 8,
        });
        dotsAnimation.push(animation);
      }
    };

    // Function to reset positions of dots
    const resetDotPositions = (
      dotRefs: React.MutableRefObject<HTMLDivElement[]>,
      dotsAnimation: TweenLite[]
    ) => {
      dotsAnimation.forEach((animation, index) => {
        const dot = dotRefs.current[index];
        const newTop = Math.floor(Math.random() * aboutUsContHeight);
        animation.kill();
        gsap.to(dot, {
          duration: 0.25,
          opacity: 0,
          onComplete: () => {
            gsap.set(dot, { x: -10, top: newTop, opacity: 1 });
          },
        });
      });
    };

    // Generating random numbers for the dots
    const generateRandomDot = () => {
      const size = Math.floor(Math.random() * 6) + 2;
      const top = Math.floor(Math.random() * aboutUsContHeight);
      const dot = {
        size,
        top,
      };
      return dot;
    };

    // Creating the dots
    const createDots = () => {
      const newDots: { size: number; top: number }[] = [];
      for (let i = 0; i < amountOfDots; i++) {
        const dot = generateRandomDot();
        newDots.push(dot);
      }
      setDots(newDots);
    };

    // Function to stop all dot animations
    const stopAnimations = () => {
      dotsAnimation.current.forEach((animation) => {
        animation.kill();
      });
      dotsAnimation.current = [];
    };

    if (aboutUsCont.current) {
      setAboutUsContHeight(aboutUsCont.current.clientHeight);
    }

    stopAnimations();
    createDots();

    window.addEventListener("resize", handleResize);

        // Function to call initAnimation
        const callStopAnimation = () => {
          setAllowResize(false);
          resetDotPositions(dotRefs, dotsAnimation.current);
          stopAnimations();
        };
    
        // Pass callInitAnimation and callStopAnimation to the parent component through the ref
        amongUsBackgroundRef.current = {
          callInitAnimation,
          callStopAnimation,
        };

    return () => {
      window.removeEventListener("resize", handleResize);
      stopAnimations();
      createDots();
    };
  }, [
    dotRefs,
    dotsAnimation,
    amongUsBackgroundRef,
    aboutUsContHeight,
    allowResize,
  ]);

  return (
    <div
      ref={aboutUsCont}
      className="h-full w-full absolute overflow-hidden z-[1] top-0"
    >
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

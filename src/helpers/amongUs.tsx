import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface AmongUsBackgroundProps {
  dotRefs: React.MutableRefObject<HTMLDivElement[]>; 
  dotsAnimation: React.MutableRefObject<TweenLite[]>; 
  amongUsBackgroundRef: React.MutableRefObject<any>; // Define the prop
}

const AmongUsBackground: React.FC<AmongUsBackgroundProps> = ({ dotRefs, dotsAnimation, amongUsBackgroundRef  }) => {
  const [dots, setDots] = useState<{ size: number; top: number }[]>([]);
  const aboutUsCont = useRef<HTMLDivElement>(null);
  const amountOfDots = 100;
  
  let previousWidth = window.innerWidth;
  const [aboutUsContHeight, setAboutUsContHeight] = useState<number>(0);
  const [allowResize, setAllowResize] = useState<boolean>(false);

  useEffect(() => {
    if (aboutUsCont.current) {
      setAboutUsContHeight(aboutUsCont.current?.clientHeight ?? 0);
    }

    const initAnimation = () => {

      resetDotPositions(dotRefs, dotsAnimation.current); // Reset dot positions when width changes
      stopAnimations();
      animateDots(dotRefs, dotsAnimation.current);

    }

    // Function to call initAnimation
    const callInitAnimation = () => {
      // Use the ref to call initAnimation in the child component
      initAnimation();
      setAllowResize(true);
    };

    // Function to call initAnimation
    const callStopAnimation = () => {
      // Use the ref to call initAnimation in the child component
      setAllowResize(false);
      resetDotPositions(dotRefs, dotsAnimation.current); // Reset dot positions when width changes
      stopAnimations();
    };

    // Pass callInitAnimation to the parent component through the ref
    amongUsBackgroundRef.current = {
      callInitAnimation,
      callStopAnimation
    };

    const animateDots = (dotRefs: React.MutableRefObject<HTMLDivElement[]>, dotsAnimation: TweenLite[]) => {
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
    const resetDotPositions = (dotRefs: React.MutableRefObject<HTMLDivElement[]>, dotsAnimation: TweenLite[]) => {
      dotsAnimation.forEach((animation, index) => {
        const dot = dotRefs.current[index];
        const newTop = Math.floor(Math.random() * aboutUsContHeight);
        animation.kill();
        gsap.to(dot,{duration:0.25,opacity:0,onComplete: () => {
          gsap.set(dot, { x: -10, top: newTop,opacity:1 });
        }})
        
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

    // Animating the dots from the left of the screen to the right-hand side
   

    // Starting function for creating the dots
    createDots();

    // Window resize function
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth !== previousWidth && allowResize === true) {

        initAnimation();
      }
      previousWidth = currentWidth;
    }

    window.addEventListener("resize", handleResize);

    // setTimeout(() => {
    //   // Waiting 0.5 seconds before animating the dots (give the DOM time to catch up)
    //   initAnimation();
    // }, 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      stopAnimations(); // Clean up animations on component unmount
    };
  }, [aboutUsContHeight]);

  return (
    <div ref={aboutUsCont} className="h-full w-full absolute overflow-hidden z-[1] top-0">
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

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Preloader(props) {
  const percentageRef = useRef(null);
  const percentageRef2 = useRef(null);
  const whitePreloadBg = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set([whitePreloadBg.current], {
      height: 0,
      transformOrigin: "bottom center",
    });

    tl.to([percentageRef.current, percentageRef2.current], {
      duration: props.PreLoaderDuration,
      innerText: "100%",
      roundProps: { innerText: 1 },
      ease: "power1.out",
    }).to(
      [whitePreloadBg.current],
      {
        duration: props.PreLoaderDuration,
        height: "100%",
        ease: "power1.out",
        transformOrigin: "bottom center",
      },
      0
    );

    // Simulate page loading (You can replace this with your actual loading logic)
    setTimeout(() => {

      tl.to(".preloader", { opacity: 0, display: "none", duration: 0.5 });
    }, props.PreLoaderDuration * 1000); // Adjust the delay to match your loading time
  }, [props.PreLoaderDuration]);

  return (
    <div className="absolute inset-0 flex justify-center items-center top-[-4rem] preloader">
      <h3
        ref={percentageRef}
        className={`font-Roboto font-black xs:leading-[1.2] xs:text-[4rem] md:text-[6rem] lg:text-[8rem] xxl:text-[11rem] text-center text-[#ffffff] absolute z-10`}
      >
        0%
      </h3>
      <h3
        ref={percentageRef2}
        className={`font-Roboto font-black xs:leading-[1.2] xs:text-[4rem] md:text-[6rem] lg:text-[8rem] xxl:text-[11rem] text-center text-[#000000] absolute z-10`}
      >
        0%
      </h3>
      <div
        ref={whitePreloadBg}
        className="bg-white h-0 absolute top-0 left-0 w-full"
      ></div>
    </div>
  );
}

export default Preloader;

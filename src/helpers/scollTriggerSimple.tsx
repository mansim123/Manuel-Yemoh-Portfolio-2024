import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ScrollTriggerSimple = (
  whichDistanceY: number,
  whichDistanceX: number,
  startPos: string,
  bottomPos: string
) => {
  const nodeRef = useRef<HTMLDivElement>(null); // Specify the type as HTMLDivElement

  useEffect(() => {
    if (nodeRef.current) {
      gsap.from(nodeRef.current, {
        scrollTrigger: {
          trigger: nodeRef.current,
          toggleActions: "play none none none",
          start: startPos,
          end: bottomPos,
        },
        y: whichDistanceY,
        x: whichDistanceX,
        duration: 1,
        autoAlpha: 1,
        markers:true,
      });
    }
  }, [whichDistanceY, whichDistanceX, startPos, bottomPos]);

  return { ref: nodeRef };
};

export default ScrollTriggerSimple;

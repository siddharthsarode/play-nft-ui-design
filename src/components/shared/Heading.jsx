import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Heading = ({ children, className }) => {
  const h2Ref = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(h2Ref.current, {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, h2Ref);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);
  return (
    <h2
      ref={h2Ref}
      className={`font-sora mb-8 text-center text-4xl font-medium tracking-tight text-white ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;

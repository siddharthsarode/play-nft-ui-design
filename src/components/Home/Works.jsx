import React, { useEffect, useRef } from "react";
import Heading from "../shared/Heading";
import { FaHeart } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const worksList = [
  { title: "Abstract", items: "23 Items", src: "/images/works/1.jpg" },
  { title: "3D Art", items: "43 Items", src: "/images/works/2.jpg" },
  { title: "Modern Art", items: "40 Items", src: "/images/works/3.jpg" },
  { title: "Games", items: "20 Items", src: "/images/works/4.jpg" },
  { title: "Gralfiti", items: "13 Items", src: "/images/works/5.jpg" },
  { title: "Watercolor", items: "30 Items", src: "/images/works/6.jpg" },
];

const Works = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Clear previous refs
    cardsRef.current = cardsRef.current.slice(0, worksList.length);

    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      // Mobile: animate cards one by one as they scroll into view
      cardsRef.current.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, filter: "blur(5px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    });

    mm.add("(min-width: 769px)", () => {
      // Desktop: stagger animation for all cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50, filter: "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".works-container",
            start: "top 80%",
          },
        },
      );
    });

    return () => mm.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="relative w-full overflow-x-hidden px-4 pb-14">
      <Heading>Explore Artworks</Heading>
      <div className="works-container z-40 mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {worksList.map((work, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="border-pink card-item relative w-full rounded-lg border-1 shadow-xl"
          >
            <img
              src={work.src}
              className="h-52 w-full rounded-tl-lg rounded-tr-lg object-cover"
            />
            <div className="font-poppins from-blue flex w-full items-center justify-between rounded-br-lg rounded-bl-lg bg-gradient-to-l to-purple-950 px-5">
              <div className="flex flex-col">
                <span className="font-sora text-lg text-white">
                  {work.title}
                </span>
              </div>
              <div className="flex flex-col">
                <small className="text-white">2.45 ETM</small>
                <p className="font-sora flex items-center gap-1 text-lg text-white">
                  <FaHeart className="text-blue" />
                  50K
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blue Effects */}
      <div
        className="bg-purple/50 absolute -right-32 bottom-30 hidden h-96 w-52 rounded-full blur-2xl lg:block"
        style={{
          boxShadow: "0 0 200px 100px rgba(128, 0, 255, 0.4)",
        }}
      ></div>
    </section>
  );
};

export default Works;

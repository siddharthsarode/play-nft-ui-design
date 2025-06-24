import React, { useEffect, useRef } from "react";
import Button from "../ui/Button";
import { IoIosVideocam } from "react-icons/io";
import Avatars from "../ui/Avatars";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });
      gsap.from(".hero-img", {
        opacity: 0,
        blur: "10px",
        scale: 0.9,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
      });
    }, heroRef);

    console.log(ctx);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section className="bg-deep-navy relative overflow-x-hidden" ref={heroRef}>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 pt-28 pb-20 text-white md:flex-row lg:items-center lg:gap-40">
        {/* Left Side */}
        <div className="max-w-xl space-y-6">
          <h1 className="hero-item font-sora text-[2.5rem] leading-12 font-medium tracking-tighter text-white md:text-4xl lg:text-7xl lg:leading-20">
            Discover, Collect and Sell Dope Art and NFTs
          </h1>
          <p className="hero-item text-light font-poppins">
            The world’s largest digital marketplace for crypto collectibles and
            non-fungible tokens (NFTs)
          </p>
          <div className="hero-item mt-5 flex gap-2 md:mt-0 md:gap-4">
            <Button>Discover</Button>
            <button className="border-blue font-poppins cursor-pointer rounded-lg border px-6 py-2">
              Create
            </button>
            <div className="flex items-center gap-2 md:ms-5">
              <IoIosVideocam className="text-purple" />
              <span className="font-poppins text-light cursor-pointer text-xs underline md:text-sm">
                Watch a video
              </span>
            </div>
          </div>

          <div className="hero-item from-blue to-purple border-neon-pink mt-16 flex w-fit gap-14 rounded-lg border bg-gradient-to-l px-5 py-1 text-sm md:mt-10">
            <div className="flex flex-col items-center justify-center">
              <span className="font-sora text-xl">27K +</span>
              <span className="font-poppins text-light text-sm">Art works</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-sora text-xl">20K +</span>
              <span className="font-poppins text-light text-sm">Auctions</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-sora text-xl">7K +</span>
              <span className="font-poppins text-light text-sm">Artists</span>
            </div>
          </div>

          <div className="hero-item flex items-center gap-10">
            <div className="ps-16 pt-5">
              <Avatars />
            </div>
            <div className="flex flex-col">
              <span className="font-sora text-xl text-white">40k +</span>
              <span className="text-light font-poppins text-xs">
                Active Users
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-img relative w-full max-w-md rounded-xl shadow-xl lg:h-[38rem]">
          <img
            src="/images/hero.jpg"
            className="h-full w-full rounded-xl object-cover"
          />
          <div className="bg-purple/60 font-poppins absolute bottom-0 left-0 flex w-full justify-between rounded-br-xl rounded-bl-xl bg-gradient-to-l px-10 py-3">
            <div className="flex flex-col gap-2">
              <small className="text-pink">Ending in:</small>
              <p className="text-sm text-white">1h 20m 30s</p>
              <p className="from-pink to-purple font-poppins cursor-pointer rounded-lg bg-gradient-to-l px-4 py-1 text-xs text-white">
                Place a Bid
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <small className="text-white">Highest Bid</small>
              <span className="text-sm text-white">32.4 ETH</span>
              <p className="bg-neon-pink font-poppins cursor-pointer rounded-lg px-4 py-1 text-xs text-white">
                Purchase
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blur effect */}
      <div
        className="bg-purple/50 absolute -right-24 bottom-1 z-40 h-96 w-52 rounded-full blur-2xl"
        style={{
          boxShadow: "0 0 200px 100px rgba(128, 0, 255, 0.4)",
        }}
      ></div>
      <div
        className="bg-purple/50 absolute top-24 -left-56 z-40 h-56 w-52 rounded-full blur-2xl md:-left-40 lg:-left-36 lg:h-96"
        style={{
          boxShadow: "0 0 200px 100px rgba(128, 0, 255, 0.4)",
        }}
      ></div>
    </section>
  );
};

export default HeroSection;

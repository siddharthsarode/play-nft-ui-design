import React from "react";
import Heading from "../shared/Heading";
import Button from "../ui/Button";

const JoinUs = () => {
  return (
    <section className="w-full px-4 py-14">
      <div
        className="border-pink mx-auto flex max-w-5xl flex-col items-center justify-center border-1 bg-gradient-to-l from-blue-700 to-purple-950 p-12 lg:px-20 lg:py-14"
        style={{
          borderTopLeftRadius: "9rem",
          borderBottomRightRadius: "9rem",
        }}
      >
        <div className="md:w-sm lg:w-md">
          <Heading className={"text-xl lg:text-4xl"}>
            Join Us to Create Sell and Collect NFTs Digital Art
          </Heading>
        </div>
        <Button>Join Community</Button>
      </div>
    </section>
  );
};

export default JoinUs;

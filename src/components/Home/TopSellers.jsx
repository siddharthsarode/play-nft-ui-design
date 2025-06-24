import Marquee from "react-fast-marquee";
import Heading from "../shared/Heading";

const avatars = [
  {
    name: "Alice Johnson",
    value: "345 ETH",
    src: "/images/avatars/avatar_0_0.jpg",
  },
  {
    name: "Brian Lee",
    value: "345 ETH",
    src: "/images/avatars/avatar_0_1.jpg",
  },
  {
    name: "Carla Smith",
    value: "345 ETH",
    src: "/images/avatars/avatar_0_2.jpg",
  },
  {
    name: "David Kim",
    value: "345 ETH",
    src: "/images/avatars/avatar_1_0.jpg",
  },
  {
    name: "Ella Brown",
    value: "345 ETH",
    src: "/images/avatars/avatar_1_1.jpg",
  },
  {
    name: "Felix Turner",
    value: "345 ETH",
    src: "/images/avatars/avatar_1_2.jpg",
  },
  {
    name: "Grace Liu",
    value: "345 ETH",
    src: "/images/avatars/avatar_1_3.jpg",
  },
  {
    name: "Henry Adams",
    value: "345 ETH",
    src: "/images/avatars/avatar_2_0.jpg",
  },
  {
    name: "Isabella Green",
    value: "345 ETH",
    src: "/images/avatars/avatar_2_1.jpg",
  },
  {
    name: "Jack Wilson",
    value: "345 ETH",
    src: "/images/avatars/avatar_3_1.jpg",
  },
  {
    name: "Kylie Zhang",
    value: "345 ETH",
    src: "/images/avatars/avatar_3_2.jpg",
  },
  {
    name: "Liam Davis",
    value: "345 ETH",
    src: "/images/avatars/avatar_3_3.jpg",
  },
];

const TopSellers = () => (
  <section className="text-white">
    <Heading>Top Sellers</Heading>
    <div className="relative py-14">
      {/* Left side mark Effect */}
      <div className="pointer-events-none absolute top-0 left-0 z-30 h-full w-52 bg-gradient-to-r from-black/70 to-transparent" />
      {/* Right side mark Effect */}
      <div className="pointer-events-none absolute top-0 right-0 z-30 h-full w-52 bg-gradient-to-l from-black/70 to-transparent" />

      <div>
        <Marquee
          gradient={false}
          speed={20}
          direction="left"
          pauseOnHover={false}
        >
          {avatars.slice(0, 6).map((avatar, index) => (
            <div
              key={index}
              className="border-pink mx-3 flex gap-4 rounded-lg border-1 bg-gradient-to-l from-blue-800 to-purple-950 px-4 py-2 transition-colors md:w-xs"
            >
              <img
                src={avatar.src}
                alt={avatar.name}
                className="border-pink h-16 w-16 rounded-xl border-2 object-cover"
              />
              <div>
                <p className="font-poppins text-lg text-white/90">
                  {avatar.name}
                </p>
                <p className="text-pink text-sm">{avatar.value}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="mt-5">
        <Marquee
          gradient={false}
          speed={20}
          pauseOnHover={false}
          direction="right"
        >
          {avatars.slice(6).map((avatar, index) => (
            <div
              key={index}
              className="border-pink mx-3 flex gap-4 rounded-lg border-1 bg-gradient-to-l from-blue-800 to-purple-950 px-4 py-2 transition-colors md:w-xs"
            >
              <img
                src={avatar.src}
                alt={avatar.name}
                className="border-pink h-16 w-16 rounded-xl border-2 object-cover"
              />
              <div>
                <p className="font-poppins text-lg text-white/90">
                  {avatar.name}
                </p>
                <p className="text-pink text-sm">{avatar.value}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  </section>
);

export default TopSellers;

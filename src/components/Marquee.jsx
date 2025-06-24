// MarqueeComponent.jsx
import Marquee from "react-fast-marquee";

const brandLogos = [
  { name: "Revolut", src: "/images/logos/Revolut.png" },
  { name: "Binance", src: "/images/logos/Binance.png" },
  { name: "Coinbase", src: "/images/logos/Coinbase.png" },
  { name: "Stripe", src: "/images/logos/Stripe.png" },
  { name: "Robinhood", src: "/images/logos/Robinhood.png" },
  { name: "PayPal", src: "/images/logos/PayPal.png" },
  { name: "Kraken", src: "/images/logos/Kraken.png" },
  { name: "Cash App", src: "/images/logos/CashApp.png" },
];

const MarqueeComponent = () => {
  const items = ["React", "Tailwind", "JavaScript", "HTML", "CSS", "Node.js"];

  return (
    <div className="bg-purple relative py-4">
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={false}
        className="text-white"
      >
        {brandLogos.map((brand, index) => (
          <p
            className={`mx-16 ${index % 2 == 0 ? "font-sans font-thin uppercase" : "font-mono font-medium capitalize"} text-2xl text-white`}
            key={index}
          >
            {brand.name}
          </p>
        ))}
      </Marquee>

      {/* Left side mark Effect */}
      <div className="pointer-events-none absolute top-0 left-0 z-30 h-full w-14 bg-gradient-to-r from-black/70 to-transparent lg:w-96" />
      {/* Right side mark Effect */}
      <div className="pointer-events-none absolute top-0 right-0 z-30 h-full w-14 bg-gradient-to-l from-black/70 to-transparent lg:w-96" />
    </div>
  );
};

export default MarqueeComponent;

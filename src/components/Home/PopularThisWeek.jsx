import PopularSlider from "../PopularSlider";
import Heading from "../shared/Heading";

const PopularThisWeek = () => {
  return (
    <section className="overflow-x-hidden py-18">
      <Heading>Popular this week</Heading>

      <div className="relative pt-10">
        <PopularSlider />
        <div className="from-deep-navy/70 pointer-events-none absolute top-0 left-0 z-30 hidden h-full w-32 bg-gradient-to-r to-transparent lg:block" />
        {/* Right side mark Effect */}
        <div className="from-deep-navy/70 pointer-events-none absolute top-0 right-0 z-30 hidden h-full w-32 bg-gradient-to-l to-transparent lg:block" />
      </div>
    </section>
  );
};

export default PopularThisWeek;

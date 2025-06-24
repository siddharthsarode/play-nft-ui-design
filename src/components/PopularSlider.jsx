import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sliderStyle.css";
import { FaHeart } from "react-icons/fa";

const PopularSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "190px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px (tablets)
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640, // Below 640px (mobile)
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };
  const slides = [
    {
      title: "Digital Decade",
      author: "by Anthony gargasz",
      src: "/images/slide/s1.webp",
    },
    {
      title: "Decade off",
      author: "by Anthony gargasz",
      src: "/images/slide/s2.webp",
    },
    {
      title: "Hories of Winter",
      author: "by Anthony gargasz",
      src: "/images/slide/s3.webp",
    },
    {
      title: "Winter Jarmz",
      author: "by Anthon Tudicco",
      src: "/images/slide/s4.webp",
    },
    {
      title: "Cold Winter",
      author: "by Anthony gargasz",
      src: "/images/slide/s5.webp",
    },
  ];

  return (
    <div className="slider-container px-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item p-10">
            <div className="relative h-[26rem] w-full max-w-sm rounded-xl shadow-xl">
              <img
                src={slide.src}
                className="h-full w-full rounded-xl object-cover"
              />
              <div className="bg-purple/70 font-poppins absolute bottom-0 left-0 flex w-full justify-between rounded-br-xl rounded-bl-xl bg-gradient-to-l px-5 py-5">
                <div className="flex flex-col">
                  <span className="font-sora text-lg text-white">
                    {slide.title}
                  </span>
                  <span className="text-light text-xs">{slide.author}</span>
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularSlider;

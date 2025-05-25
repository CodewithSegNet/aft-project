import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Img1 from "../assets/bell.png";
import Img2 from "../assets/one.png";
import Img3 from "../assets/two.png";
import Img4 from "../assets/three.png";
import Img5 from "../assets/four.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const ThirdLayer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,    
    slidesToScroll: 1,     
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
    ]
  };

  return (
    <motion.section 
      ref={ref}
      className="overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="my-[76px]">
        <div className="flex">
          <div className="max-w-[669px] md:pl-[27px] pb-[46px]">
            <h2 className="text-[42px] text-white md:text-[64px] pb-[8px] leading-[50px] md:leading-[70px] font-normal">
              Never <span className="text-secondary "> Miss a Moment </span> That Matters
            </h2>
            <p className="text-base font-normal text-white ">
              Get real-time notifications that keep you effortlessly connected to your friends, conversations, and community wherever you are.
            </p>
          </div>
          <div>
            <img src={Img1} className="h-[69px] w-[200px] md:w-[64px] " alt="" />
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-2">
          <Slider {...settings}>
            {[Img2, Img3, Img4, Img5].map((img, i) => (
              <div key={i} className="px-2">
                <img src={img} alt={`Slide ${i + 1}`} className="w-full h-auto object-contain " />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default ThirdLayer;

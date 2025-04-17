import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import bg from "../../assets/home-bg/section5/section5-bg.jpg";
import logo from "../../assets/navbar/navbar-logo.png";

const testimonials = [
  {
    text: "The house came with everything we needed for our stay and they even welcomed us to the house with a tour upon our arrival. Would stay here again and highly recommend.",
    name: " Marydette, Guest at Yellowbird Villa",
  },
  {
    text: "I had an incredible stay with unbeatable views of Sapphire Beach. Being right on the beach was a game-changer. The place was spacious and perfectly located near Red Hook.",
    name: " Grant, Guest at Lovenlund Bay Villa",
  },
  {
    text: "We enjoyed our stay in this unique, beautiful home. The views were outstanding. We could have stayed at the house the whole week without leaving.",
    name: "Jodi, Guest at Lovenlund Bay Villa",
  },
  {
    text: "It was so spacious and had all of the household basics we needed to cook and clean. It was the best experience we could have asked for!",
    name: "Daniel, Guest at Villa Blanca",
  },
];

export default function Testimonials() {
  const contentRefs = useRef([]);
  const prevIndexRef = useRef(0);

  const animateCrossFade = (prevIndex, currentIndex) => {
    const prevEl = contentRefs.current[prevIndex];
    const currentEl = contentRefs.current[currentIndex];

    if (prevEl && currentEl) {
      gsap
        .timeline()
        .to(prevEl, {
          opacity: 0.9,
          duration: 1,
          ease: "power1.out",
        })
        .set(currentEl, {
          opacity: 0,
        })
        .to(
          currentEl,
          {
            opacity: 1,
            duration: 2,
            ease: "power1.out",
          },
          "-=1"
        );
    }
  };

  return (
    <div className="relative w-full">
      <div className="h-[800px]">
        <img
          src={bg}
          className="fixed top-0 left-0 object-cover will-change-transform z-[-1]"
        />
      </div>
      <div className="grid grid-cols-12 bg-white">
        {/* LEFT: Description */}
        <div className="col-span-6 flex items-start flex-col pt-[100px] pl-[200px]">
          <h2 className="text-[60px] font-playfair tracking-wider leading-none">
            Your Dream
            <br /> Getaway Awaits.
          </h2>
          <p className="text-[20px] leading-[2] font-playfair  pt-[40px] pr-[200px] tracking-wide">
            White sand beneath your feet. A warm breeze blowing through your
            hair. An underwater wonderland waiting to be explored. There’s a
            little bit of magic in these islands, and it’s been drawing visitors
            to the shores for hundreds of years. Let yourself get swept away by
            the unparalleled natural beauty, rich history and welcoming culture
            of the U.S. Virgin Islands.
          </p>
        </div>

        {/* RIGHT: Testimonials */}
        <div className="absolute -top-[200px] col-span-4 text-white bg-primary p-[50px] shadow-md relative overflow-hidden flex flex-col justify-center items-center">
          <h2 className="text-[40px] font-playfair tracking-wider leading-none">
            TESTIMONIALS
          </h2>
          <img className="section5-logo w-[300px] m-[80px]" src={logo} />
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{ delay: 700000, disableOnInteraction: false }}
            navigation
            allowTouchMove={false}
            onSlideChange={(swiper) => {
              animateCrossFade(prevIndexRef.current, swiper.realIndex);
              prevIndexRef.current = swiper.realIndex;
            }}
            className="w-full"
          >
            {testimonials.map((review, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="opacity-0 transition-opacity duration-300"
                >
                  <p className="text-white text-[22px] italic mx-[60px] text-center">
                    "{review.text}"
                  </p>
                  <p className="text-white text-[20px] italic m-[60px] text-end">
                    — {review.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}

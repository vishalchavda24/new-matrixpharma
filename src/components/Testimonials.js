"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: "Expertwise transformed our online presence with a stunning website and SEO strategy!",
    name: "John Doe",
    bgColor: "#000",
    spanColors: ["bg-red-400", "bg-yellow-300", "bg-blue-300", "bg-green-400", "bg-pink-400", "bg-purple-300"],
  },
  {
    id: 2,
    text: "Their team provided an outstanding branding solution that truly represents our business.",
    name: "Sarah Smith",
    bgColor: "bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC]",
    spanColors: ["bg-indigo-400", "bg-orange-300", "bg-teal-300", "bg-gray-400", "bg-purple-400", "bg-blue-300"],
  },
  {
    id: 3,
    text: "The email marketing strategy they developed helped us gain more customers effortlessly.",
    name: "Michael Johnson",
    bgColor: "bg-gradient-to-r from-[#A1C4FD] to-[#C2E9FB]",
    spanColors: ["bg-yellow-500", "bg-red-300", "bg-cyan-400", "bg-lime-500", "bg-rose-300", "bg-violet-400"],
  },
  {
    id: 4,
    text: "A seamless experience from start to finish. Highly recommended!",
    name: "Emily Brown",
    bgColor: "bg-gradient-to-r from-[#FAD961] to-[#F76B1C]",
    spanColors: ["bg-gray-500", "bg-blue-400", "bg-pink-500", "bg-amber-400", "bg-green-300", "bg-purple-500"],
  },
  {
    id: 4,
    text: "A seamless experience from start to finish. Highly recommended!",
    name: "Emily Brown",
    bgColor: "bg-gradient-to-r from-[#FAD961] to-[#F76B1C]",
    spanColors: ["bg-gray-500", "bg-blue-400", "bg-pink-500", "bg-amber-400", "bg-green-300", "bg-purple-500"],
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-[#fffded] py-10">
      <div className="max-w-6xl mx-auto px-5">
        <Swiper
          slidesPerView={2.3}
          spaceBetween={20}
          // pagination={{
          //   clickable: true,
          //   el: ".swiper-pagination",
          //   renderBullet: (index, className) =>
          //     `<span class="${className}" aria-label="Go to testimonial ${index + 1}">[${index + 1}]</span>`,
          // }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1.5, spaceBetween: 15 },
            1024: { slidesPerView: 2.3, spaceBetween: 20 },
          }}
          modules={[Pagination]}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div className={`relative p-6 shadow-md rounded-xl text-gray-800 ${testimonial.bgColor} overflow-hidden`}>
                {/* Floating Decorative Span Elements */}
                {testimonial.spanColors.map((color, i) => (
                  <span
                    key={i}
                    className={`absolute w-6 h-6 rounded-full opacity-40 ${color}`}
                    style={{
                      top: `${Math.random() * 80}%`,
                      left: `${Math.random() * 80}%`,
                    }}
                  ></span>
                ))}

                {/* Testimonial Content */}
                <p className="text-lg font-medium relative">{testimonial.text}</p>
                <h4 className="mt-4 font-semibold text-gray-900 relative">{testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination flex justify-center mt-4"></div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

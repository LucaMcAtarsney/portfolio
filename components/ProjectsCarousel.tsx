"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Project {
  title: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "TUI File Explorer",
    image: "/images/project1.png",
    description: "Terminal ui based file explorer",
  },
  {
    title: "Aldi Webscraper",
    image: "/images/project2.png",
    description: "Scrapes aldi food products for shopping lists",
  },
  {
    title: "Music Visualiser",
    image: "/images/project3.png",
    description: "Visuals that react to music",
  },
  {
    title: "Graphics Library",
    image: "/images/project1.png",
    description: "Collection of 3D models",
  },
  {
    title: "Mycelium",
    image: "/images/project2.png",
    description: "Social Network for learning new things",
  },
  {
    title: "Fishland Saga",
    image: "/images/project3.png",
    description: "Fishing cosy game",
  },
];

export default function ProjectsCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-visible px-4">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides={true} // Ensures the center slide is always visible
        slidesPerView={3} // Always show 3 slides (1 center, 1 left, 1 right)
        spaceBetween={40}
        loop={false} // Enables looping
        navigation
        touchRatio={1.5}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="py-10"
      >
        {projects.map((p, i) => (
          <SwiperSlide
            key={i}
            className="w-72 sm:w-80 bg-white/10 backdrop-blur-md text-white rounded-xl p-4 flex flex-col items-center justify-center text-xl font-medium shadow-md transition duration-300 ease-in-out hover:bg-white hover:text-black hover:backdrop-blur-0"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* fade out side slides */
        .swiper-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.jpg";
import project7 from "../assets/images/project-7.jpg";
import project_person from "../assets/images/project_person.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Flappy Bird",
      github_link: "https://github.com/Talha-054/Flappy-Bird",
      live_link: "https://flappy-bird-talha.vercel.app/",
    },
    {
      img: project2,
      name: "Notify App",
      github_link: "https://github.com/Talha-054/Notify",
      live_link: "https://notify-free.vercel.app/",
    },
    {
      img: project3,
      name: "Analog Stopwatch",
      github_link: "https://github.com/Talha-054/Analog-Clock",
      live_link: "https://analog-stopwatch.vercel.app/",
    },
    {
      img: project4,
      name: "Currency Converter",
      github_link:
        "https://github.com/Talha-054/Currency-Converter",
      live_link: "https://currency-converter-talha.vercel.app/",
    },
    {
      img: project5,
      name: "Doodle Jump",
      github_link: "https://github.com/Talha-054/Doodle-jump",
      live_link: "https://doodle-jump-talha.vercel.app/",
    },
    {
      img: project6,
      name: "Pizza shop",
      github_link: "https://github.com/Talha-054/tailwind-project-2",
      live_link: "https://demo-pizza.vercel.app/",
    },
    {
      img: project7,
      name: "Mahabis clone",
      github_link: "https://github.com/Talha-054/tailwind-project",
      live_link: "https://mahabis-clone.vercel.app/",
    }
  ];
  return (
    <section id="projects" className="py-32 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;

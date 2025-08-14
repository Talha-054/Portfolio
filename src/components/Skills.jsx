import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { SiBabel } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiTauri } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      logo: <FaHtml5 />,
      level: "Expert",
      count: 100,
    },
    {
      logo: <RiTailwindCssFill />,
      level: "Expert",
      count: 100,
    },
    {
      logo: <FaReact />,
      level: "Expert",
      count: 100,
    },
    {
      logo: <SiNextdotjs />,
      level: "Expert",
      count: 100
    },
    {
      logo: <TbBrandRedux />,
      level: "Expert",
      count: 100,
    },
    {
      logo: <SiMui />,
      level: "Expert",
      count: 100,
    },
    {
      logo: <BiLogoPostgresql />,
      level: "Expert",
      count: 100,
    },
    {
      logo: <RiSupabaseFill />,
      level: "Expert",
      count: 100,
    },
    {
      logo: <FaGithub />,
      level: "Expert",
      count: 100,
    },
    {
      logo: <IoLogoFirebase />,
      level: "Advance",
      count: 80,
    },
    {
      logo: <SiMongodb />,
      level: "Advance",
      count: 80,
    },
    {
      logo: <FaNodeJs />,
      level: "Intermediate",
      count: 75,
    },
    {
      logo: <FaRust />,
      level: "Intermediate",
      count: 60,
    },
    {
      logo: [<SiBabel />, <SiJest />, <SiVite />, <SiWebpack />, <SiTauri />, <SiThreedotjs />, <SiTypescript />, <SiExpress />],
    },

  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => {
            return <div
              key={i}
              className={`border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 ${Array.isArray(skill.logo) ? "p-10" : "p-10"}  rounded-xl`}
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className={`${Array.isArray(skill.logo) ? "text-4xl" : "text-6xl "} gap-4 w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center flex-wrap group-hover:text-cyan-600`}>
                  {Array.isArray(skill.logo) ? (
                    skill.logo.map((Icon, idx) => (
                      Icon
                    ))
                  ) : (
                    skill.logo
                  )}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

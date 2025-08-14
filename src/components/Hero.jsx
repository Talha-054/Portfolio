import hero from "../assets/images/hero.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const socialMediaLinks = [
  {link: "https://github.com/Talha-054", icon: <FaGithub />},
  {link: "https://www.linkedin.com/in/muhammad-talha-84b3b32b2/", icon: <FaLinkedin />},
]

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Talha</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Full Stack Developer
          </h4>
          <a
            href="https://wa.me/923121500252?text=Hi%20Talha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-36 inline-block text-center"
          >
            Contact Me
          </a>
          <div className="mt-8 pl-2 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMediaLinks?.map((icon) => (
              <div
                key={icon.link}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.link}>{icon.icon}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section className="min-h-screen px-[9%] py-20 flex flex-col md:flex-row justify-center items-center gap-20 bg-black text-white">
      <div className="rounded-full overflow-hidden">
        <img src="main.jpg" alt="Soumboul Fall" className="w-80 md:w-96 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg" />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, It's <span className="text-primary">Soumboul Fall</span>
        </h1>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          I'm a <span className="text-primary">Full Stack MERN Developer</span>
        </h3>
        <p className="text-base md:text-lg mb-6">
          Développeur passionné, je conçois des applications performantes et scalables avec la stack MERN (MongoDB, Express, React, Node.js).
        </p>
        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/soumboulfall" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary border-2 border-primary rounded-full p-3 hover:bg-primary hover:text-black transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/soumboulfall2025" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary border-2 border-primary rounded-full p-3 hover:bg-primary hover:text-black transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://twitter.com/sfTheGeek" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary border-2 border-primary rounded-full p-3 hover:bg-primary hover:text-black transition"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

          <a
            href="https://www.instagram.com/sf_boie" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary border-2 border-primary rounded-full p-3 hover:bg-primary hover:text-black transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <a
          href="absamir2024@gmail.com"
          className="inline-block px-7 py-3 border-2 border-primary text-primary rounded-full font-semibold tracking-widest hover:bg-primary hover:text-black transition"
        >
          Hire me
        </a>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-[9%] py-4 flex justify-between items-center z-[100] bg-transparent mt-5">
      <Link to="/" className="text-3xl font-extrabold text-primary cursor-pointer transition-transform hover:scale-110">
        Soumboul Fall 
      </Link>
      <nav className="hidden md:flex">
        <Link to="/home" className="text-white text-lg font-medium ml-16 border-b-4 border-transparent hover:text-primary hover:border-primary transition">
          Home
        </Link>
        <Link to="/services" className="text-white text-lg font-medium ml-16 border-b-4 border-transparent hover:text-primary hover:border-primary transition">
          Services
        </Link>
        <Link to="/skills" className="text-white text-lg font-medium ml-16 border-b-4 border-transparent hover:text-primary hover:border-primary transition">
          Skills
        </Link>
        <Link to="/education" className="text-white text-lg font-medium ml-16 border-b-4 border-transparent hover:text-primary hover:border-primary transition">
          Education
        </Link>
        <Link to="/experience" className="text-white text-lg font-medium ml-16 border-b-4 border-transparent hover:text-primary hover:border-primary transition">
          Experience
        </Link>
        <Link to="/contact" className="text-white text-lg font-medium ml-16 border-b-4 border-transparent hover:text-primary hover:border-primary transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}

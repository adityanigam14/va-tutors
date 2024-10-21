import { Link } from "react-router-dom";
import logo from './imagery/logo.png';

export default function Navbar() {
  return (
    <nav className="flex justify-start items-center p-5 bg-blue-400 w-screen h-20 fixed lg:text-xl md:text-lg text-white">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="mr-3 mb-2 h-16 w-16"/> 
      </Link>
      <ul className="flex space-x-3">
        <li>
          <Link to="/" className="hidden sm:block">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link to="/team">
            Team
          </Link>
        </li>
        <li>
          <Link to="/partners">
            Partners
          </Link>
        </li>
        <li>
          <Link to="/classroom">
            Classroom
          </Link>
        </li>
      </ul>
    </nav>
  );
}
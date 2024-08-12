import { Link } from "react-router-dom";
import logo from './imagery/misc/logo.png';

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-5 bg-blue-400 w-screen h-auto fixed z-50">
      <Link to="/" className="flex items-center text-white text-xl mb-4 sm:mb-0">
        <img src={logo} alt="Logo" className="h-16 w-16" /> 
        <span className="hidden sm:block text-xl ml-2">Home</span>
      </Link>
      <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <li>
          <Link to="/services" className="text-white text-xl">
            Services
          </Link>
        </li>
        <li>
          <Link to="/team" className="text-white text-xl">
            Team
          </Link>
        </li>
        <li>
          <Link to="/partners" className="text-white text-xl">
            Partners
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="text-white text-xl">
            Feedback
          </Link>
        </li>
      </ul>
    </nav>
  );
}

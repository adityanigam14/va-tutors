import { Link } from "react-router-dom";
import logo from './logo.png';

export default function Navbar() {
  return (
    <nav className="flex justify-start items-center p-5 bg-blue-400 w-screen h-20 fixed">
      <Link to="/" className="flex items-center text-white text-xl mr-5">
        <img src={logo} alt="Logo" className="mr-2 mb-2 h-16 w-16" /> 
        <span className="hidden sm:block text-xl">Home</span>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/team" className="text-white text-xl">
            Our Team
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
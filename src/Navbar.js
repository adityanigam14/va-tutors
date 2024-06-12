import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-start items-center p-5 bg-emerald-500 w-screen h-16 fixed">
      <Link to="/" className="flex items-center text-white text-xl mr-5">
        <span className="hidden sm:block">VA Tutors</span>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/team" className="text-white">
            Our Team
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="text-white">
            Feedback
          </Link>
        </li>
      </ul>
    </nav>
  );
}
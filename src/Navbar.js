import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './imagery/misc/logo.png';
import { HiMenu, HiX } from 'react-icons/hi'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-5 bg-blue-400 w-screen h-20 fixed z-50">

      <Link to="/" className="flex items-center text-white text-xl mb-4 sm:mb-0">
        <img src={logo} alt="Logo" className="mr-2 mb-2 h-16 w-16" /> 
        <span className="hidden sm:block text-xl">Home</span>
      </Link>

      <div className="sm:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-blue-400 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <ul className="flex flex-col items-center space-y-4 p-10">
          <li>
            <Link to="/services" className="text-white text-xl" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/team" className="text-white text-xl" onClick={() => setIsOpen(false)}>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/partners" className="text-white text-xl" onClick={() => setIsOpen(false)}>
              Partners
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="text-white text-xl" onClick={() => setIsOpen(false)}>
              Feedback
            </Link>
          </li>
        </ul>
      </div>

      <ul className={`flex space-x-4 ${isOpen ? 'hidden' : 'block'} sm:block`}>
        <li>
          <Link to="/services" className="text-white text-xl">
            Services
          </Link>
        </li>
        <li>
          <Link to="/team" className="text-white text-xl">
            Our Team
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

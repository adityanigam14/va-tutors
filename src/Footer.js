import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-5 bg-blue-400 w-full h-20 lg:text-xl md:text-lg text-white">
      <div className="flex space-x-3">
        <Link to="https://www.instagram.com/va_tutors/" className="hover:text-gray-300">
          <FaInstagram className="h-10 w-10"/>
        </Link>
        <Link to="https://www.tiktok.com/@va_tutors" className="hover:text-gray-300">
          <FaTiktok className="h-10 w-10"/>
        </Link>
        <Link to="https://www.linkedin.com/company/va-tutors-nc/" className="hover:text-gray-300">
          <FaLinkedin className="h-10 w-10"/>
        </Link>
      </div>
      <div className="text-right text-lg sm:text-base md:text-base">
        <p>Contact us at</p>
        <a href="mailto:vatutorsusa@gmail.com" className="underline hover:text-gray-300">
          vatutorsusa@gmail.com
        </a>
      </div>
    </footer>
  );
}

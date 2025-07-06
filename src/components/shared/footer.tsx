import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-center py-6 border-t border-slate-200 text-sm text-gray-600">
      <p className="mb-3">
        © {new Date().getFullYear()} Anirban Das Joy. All rights reserved.
      </p>
      <div className="flex flex-col items-center space-y-3">
        {/* Social Links */}
        <div className="flex items-center space-x-2">
          <a
            href="https://linkedin.com/in/anirbandasjoy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="group flex items-center justify-center   rounded-full border-2 border-gray-300 hover:border-blue-600 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 p-2"
          >
            <FaLinkedin
              size={14}
              className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
            />
          </a>

          <a
            href="mailto:joy600508@gmail.com"
            aria-label="Send an email"
            className="group flex items-center justify-center   rounded-full border-2 border-gray-300 hover:border-red-500 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 p-2"
          >
            <FaEnvelope
              size={14}
              className="text-gray-600 group-hover:text-red-500 transition-colors duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

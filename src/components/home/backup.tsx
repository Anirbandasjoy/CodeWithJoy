"use client";

import Image from "next/image";
import React from "react";
import my_image from "@/../public/images/hellodev.jpeg";
import {
  FaFacebook,
  FaFileContract,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import GitHubCalendar from "react-github-calendar";

const Banner = () => {
  return (
    <div className="my-15   max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Profile Image */}
        <div className="w-32 h-32 border-8 rounded-full border-gray-100 overflow-hidden">
          <Image
            src={my_image}
            alt="My profile"
            width={128}
            height={128}
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        {/* Info Section */}
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">Joy Das</h1>
          <p className="text-gray-600 text-sm">Web Application Developer</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-2 text-zinc-700">
            <a href="https://github.com/Anirbandasjoy" target="_blank">
              <FaGithub className="text-2xl hover:text-black transition" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaFacebook className="text-2xl hover:text-blue-600 transition" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram className="text-2xl hover:text-pink-500 transition" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <FaYoutube className="text-2xl hover:text-red-600 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <button className="group cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-700 font-medium rounded-sm border border-slate-200 shadow hover:border-slate-300 hover:shadow-md hover:bg-slate-50 transition duration-300 focus:outline-none focus:ring-4 focus:ring-slate-200">
          <FiFileText className="w-4 h-4 text-slate-600 group-hover:text-slate-800 transition-colors" />
          <span className="text-sm">Download Resume</span>
          <BsArrowDown className="w-4 h-4 text-slate-500 group-hover:text-slate-700 group-hover:translate-y-1 transition-all duration-300" />
        </button>
        <button className="group cursor-pointer bg-zinc-800 text-slate-300 hover:text-slate-700 inline-flex items-center gap-2 px-4 py-2 font-medium rounded-sm border border-slate-200 shadow hover:border-slate-300 hover:shadow-md hover:bg-slate-50 transition duration-300 focus:outline-none focus:ring-4 focus:ring-slate-200">
          <FaFileContract className="w-4 h-4 text-slate-300 group-hover:text-slate-800 transition-colors" />
          <span className="text-sm">Contact me</span>
          <BsArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-700 group-hover:translate-x-1 transition-all duration-300" />
        </button>
      </div>

      {/* GitHub Activity Section */}
      <div className="mt-15 bg-gray-50 rounded-lg p-4">
        <h2 className="text-[17px] font-semibold text-slate-700 mb-4 text-center md:text-left">
          Github Contribution
        </h2>
        <div className="">
          <GitHubCalendar
            username="Anirbandasjoy"
            blockSize={window.innerWidth < 640 ? 12 : 11}
            blockMargin={3}
            // color="#4c1d95"
            fontSize={12}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

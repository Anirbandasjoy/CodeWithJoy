/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import my_image from "@/../public/images/hellodev.jpeg";
import {
  FaFacebook,
  FaFileContract,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaUsers,
  FaCodeBranch,
  FaBook,
} from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import GitHubCalendar from "react-github-calendar";

const GITHUB_USERNAME = "Anirbandasjoy";

const Banner = () => {
  const [githubStats, setGithubStats] = useState<any>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const data = await res.json();
        setGithubStats(data);
      } catch (err) {
        console.error("GitHub API Error", err);
      }
    };
    fetchGitHubStats();
  }, []);

  return (
    <div className="my-16  text-gray-800 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-32 h-32 border-4 rounded-full border-gray-200 overflow-hidden">
          <Image
            src={my_image}
            alt="My profile"
            width={128}
            height={128}
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        <div className="text-center md:text-left space-y-1">
          <h1 className="text-3xl font-bold">Joy Das</h1>
          <p className="text-gray-600 text-sm">Web Application Developer</p>
          <div className="flex justify-center md:justify-start gap-5 mt-2">
            <a href="https://github.com/Anirbandasjoy" target="_blank">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <button className="cursor-pointer group inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition">
          <FiFileText className="w-4 h-4" />
          <span>Download Resume</span>
          <BsArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
        <button className=" bg-slate-7 text-slate-100 bg-slate-800 cursor-pointer group inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-300  rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition">
          <FaFileContract className="w-4 h-4" />
          <span>Contact me</span>
          <BsArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* GitHub Activity */}
      <div className="mt-16 bg-white border border-gray-200 rounded-md p-6">
        <h2 className="text-lg font-semibold mb-1">GitHub Activity</h2>
        <p className="text-sm text-gray-600 mb-6">
          Here s a snapshot of my recent GitHub contributions and profile stats.
        </p>

        <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
          {/* GitHub Calendar */}
          <div className="md:w-2/3 overflow-x-auto hide-scrollbar">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              blockSize={11}
              // blockSize={12}
              blockMargin={3}
              fontSize={12}
              colorScheme="light"
            />
          </div>

          {/* GitHub Stats */}
          {githubStats && (
            <div className="md:w-1/3 border border-gray-200 rounded-md p-4 text-sm space-y-3 ">
              <div className="flex items-center gap-2">
                <FaUsers className="text-gray-500" />
                <span>Followers: {githubStats.followers}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBook className="text-gray-500" />
                <span>Public Repos: {githubStats.public_repos}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCodeBranch className="text-gray-500" />
                <span>Gists: {githubStats.public_gists}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub className="text-gray-500" />
                <a
                  href={githubStats.html_url}
                  target="_blank"
                  className="underline text-blue-600"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hide Scrollbar Globally */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Banner;

// update

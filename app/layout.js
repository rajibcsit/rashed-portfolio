"use client";
import { useState } from "react";
// import animationWvs from "@/public/images/social/animation-waves.svg";
import mypic from "@/public/images/profile.jpg";
import animate from "@/public/images/social/animation-waves.svg";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    // "awards",
    "interests",
  ];
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <html lang="en">
      <body>
        <div className="flex border-r shadow-inner border-gray-200 relative">
          <div className="lg:hidden">
            <div className="fixed top-0 left-0 w-full h-[60px]  bg-[#0D4D4A] flex items-center justify-between px-4 shadow-md z-40">
              <h1 className="text-white text-xl font-bold">Rashed Sarker</h1>
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 text-white rounded-md bg-[#0D4D4A]"
              >
                {isOpen ? (
                  <span className="text-2xl">&#10005;</span>
                ) : (
                  <span className="text-2xl">&#9776;</span>
                )}
              </button>
            </div>
          </div>

          <div
            className={`fixed z-30 lg:z-0 lg:min-h-screen top-[60px] lg:top-0 h-[calc(100%-60px)] left-0 w-[260px] bg-gradient-to-b from-[#151C48] to-[#1d4349] via-[#151C48] transition-transform duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 flex flex-col justify-center items-center`}
          >
            <div className="mb-8 transition-transform duration-500 ease-in-out hover:scale-105">
              <Image
                className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300 shadow-md"
                src={mypic}
                width={100}
                height={100}
                alt="defaultAvatar"
              />
            </div>
            <nav>
              <ul className="space-y-4 flex flex-col items-center">
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => handleScrollToSection(section)}
                      className="block py-2 text-center text-gray-300 hover:text-white focus:text-white focus:outline-none transition-colors duration-300 ease-in-out"
                    >
                      {section.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <Image src={animate} alt="animate_pic" className="absolute bottom-0 hidden lg:block" />
          </div>

          <div className=" lg:pt-0  lg:ml-[260px] w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}

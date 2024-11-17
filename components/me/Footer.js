"use client";
import React, { useEffect, useState } from "react";
import animationWvs from "@/public/images/social/footer-waves.svg";
import arrow from "@/public/images/social/arrow-up.svg";
import Image from "next/image";

const Footer = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className=" bg-gray-100 min-h-[250px] relative">
      <Image
        src={animationWvs}
        alt="Footer Waves"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="flex flex-col justify-between items-center absolute top-36 left-6 sm:left-10 lg:left-0 lg:top-36 text-white lg:px-16 xl:px-24">
        <p className="text-center">
          Designed and Developed By
          <span className="text-primary text-lg font-semibold"> Me</span>
        </p>
        <small className="mt-2">&copy; 2024</small>
      </div>
      {backToTop && (
        <button
          onClick={scrollUp}
          className="fixed flex items-center justify-center bottom-8 right-[40px] w-[50px] h-[50px] bg-[#232952] border-[.8px] rounded-[5px]"
        >
          <Image src={arrow} alt="Footer Waves" />
        </button>
      )}
    </section>
  );
};

export default Footer;

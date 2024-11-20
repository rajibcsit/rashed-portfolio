"use client";
import email from "@/public/images/social/email.svg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const socialPlatforms = [
    // { platform: "GitHub", icon: "/images/social/github.svg", url: "https://github.com/haniful360" },
    // { platform: "HackerRank", icon: "/images/social/hackerrank.svg", url: "https://www.hackerrank.com" },
    // { platform: "LeetCode", icon: "/images/social/leetcode.svg", url: "https://leetcode.com" },
    // { platform: "YouTube", icon: "/images/social/youtube-line.svg", url: "https://youtube.com" },
    // { platform: "SlideShare", icon: "/images/social/slideshare.svg", url: "https://slideshare.net" },
    {
      platform: "LinkedIn",
      icon: "/images/social/lin.e654fc4f.svg",
      url: "https://www.linkedin.com/in/rashed-sarker-552951283/",
    },
    {
      platform: "Twitter",
      icon: "/images/social/twitter-line.svg",
      url: "https://x.com/Rashed_Sarker12?s=09",
    },
    {
      platform: "Facebook",
      icon: "/images/social/fb.84f81b16.svg",
      url: "https://www.facebook.com/profile.php?id=61568628960719",
    },
    {
      platform: "Telegram",
      icon: "/images/social/telegram.svg",
      url: "https://t.me/NextGen_Listing",
    },
    {
      platform: "Instagram",
      icon: "/images/social/instagram.svg",
      url: "https://www.instagram.com/rashedsarker304/",
    },
  ];

  return (
    <section id="about">
      <div className="pt-16 pb-8 lg:pb-0 lg:pt-0 min-h-screen bg-gray-100 border-t border-gray-200 shadow-md flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-24 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-start items-start mb-4 lg:px-4">
          <div className="text-left">
            <h1
              style={{
                backgroundImage: "linear-gradient(to bottom right, #38A2D7, #561139)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold text-gray-800 mb-4"
            >
              Rashed Sarker
            </h1>
            <h3 className="py-4 text-xl font-medium">Crypto and Digital Marketing Specialist </h3>

            <p className="text-gray-600 mb-2 flex flex-wrap gap-3">
              Dhaka, Bangladesh.
              <Link
                href="mailto:abc@gmailc.com"
                className="text-gray-600 mb-2 font-bold flex items-center gap-1"
              >
                <Image src={email} alt="" />
                rashedsarker304@gmail.com
              </Link>
            </p>
          </div>
        </div>
        <div className="mb-4 lg:pr-24 lg:pl-4">
          <p className="text-gray-700 text-justify text-[17px]">
            Hello! I am Rashed, a Listing Manager with deep expertise in token/coin listings across
            multiple cryptocurrency exchanges since 2021. I ensure smooth, seamless listings with
            thorough identity verification and close coordination with senior management. Alongside
            my crypto expertise, I specialize in digital marketing, strategic social media ad
            campaigns, and high-quality video editing solutions. If you are seeking a trusted,
            strategic partner to propel your project forward, let is connect and turn your vision
            into reality!
          </p>
        </div>

        <div className="lg:px-4">
          <div className="mb-2 mt-8">
            <h2 className="text-lg font-semibold mb-2">Connect with me</h2>
          </div>
          <div className="flex gap-4 flex-wrap mt-8">
            {socialPlatforms.map((platform) => (
              <div
                key={platform.platform}
                className="relative group bg-gray-700 text-white rounded-full w-14 h-14 flex items-center justify-center transition duration-300 transform hover:bg-[#BD5D38] hover:scale-110"
              >
                <Link
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                >
                  <Image src={platform.icon} alt={platform.platform} width={24} height={24} />
                </Link>
                {/* Tooltip */}
                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                  {platform.platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import awardsSvg from "@/public/images/social/awards.svg";
import Image from "next/image";



const Awards = () => {
  const awards = [
    {
      award: "Best Developer of the Year",
      description: "Awarded for exceptional performance in developing innovative software solutions.",
    },
    {
      award: "Outstanding Contribution to Teamwork",
      description: "Recognized for excellent collaboration and contribution to team success.",
    },
    {
      award: "Employee of the Month",
      description: "Awarded to the employee who showed outstanding dedication and commitment.",
    },
    {
      award: "Top Innovator",
      description: "Recognized for introducing creative solutions that improved company efficiency.",
    },
    {
      award: "Leadership Excellence",
      description: "Awarded for exceptional leadership and guidance in project execution.",
    },
  ]
  return (
    <section id='awards'>
      <div className="pt-16 pb-8 lg:pb-0 lg:pt-0 min-h-screen flex flex-col  justify-center border-t border-gray-200 bg-gray-100 px-6 sm:px-10 lg:pl-16 lg:pr-24 overflow-hidden">
        <h1 className="lg:text-3xl text-2xl  font-bold mb-10 text-gray-800">Awards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards?.map((award, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center p-6 bg-gray-200">
                <Image
                  src={awardsSvg}
                  alt="awards icon"
                  width={50}
                  height={50}
                  className="mb-4"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {award.award}
                </h2>
                <p className="text-gray-700 mt-2">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

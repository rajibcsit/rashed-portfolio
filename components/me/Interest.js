import mark from "@/public/images/social/check-mark.svg";
import Image from "next/image";

const Interests = () => {
  const interests = [
    {
      interest: "Traveling",
    },
    {
      interest: "Playing Football,Cricket",
    },
    {
      interest: "Learning New Things",
    },
  ];
  return (
    <section id="interests">
      <div className=" bg-gray-100  border-t border-gray-200 shadow px-6 sm:px-10 lg:pl-16 lg:pr-24 py-6 lg:py-16">
        <div className="mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8 lg:mt-12">
            Interests
          </h2>
          <p className=" text-gray-600 mb-10">
            Here are some of my personal interests that keep me motivated and inspired.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests?.map((interest, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 max-w-[400px]"
              >
                <h3 className="text-base sm:text-lg md:text-xl flex items-center gap-2 font-semibold text-[#255B63]">
                  <Image src={mark} alt="awards icon" className="flex-shrink-0" />
                  <span className="flex flex-wrap">{interest.interest}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;

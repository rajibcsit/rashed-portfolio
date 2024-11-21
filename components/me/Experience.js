// components/Experience.js
export default function Experience() {
  const experiences = [
    {
      role: "Verified Listing Manager 40+ Exchanges Partner.",
      company_url: "Tokens/Coin Listing BD",
      start_date: "2022",
      end_date: "Present",
      description:
        "My Expertise: I specialize in getting your token or coin listed on top cryptocurrency exchanges, ensuring seamless trading opportunities for holders and boosting token volume. While the listing process may seem complex, with strategic planning and execution, I make it a smooth and efficient experience.",
      short_description:
        "With my extensive experience and strong network across 40+ exchanges, I can guide you through every step, from initial submission to successful listing.",
      analytics: "MEXC, LBank, Toobit, BitMart, Coinstore, CoinMarketCap, CoinGecko  and more.",
    },
    {
      role: "Digital Marketing",
      company_url: "Infinx Hospitals and health care. Cupertino, California (Remote)",
      start_date: "2021",
      end_date: "Present",
      description:
        "My Expertise: I lead Facebook ad campaigns, continuously optimizing performance to maximize ROI. I create and execute targeted social media strategies, focusing on increasing engagement and driving traffic.My work involves developing data- driven marketing solutions, designing impactful digital campaigns, and improving brand awareness across multiple platforms. ",
      analytics:
        "Facebook Ads Campaigns, Social Media Management, Google Ads, Instagram Ads, Twitter Ads, And more",
    },
    {
      role: "Video Editing",
      company_url: "Short-Form video editing. Los Angeles CA (Remote)",
      start_date: "2022",
      end_date: "Present",
      description:
        "My skills: I create high-quality and engaging video content using modern tools like Capcut and Filmora. Through color grading, dynamic transitions, and custom animations, I design videos that strengthen brand identity and effectively connect with viewers. I create data-driven video content for social media or YouTube, which helps meet brand goals and generates viewer interest. ",
      analytics:
        "B-Roll Editing, Special Effects & Transitions, Color Grading, Social Media Content Editing (YouTube, Instagram, TikTok, etc.), Promotional & Corporate Videos, Video Optimization for Digital Platforms",
    },
  ];

  return (
    <section id="experience">
      <div className="pt-16 pb-8 lg:pb-0 lg:pt-0 min-h-screen flex flex-col bg-gray-100 border-t  border-gray-200 px-6 sm:px-10 lg:pl-16 lg:pr-24 overflow-hidden">
        <div className=" rounded ">
          <div>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 lg:mt-12">
              EXPERIENCE
            </h1>
          </div>
          {experiences?.map((experience, index) => (
            <div key={index} className="mb-12 ">
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div>
                  <h2 className="text-sm sm:text-base md:text-xl font-bold mb-2">
                    {experience.role}
                  </h2>
                  <h3 className="text-[12px] sm:text-base md:text-lg font-bold mb-2">
                    {experience.company_url}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-right text-orange-500 font-medium">
                  {experience.start_date}
                  <span> - </span>
                  {experience.end_date}
                </p>
              </div>

              <div className="mb-4 w-full sm:w-10/12">
                <p className="text-black text-justify text-sm sm:text-base md:text-lg">
                  <span className="text-green-500">✔</span>
                  {experience.description}
                </p>
                <p className="text-black text-justify text-sm sm:text-base md:text-lg">
                  {experience.short_description}
                </p>
                <p className="text-black text-justify text-sm sm:text-base md:text-lg mt-2">
                  <span className="text-black font-bold">What I Can Do: </span>
                  {experience.analytics}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

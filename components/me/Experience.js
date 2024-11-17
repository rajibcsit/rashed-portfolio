// components/Experience.js
export default function Experience() {
  const experiences = [
    {
      role: "Listing Manager (Partner)",
      company_url: "Multiple Cryptocurrency Exchanges",
      start_date: "2021",
      end_date: "Present",
      description:
        "Facilitated token/coin listings, verified project identities, managed negotiations, and provided post-listing support between projects and exchanges.",
      analytics: "CoinMarketCap, TradingView, Crypto APIs",
    },
    {
      role: "Digital Marketing",
      company_url: "bd It Ltd",
      start_date: "2020",
      end_date: "Present",
      description:
        "Managed Facebook Ads campaigns, optimized performance for ROI, created engaging video content, and designed targeted campaigns aligning with brand goals.",
      analytics:
        "Facebook Ads Manager, Google Ads, Instagram Ads, Twitter Ads,AdEspresso,Adobe Premiere Pro,Filmora",
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
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-base sm:text-xl md:text-2xl font-bold mb-2">
                    {experience.role}
                  </h2>
                  <h3 className="text-xl font-medium text-gray-600 mb-2 ">
                    {experience.company_url}
                  </h3>
                </div>
                <p className="text-right text-orange-500 font-medium">
                  {experience.start_date}
                  <span> - </span>
                  {experience.end_date}
                </p>
              </div>
              <ul className="list-none space-y-2 mb-4 w-6/12">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✔</span>
                  <p>{experience.description}</p>
                </li>
              </ul>

              <p className="font-semibold">
                <span className="text-gray-700">Analytics:</span> {experience.analytics}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

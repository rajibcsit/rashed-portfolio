export default function Skills() {
  const skillsData = [
    {
      title: "Crypto Services",
      description: "Expert in Crypto Services: Specializing in These Solutions.",
      skills: [
        "TokenListing",
        "IEOExpert",
        "CryptoConsultant",
        "BusinessDevelopmentManager",
        "CommunityManager",
      ],
    },
    {
      title: "Digital Marketing Services",
      description: "Expert in Digital Marketing Services: Specializing in These Solutions.",
      skills: [
        "SocialMediaManager",
        "SocialMarketers",
        "FacebookAds",
        "TwitterAds",
        "TikTokAds",
        "GoogleAds",
      ],
    },
    {
      title: "Video Editing",
      description: "Expert in Video Editing: Specialized Solutions for Your Content.",
      skills: ["VideoEditing", "ShortFormVideos", "ReelsEditing", "ContentCreation", "ShortClips"],
    },
  ];
  return (
    <section id="skills">
      <div className="pt-8 pb-6 lg:pb-0 lg:pt-0 min-h-screen mx-auto border-t border-gray-200 shadow bg-gray-100 rounded px-4 sm:px-6 lg:pl-16 lg:pr-24 overflow-hidden">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8 lg:mt-12">
          SKILLS
        </h1>
        {skillsData.map((section, index) => (
          <div key={index} className="mb-6 md:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{section.title}</h3>
            {section.description && (
              <p className="text-sm sm:text-base md:text-lg mb-4">{section.description}</p>
            )}
            <div className="flex flex-wrap gap-3">
              {section.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-[#dad8d8] text-black px-3 py-1 rounded text-xs sm:text-sm md:text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

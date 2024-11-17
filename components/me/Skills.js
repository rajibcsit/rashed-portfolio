export default function Skills() {
  const skillsData = [
    {
      title: "Digital Marketing Services",
      description: "Expert in Digital Marketing Services: Specializing in These Solutions.",
      skills: ["Social Media Ads", "Video Editing"],
    },
    {
      title: "Crypto Services",
      description: "Expert in Crypto Services: Specializing in These Solutions.",
      skills: ["Tokens/ Coin listing Service"],
    },
    {
      title: "IDE & Tools",
      skills: [
        "Git",
        "Github",
        "VS code",
        "Vercel",
        "Netlify",
        "Figma",
        "Photoshop",
        "Chrome Dev Tools",
        "Chatgpt",
      ],
    },
  ];
  return (
    <section id="skills">
      <div className="pt-16 pb-8 lg:pb-0 lg:pt-0 min-h-screen mx-auto border-t border-gray-200 shadow bg-gray-100 rounded  px-6 sm:px-10 lg:pl-16 lg:pr-24 overflow-hidden">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 lg:mt-12">SKILLS</h1>
        {skillsData.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            {section.description && <p className="text-gray-600 mb-4">{section.description}</p>}
            <div className="flex flex-wrap gap-3">
              {section.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-[#EEECEC] text-[#525356] px-3 py-1 rounded text-[16px]"
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

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Social media manager",
      imageUrl: "/images/projects/social_media_manager.jpg",
      link: "https://x.com/MunroLive_Pod?s=09",
    },
    {
      title: "Social media marketing",
      imageUrl: "/images/projects/social_media_marketing.jpg",
      link: "https://x.com/DillonLoomis22?s=09",
    },
    {
      title: "Social media posts",
      imageUrl: "/images/projects/social_media_posts.jpg",
      link: "https://x.com/jamesdouma?s=09",
    },
    {
      title: "Social media marketing",
      imageUrl: "/images/projects/social_media_marketing.jpg",
      link: "https://x.com/SiderampHQ?s=09",
    },
  ];

  return (
    <section id="projects">
      <div className="pt-16 pb-8 lg:pb-0 lg:pt-0 flex flex-col border-t border-gray-200 shadow min-h-screen mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-24 bg-gray-100 overflow-hidden">
        <h1 className="lg:text-3xl text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 lg:mt-12">
          SOME PROJECTS
        </h1>
        <p className="text-gray-600 mb-8">
          I developed a number of projects. Among those, a few are highlighted here.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={project.imageUrl}
                alt={`${project.title} image`}
                width={300}
                height={200}
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />

              <div className="p-4">
                <h3 className="text-center text-base md:text-lg font-bold text-gray-800">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
// import artofcse from '@/public'

export default function Projects() {
  const projects = [
    {
      title: "Artofcse",
      description: "React.js, Next.js, Tailwind CSS, Laravel Sanctum API and MySQL ",
      imageUrl: "/images/projects/artofcse.png",
      link: "https://artofcse.com",
    },
    {
      title: "Admin Dashboard",
      description: " HTML, CSS , Tailwind CSS, Javascript",
      imageUrl: "/images/projects/dashboard.png",
      link: "https://new-admin-dashboard-kappa.vercel.app/",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex h-28 border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={project.imageUrl}
                alt={`${project.title} image`}
                width={200}
                height={150}
                className="w-1/3 h-full flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105"
              />

              <div className="p-4 flex-grow">
                <h3 className="text-base md:text-lg font-bold text-gray-800">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="text-[14px] text-base text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

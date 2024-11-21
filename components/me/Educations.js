const Education = () => {
  const educations = [
    {
      institution: "Crypto Education Center",
      degree: "Crypto learning",
      duration: "31 March 2023",
    },
    {
      institution: "Global Digital Marketing Institute",
      degree: "Digital marketing",
      duration: "12 February 2020",
    },
    {
      institution: "Rajshahi University",
      // degree: "Junior  School Certificate(JSC) ",
      // fieldOfStudy: "Computer Technology",
      // cgpa: "5.00 (Out of 5.00)",
      duration: "(2022-2023) Session ",
    },
  ];

  return (
    <section id="education">
      <div className="pt-12 pb-6 lg:pb-0 lg:pt-0 flex flex-col justify-center min-h-screen bg-gray-100 border border-gray-200 shadow-md px-4 sm:px-6 lg:pl-16 lg:pr-24 overflow-hidden">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8 lg:mt-12">
          EDUCATION AND WORK-STUDY INSTITUTIONS
        </h2>

        {/* Education List */}
        <div className="space-y-8">
          {educations?.map((education, index) => (
            <div key={index} className="border-b last:border-0 border-gray-300 pb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {education.institution}
                </h3>
                <span className="text-sm sm:text-base text-red-500 mt-1 md:mt-0">
                  {education.duration}
                </span>
              </div>
              <p className="text-base sm:text-lg font-medium italic mb-2">{education.degree}</p>
              <p className="text-sm sm:text-base">{education.fieldOfStudy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

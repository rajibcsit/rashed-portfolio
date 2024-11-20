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
      <div className=" pt-16 pb-8 lg:pb-0 lg:pt-0 flex flex-col justify-center min-h-screen bg-gray-100 border border-gray-200 shadow px-6 sm:px-10 lg:pl-16 lg:pr-24 overflow-hidden">
        <h2 className="lg:text-3xl text-2xl md:text-4xl font-bold mb-8">
          EDUCATION AND WORK-STUDY INSTITUTIONS
        </h2>
        <div className="space-y-10">
          {educations?.map((education, index) => (
            <div key={index} className="border-b last:border-0 border-gray-300 pb-4">
              <div className="flex flex-col md:flex-row md:justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold">{education.institution}</h3>
                <span className="text-sm md:text-base text-red-500 mt-2 md:mt-0">
                  {education.duration}
                </span>
              </div>
              <p className="text-lg font-medium italic mb-2">{education.degree}</p>
              <p className="text-base">{education.fieldOfStudy}</p>
              {/* <p className="text-base">GPA: {education.cgpa}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

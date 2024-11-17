// "use client";
import About from "@/components/me/About";
import Education from "@/components/me/Educations";
import Experience from "@/components/me/Experience";
import Footer from "@/components/me/Footer";
import Interests from "@/components/me/Interest";
import Projects from "@/components/me/Porjects";
import Skills from "@/components/me/Skills";

export const metadata = {
  title: "Rashed Sarker - Digital Marketing Expert",
  description:
    "Specializing in Social Media Ads, Video Editing, and Data-Driven Marketing Strategies.",
};

const Page = () => {
  return (
    <div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      {/* <Awards /> */}
      <Interests />
      <Footer />
    </div>
  );
};

export default Page;

// "use client";
import About from "@/components/me/About";
import Education from "@/components/me/Educations";
import Experience from "@/components/me/Experience";
import Footer from "@/components/me/Footer";
import Interests from "@/components/me/Interest";
import Projects from "@/components/me/Porjects";
import Skills from "@/components/me/Skills";

let title =
  "Rashed Sarker - Professional Crypto and Digital Marketing Specialist | Boost Your Brand Online";
let keywords =
  "Crypto Marketing Specialist, Digital Marketing Expert, Cryptocurrency Branding, Blockchain Marketing, SEO for Crypto, Social Media Marketing, Online Growth Strategies, Marketing for Blockchain Projects, Digital Advertising";
let description =
  "Unlock the potential of your business with a seasoned Crypto and Digital Marketing Specialist. Specializing in blockchain marketing, cryptocurrency branding, SEO, and digital growth strategies, I help brands achieve success in the digital world. Let’s take your business to new heights!";

export const metadata = {
  title: title,
  keywords: keywords,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: ["../images/me.jpg"],
  },
  twitter: {
    title: title,
    description: description,
  },
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

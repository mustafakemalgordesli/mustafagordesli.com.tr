import Header from "@/components/header";
import HomeLayout from "@/layouts/home"
import Contact from "@/layouts/contact"
import About from "@/layouts/about"
import Resume from "@/layouts/resume"
import Projects from "@/layouts/projects"
import ScroolContent from "@/components/scrool-content";
import AboutMotion from "@/components/about-motion";

export default function Page() {
  return (
    <ScroolContent>
      <HomeLayout />


      <About />

      <Resume />

      <Projects />

      <Contact />
    </ScroolContent>
  )
}

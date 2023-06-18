import About from "components/content/About"
import HomeCV from "components/content/HomeCV"
import Skills from "components/content/Skills"
import Project from "components/content/Project"
import Contact from "./content/Contact"
import Footer from "./content/Footer"

const RightPart = () => {
  return (
    <>
      <div className="arlo_tm_rightpart">
        <div className="rightpart_inner">

          {/* Home */}
          <HomeCV />

          {/* About */}
          <About />


          {/* Skills */}
          <Skills />


          {/* Projects */}
          <Project />

          {/* Contact */}
          <Contact />

          {/* Footer */}
          <Footer />

        </div>
      </div>

    </>
  )
}

export default RightPart
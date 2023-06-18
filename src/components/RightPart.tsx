import About from "components/content/About"
import HomeCV from "components/content/HomeCV"
import Skills from "components/content/Skills"
import Project from "components/content/Project"
import Contact from "./content/Contact"
import Footer from "./content/Footer"
interface IRightPartProps {
  showSideBar: boolean,
  setShowSideBar: (value: boolean) => void
}
const RightPart = (props: IRightPartProps) => {
  const { showSideBar } = props
  return (
    <>
      <div
        className={showSideBar ? "arlo_tm_rightpart" : "arlo_tm_rightpart opened"}
      >
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
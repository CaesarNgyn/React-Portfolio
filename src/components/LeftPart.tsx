import sideBarLogo from '@/assets/img/logo/Caesar.png'
import { ImGithub, ImFacebook2, ImInstagram } from 'react-icons/im'
import { useState } from 'react'
interface ILeftPartProps {
  showSideBar: boolean,
  setShowSideBar: (value: boolean) => void
}



const LeftPart = (props: ILeftPartProps) => {
  const { showSideBar } = props
  const [activeTab, setActiveTab] = useState<string>("home")

  const handleShowSideBar = () => {
    props.setShowSideBar(!showSideBar)

  }

  const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    setActiveTab(tab)

    const section = document.querySelector(`#${tab}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }


  return (
    <>
      <div className={showSideBar ? "arlo_tm_leftpart_wrap" : "arlo_tm_leftpart_wrap opened"}>
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#"><img src={sideBarLogo} alt="desktop-logo" /></a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a href="#home"
                  className={activeTab === 'home' ? "active" : ""}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('home', event)}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about"
                  className={activeTab === 'about' ? "active" : ""}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('about', event)}
                >
                  About
                </a>
              </li>
              <li>
                <a href="#skills"
                  className={activeTab === 'skills' ? "active" : ""}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('skills', event)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects"
                  className={activeTab === 'projects' ? "active" : ""}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('projects', event)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact"
                  className={activeTab === 'contact' ? "active" : ""}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('contact', event)}
                >
                  Contact
                </a>
              </li>


            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="https://fb.com/khanhrussian" target='_blank'>
                    <ImFacebook2 />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/khanhrussian/" target='_blank'>
                    <ImInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/caesarNgyn" target='_blank'>
                    <ImGithub />
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <a className={showSideBar ? "arlo_tm_resize" : "arlo_tm_resize opened"}
            // href="#"
            onClick={() => handleShowSideBar()}
          >
            <i
              className={showSideBar ? "xcon-angle-left" : "xcon-angle-left opened"}
              style={{ cursor: "pointer" }}
            >

            </i>
          </a>
        </div>
      </div>
    </>
  )
}

export default LeftPart
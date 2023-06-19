import imgMobile from '@/assets/img/logo/caesar-logo.png'
import { useState } from 'react'

const Mobile = () => {

  const [activeTab, setActiveTab] = useState<string>("home")
  const [isOpen, setIsOpen] = useState(false)

  const style = {
    overflow: "hidden",
    display: isOpen ? 'block' : 'none',
    transitiion: '2s'
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
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a ><img src={imgMobile} alt="mobile_logo" /></a>
          </div>
          <div className="arlo_tm_trigger">
            <div
              className={isOpen ? "hamburger hamburger--collapse-r is-active" : "hamburger hamburger--collapse-r"}>
              <div className="hamburger-box">
                <div
                  className="hamburger-inner"
                  onClick={() => setIsOpen(prev => !prev)}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap" style={style}>
          <div className="mob_menu">
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
        </div>
      </div>
    </>
  )
}

export default Mobile
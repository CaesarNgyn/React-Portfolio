import sideBarLogo from '@/assets/img/logo/Caesar.png'
import { ImGithub, ImFacebook2, ImInstagram } from 'react-icons/im'

interface ILeftPartProps {
  showSideBar: boolean,
  setShowSideBar: (value: boolean) => void
}



const LeftPart = (props: ILeftPartProps) => {
  const { showSideBar } = props

  const handleShowSideBar = () => {
    props.setShowSideBar(!showSideBar)
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
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>

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
            href="#"
            onClick={() => handleShowSideBar()}
          >
            <i className={showSideBar ? "xcon-angle-left" : "xcon-angle-left"}>

            </i>
          </a>
        </div>
      </div>
    </>
  )
}

export default LeftPart
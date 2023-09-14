import { TypeAnimation } from 'react-type-animation';
import homeImage from '@/assets/img/hero/caesar.png'

const HomeCV = () => {

  const handleScrollToAbout = () => {
    const section = document.querySelector('#about')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <div className="arlo_tm_section" id="home">
        <div className="arlo_tm_hero_header_wrap">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div className="overlay_image hero jarallax" data-speed="0.1"></div>
              <div className="overlay_color hero"></div>
            </div>
            <div className="content hero">
              <div className="inner_content">
                <div className="image_wrap">
                  <img src={homeImage} alt="hero" />
                </div>
                <div className="name_holder">
                  <h3>Nguyễn <span>Khánh</span></h3>
                </div>
                <div className="text_typing">
                  <p>I'm a&nbsp;
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Security College Student',
                        1700, // wait 1s before replacing "Mice" with "Hamsters"
                        'Web Developer',
                        1700,
                        'Backend Engineer',
                        1700

                      ]}
                      wrapper="span"
                      speed={50}
                      // style={{ fontSize: '2em', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="arlo_tm_arrow_wrap bounce anchor">
              <a
                // href={null}
                style={{ cursor: "pointer" }}
                onClick={() => handleScrollToAbout()}
              >
                <i className="xcon-angle-double-down">
                </i>
              </a>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default HomeCV
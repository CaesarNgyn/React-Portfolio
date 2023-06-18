
import aboutImg from '@/assets/img/about/about.jpg'
import CurriculumVitae from '@/assets/cvCaesar.pdf'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Thông tin cá nhân</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div className="about_image_wrap parallax" data-relative-input="true">
                    <div className="image layer" data-depth="0.1">
                      <img src="img/about/550x640.jpg" alt="550x640" />
                      <div className="inner" data-img-url={aboutImg}></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src="img/about/550x640.jpg" alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>

                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>Bonjour... I'm&nbsp;
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          'College Student',
                          1700, // wait 1s before replacing "Mice" with "Hamsters"
                          'Web Developer',
                          1700,
                          'NestJS Developer',
                          1700

                        ]}
                        wrapper="span"
                        speed={50}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                      />
                    </h4>
                  </div>
                  <div className="definition">
                    <p>Hi! Mình là <strong>Khánh</strong>, hoặc bạn có thể gọi mình là Caesar (Xê-Sa). </p>
                    <br />
                    Tuy mình xuất thân là một kỹ sư An Toàn Thông Tin, nhưng mình lại có định hướng trở thành một kỹ sư Công Nghệ Phần Mềm ^^!
                    <br />

                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span><label>Họ Tên:</label> Nguyễn Khánh</span>
                      </li>
                      <li>
                        <span><label>Ngày Sinh:</label> 24/05/2002</span>
                      </li>
                      <li>
                        <span><label>Địa Chỉ:</label> Tây Hồ, Hà Nội </span>
                      </li>
                      <li>
                        <span><label>Sở Thích:</label> Calithenics, Boxing</span>
                      </li>
                      <li>
                        <span><label>Học Vấn:</label> Học Viện Kỹ Thuật Mật Mã</span>
                      </li>
                      <li>
                        <span><label>Chuyên Ngành:</label> An Toàn Thông Tin</span>
                      </li>
                      {/* <li>
                        <span><label>Website:</label> <a href="#">www.mywebsite.com</a></span>
                      </li> */}
                      <li>
                        <span><label>Mail:</label> caesarngyn&#64;gmail.com</span>
                      </li>
                      {/* <li>
                        <span><label>Phone:</label> <a href="#">0833822085</a></span>
                      </li> */}
                      <li>
                        <span><label>Facebook:</label> <a href="https://www.facebook.com/khanhrussian" target="_blank">&#64;Khánh Nguyễn</a></span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={CurriculumVitae} download><span>Tải CV</span></a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
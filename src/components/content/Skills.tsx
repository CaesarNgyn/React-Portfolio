import ProgressBar from "@ramonak/react-progress-bar";


const Skills = () => {
  return (
    <>
      <div className="arlo_tm_section">
        <div className="arlo_tm_skills_wrap" id="skills">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ Năng Frontend </h4>
                </div>
                <li>Cắt/ghép template Website Responsive</li>
                <li>Framework/Library: Bootstrap, React.JS</li>
                <li>Tools: Redux, Redux Toolkit</li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span><span className="label">HTML/CSS/JavaScript<span className="experience"></span></span><span className="number">95%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={95}
                          bgColor={"rgb(51, 51, 51)"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="85" data-color="#000">
                      <span><span className="label">Design UI/UX<span className="experience"></span></span><span className="number">60%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={60}
                          bgColor="rgb(51, 51, 51)"
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="75" data-color="#000">
                      <span><span className="label">ReactJS<span className="experience"></span></span><span className="number">75%</span></span>
                      <div className="arlo_tm_bar_bg"><ProgressBar
                        completed={75}
                        bgColor={"rgb(51, 51, 51)"}
                        height="8px"
                        isLabelVisible={false}
                      /></div>
                    </div>
                    {/* <div className="arlo_tm_progress" data-value="90" data-color="#000">
                      <span><span className="label">After Effect - <span className="experience">6 years of experience</span></span><span className="number">90%</span></span>
                      <div className="arlo_tm_bar_bg"><ProgressBar
                        completed={60}
                        bgColor={"rgb(51, 51, 51)"}
                        height="8px"
                        isLabelVisible={false}
                      />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="arlo_tm_skills_wrap" id="skills">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ năng Backend</h4>
                </div>
                <li>Ngôn ngữ lập trình: Javascript, TypeScript</li>
                <li>Restful APIs
                </li>
                <li>Framework: Express, NestJS
                </li>
                <li>Database: MySQL, MongoDB
                </li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                    {/* <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span><span className="label">Wordpress - <span className="experience">5 years of experience</span></span><span className="number">95%</span></span>
                      <div className="arlo_tm_bar_bg">

                        <ProgressBar
                          completed={60}
                          bgColor={"rgb(51, 51, 51)"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div> */}
                    <div className="arlo_tm_progress" data-value="85" data-color="#000">
                      <span><span className="label">NestJS <span className="experience"></span></span><span className="number">99%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={99}
                          bgColor={"rgb(51, 51, 51)"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="75" data-color="#000">
                      <span><span className="label">Express  <span className="experience"></span></span><span className="number">90%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={90}
                          bgColor={"rgb(51, 51, 51)"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="90" data-color="#000">
                      <span><span className="label">Database <span className="experience"></span></span><span className="number">90%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={90}
                          bgColor={"rgb(51, 51, 51)"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="arlo_tm_skills_wrap" id="skills">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Tiếng Anh</h4>
                </div>
                <li>Toeic 750/990 (2021)</li>
                <li>Thành thạo 4 kĩ năng nghe, nói, đọc, viết</li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">

                    <div className="arlo_tm_progress" data-value="90" data-color="#000">
                      <span><span className="label">Toeic <span className="experience"></span></span><span className="number">75%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={75}
                          bgColor={"rgb(51, 51, 51)"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
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

export default Skills
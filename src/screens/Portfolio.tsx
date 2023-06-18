import LeftPart from "components/LeftPart"
import PreLoader from "components/PreLoader"
import RightPart from "components/RightPart"
import Mobile from "components/mobile/Mobile"
import { FloatButton } from 'antd';
import { useState } from "react";

const Portfolio = () => {

  const [showSideBar, setShowSideBar] = useState<boolean>(false)

  return (
    <>
      <div className="arlo_tm_wrapper_all">

        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close"><a href="#"></a></span>
        </div>



        <PreLoader />




        <Mobile />


        <div className="arlo_tm_content">

          {/* Left Part */}
          <LeftPart
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />

          {/* Right Part */}
          <RightPart
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />

          {/* <a className="arlo_tm_totop" href="#"></a> */}

          <FloatButton.BackTop
            className="arlo_tm_totop"
          // tooltip={<div>Lên đầu trang</div>}
          />

        </div>
      </div>
    </>
  )
}

export default Portfolio
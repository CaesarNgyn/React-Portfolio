import LeftPart from "components/LeftPart"
import PreLoader from "components/PreLoader"
import RightPart from "components/RightPart"
import Mobile from "components/mobile/Mobile"
import { FloatButton } from 'antd';

const Portfolio = () => {
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


          <LeftPart />


          <RightPart />

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
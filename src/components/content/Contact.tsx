
const Contact = () => {
  return (
    <>

      <div className="arlo_tm_section" id="contact">
        <div className="container">
          <div className="arlo_tm_title_holder contact">
            <h3>Contact</h3>
            <span>Liên hệ với mình ngay</span>
          </div>
        </div>
        <div className="arlo_tm_footer_contact_wrapper_all">
          <div className="arlo_tm_contact_wrap_all">
            <div className="container">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder contact">
                  <h4>Thông tin liên hệ</h4>
                </div>
                <div className="short_info_wrap">
                  <ul>
                    <li><p><label>Địa chỉ:</label><span>Tây Hồ, Hà Nội, Việt Nam</span></p></li>
                    <li><p><label>Email:</label><span><a href="mailto:caesarngyn@gmail.com">caesarngyn@gmail.com</a></span></p></li>
                    <li><p><label>Zalo:</label><span>0833822085</span></p></li>
                  </ul>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_contact_wrap">
                  <div className="main_input_wrap">
                    <form action="http://frenify.com/" method="post" className="contact_form" id="contact_form">
                      <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                      <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                      <div className="wrap">
                        <input id="name" type="text" placeholder="Your Name" />
                      </div>
                      <div className="wrap">
                        <input id="email" type="text" placeholder="Your Email" />
                      </div>
                      <div className="wrap">
                        <textarea id="message" placeholder="Your Message"></textarea>
                      </div>
                      <div className="arlo_tm_button">
                        <a id="send_message" href="#"><span>Send Message</span></a>
                      </div>
                    </form>
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

export default Contact
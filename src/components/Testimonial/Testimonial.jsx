import React from "react";
import "./Testimonial.css";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <section className="test">
      <div className="paddings innerWidth flexColStart">
        <span className="orangeText">Let Swipe for Our Mentor</span>
        <span className="primaryText">Best in the Business</span>
      </div>
      <Swiper>
        <SwiperSlide>
          <div className="paddings innerWidth flexCenter testimonial">
            <div className="testi">
              <div className="testi-content">
                <div className="slide">
                  <img
                    src="https://i.ibb.co/Km4tv5d/Whats-App-Image-2023-11-26-at-7-00-09-PM-1.jpg"
                    alt=""
                    className="imagg"
                  />

                  <p className="fourthText">
                    With over 15 years of unparalleled expertise in the real
                    estate ,your go-to authority for all things property. Armed
                    with an authorized registered certificate, his commitment to
                    excellence ensures your real estate journey is not just a
                    transaction but a seamless experience. Choose expertise,
                    choose N. Murugan for your real estate endeavors.
                  </p>

                  <ImQuotesLeft className="quote-icon" />

                  <div className="details">
                    <span className="peru">N. Murugan MA, LLB (Founder)</span>
                    <span className="cmpny">VSV REALTY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="paddings innerWidth flexCenter testimonial">
            <div className="testi">
              <div className="testi-content">
                <div className="slide">
                  <img
                    src="https://i.ibb.co/jkdj8Jc/Whats-App-Image-2023-11-26-at-7-02-28-PM.jpg"
                    alt=""
                    className="imagg"
                  />

                  <p className="fourthText">
                    Embark on a property journey with confidence, guided by K.
                    Saravana Kumar, a seasoned professional with more than 6
                    years of hands-on experience in the real estate market. As
                    your trusted agent
                  </p>

                  <ImQuotesLeft className="quote-icon" />

                  <div className="details">
                    <span className="peru">K. Saravana Kumar (Co-Founder)</span>
                    <span className="cmpny">VSV REALTY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;

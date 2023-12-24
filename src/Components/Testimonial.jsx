import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoPlay: true,
    speed: 1200
  };


  return (
    <>
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <Slider {...settings} className="testimonial-slider">
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img src="assets/images/person-1.png" alt="Maria Jones" className="img-fluid" style={{margin: "0 auto"}} />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END item */}
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img src="assets/images/person-1.png" alt="Maria Jones" className="img-fluid" style={{margin: "0 auto"}}/>
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END item */}
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img src="assets/images/person-1.png" alt="Maria Jones" className="img-fluid" style={{margin: "0 auto"}}/>
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END item */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Testimonial;
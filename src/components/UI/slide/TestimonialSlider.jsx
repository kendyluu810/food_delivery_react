import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/img/ava-1.jpg";
import ava02 from "../../../assets/img/ava-2.jpg";
import ava03 from "../../../assets/img/ava-3.jpg";

import "./slider.css"

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    inifinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          maxime dolorem optio voluptatibus expedita sequi aspernatur eligendi
          pariatur id adipisci iure sint eveniet numquam. Possimus enim, eaque
          cum suscipit non minus? Nihil optio sapiente quisquam at adipisci
          velit a repudiandae!
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jack</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          maxime dolorem optio voluptatibus expedita sequi aspernatur eligendi
          pariatur id adipisci iure sint eveniet numquam. Possimus enim, eaque
          cum suscipit non minus? Nihil optio sapiente quisquam at adipisci
          velit a repudiandae!
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Jen</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          maxime dolorem optio voluptatibus expedita sequi aspernatur eligendi
          pariatur id adipisci iure sint eveniet numquam. Possimus enim, eaque
          cum suscipit non minus? Nihil optio sapiente quisquam at adipisci
          velit a repudiandae!
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>John</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { photo_Css } from "../styles/photo_Css";
import "../styles/swiper_styles.css";

const Photo = () => {
  return (
    <div style={photo_Css.photo_box}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            style={{ position: "relative" }}
            src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span style={photo_Css.inner_text}>How about this photo?</span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={photo_Css.img}
            src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span style={photo_Css.inner_text}>How about this photo?</span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={photo_Css.img}
            src="https://cdn.pixabay.com/photo/2020/07/23/01/16/heritage-5430081_1280.jpg"
            alt=""
          />
          <span style={photo_Css.inner_text}>How about this photo?</span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={photo_Css.img}
            src="https://cdn.pixabay.com/photo/2022/09/07/10/01/landscape-7438429_1280.jpg"
            alt=""
          />
          <span style={photo_Css.inner_text}>How about this photo?</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Photo;

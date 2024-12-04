import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "../styles/Services.css";

// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";

import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="slide_image" />
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"><MdKeyboardArrowLeft/></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"><MdKeyboardArrowRight/></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
    </section>
  );
};

export default Services;

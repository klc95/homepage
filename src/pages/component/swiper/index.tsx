import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import '../swiper6/swiper-bundle.min.css'
import './index.less'
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Pagination, Navigation, Autoplay} from 'swiper/core';
SwiperCore.use([Pagination, Navigation, Autoplay]);
import first from '../carousel/first.png'
import second from '../carousel/second.png'
import third from '../carousel/third.png'
import fourth from '../carousel/fourth.png'



export default function Carousel(props: any) {
  
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      navigation={true}
      loop={true}
      autoplay={{
        "delay": 4000,
        "disableOnInteraction": false
      }}
      
    >
      <SwiperSlide><img src={first} /></SwiperSlide>
      <SwiperSlide><img src={second} /></SwiperSlide>
      <SwiperSlide><img src={third} /></SwiperSlide>
      <SwiperSlide><img src={fourth} /></SwiperSlide>
    </Swiper>
  )
}



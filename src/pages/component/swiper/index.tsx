import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import '../swiper6/swiper-bundle.min.css'
import './index.less'
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Carousel(props: any) {
  const [swiperlist, setSwiperlist] = useState<any>([]);

  useEffect(() => {
    fetch('http://localhost:8000/homepage/all')
      .then(response => response.json())
      .then(json => setSwiperlist(json.data))
  }, [])
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
      {swiperlist.map((item :any) => (
        <SwiperSlide><img src={item.url}/></SwiperSlide>
      ))}
    </Swiper>
  )
}



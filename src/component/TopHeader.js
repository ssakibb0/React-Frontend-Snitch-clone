import React from 'react';
import '../style/style.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the entire Swiper bundle

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Swiper modules should be imported from swiper/modules in the latest version
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TopHeader = () => {
  return (
    <div className="top_header">
      <Swiper
        className="mySwiper top_balck_header"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        grabCursor={false}
        modules={[Autoplay, Pagination, Navigation]}  // Use the modules directly here
      >
        <SwiperSlide>
          <span>Shop for Rs 2499/- & get 10% OFF</span>
          <span className="sec_span">Use Code: SHOP10</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>Shop for Rs 3999/- & Get FLAT 15% OFF</span>
          <span className="sec_span">Use Code: SHOP15</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>Flat 25% off | USE CODE: FINALCALL</span>
          <span className="sec_span"><a href="#">CLICK HERE</a></span>
        </SwiperSlide>
        <SwiperSlide>
          <span>Sakib bhai ka naam lu Flat 25% off | USE CODE: SAKIB</span>
          <span className="sec_span"><a href="#">CLICK HERE</a></span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopHeader;

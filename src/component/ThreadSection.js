// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Import Swiper modules
// import { Navigation, Autoplay } from 'swiper/modules';

// const ThreadSection = () => {
//   return (
//     <div className="swiper mySwiper pay_back_image">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: false,
//         }}
//         navigation={false}
//         modules={[Navigation,  Autoplay]}
//       >
//         <SwiperSlide>
//           <img src="img/pay6.webp" alt="Pay 6" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="img/pay5.webp" alt="Pay 5" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="img/pay4.webp" alt="Pay 4" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default ThreadSection;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Autoplay } from 'swiper/modules';

const ThreadSection = () => {
  return (
    <div className="swiper mySwiper pay_back_image">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img src="img/pay6.webp" alt="Pay 6" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/pay5.webp" alt="Pay 5" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/pay4.webp" alt="Pay 4" className="responsive-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ThreadSection;

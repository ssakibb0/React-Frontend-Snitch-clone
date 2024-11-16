// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper-bundle.min.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import SwiperCore from 'swiper/core';
// import { Navigation, Pagination } from 'swiper/modules'
// import '../style/style.css';
// import '../style/shop.css';
// import { form } from 'framer-motion/client';
// import { reviews } from '../constant/Reviews';

// SwiperCore.use([Navigation, Pagination]);

// const CustomerReviews = () => {
    
//   return (
//     <div id="customer_section">
//       <div className="page_width">
//         <div className="header_title">
//           <h2>OUR CUSTOMERS SPEAK FOR US</h2>
//         </div>
//         <div className="start">
//           <i className="ri-star-fill"></i>
//           <i className="ri-star-fill"></i>
//           <i className="ri-star-fill"></i>
//           <i className="ri-star-fill"></i>
//           <i className="ri-star-fill"></i>
//         </div>
//         <div className="reviews_detail">
//           <span>from 14721 reviews</span>
//         </div>
//         <Swiper
//           spaceBetween={50}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           className="mySwiper"
//         >
//           {reviews.map((review, index) => (
//             <SwiperSlide key={index} className="review_section">
//               <div className="review_wrapper">
//                 <div className="imgwrapper">
//                   <img src={review.img} alt={review.title} />
//                 </div>
//                 <div className="detail_section">
//                   <div className="start1">
//                     <i className="ri-star-fill"></i>
//                     <i className="ri-star-fill"></i>
//                     <i className="ri-star-fill"></i>
//                     <i className="ri-star-fill"></i>
//                     <i className="ri-star-fill"></i>
//                   </div>
//                   <div className="descr1">
//                     <h4>{review.title}</h4>
//                     <p>{review.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { reviews } from '../constant/Reviews';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../style/style.css';
import '../style/shop.css';

const CustomerReviews = () => {
  
    const reviews = [
        {
          img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_23Oct21_2003_56x56.jpg?v=1666120853",
          title: "Great product",
          description: "I recently purchased the most comfortable and stylish t-shirt, and I couldn't be happier with my choice!",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/ADS_4e2c3799-37e0-4de0-8957-93b1f245abdd_56x56.jpg?v=1650379023",
          title: "Great product",
          description: "I recently purchased the most comfortable and stylish t-shirt, and I couldn't be happier with my choice!",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_May22_9809_56x56.jpg?v=1652809014",
          title: "Great product",
          description: "I recently purchased the most comfortable and stylish t-shirt, and I couldn't be happier with my choice!",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/ADS_4e2c3799-37e0-4de0-8957-93b1f245abdd_56x56.jpg?v=1650379023",
            title: "Great product",
            description: "I recently purchased the most comfortable and stylish t-shirt, and I couldn't be happier with my choice!",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_23Oct21_2003_56x56.jpg?v=1666120853",
            title: "Great product",
            description: "I recently purchased the most comfortable and stylish t-shirt, and I couldn't be happier with my choice!",
          },
          {
            img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_May22_9809_56x56.jpg?v=1652809014",
            title: "Great product",
            description: "I recently purchased the most comfortable and stylish t-shirt, and I couldn't be happier with my choice!",
          },
          {
              img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/ADS_4e2c3799-37e0-4de0-8957-93b1f245abdd_56x56.jpg?v=1650379023",
              title: "Great product",
              description: "I recently purchased the most comfortable and stylish t-shirt, and I couldn't be happier with my choice!",
          },
          {
              img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_23Oct21_2003_56x56.jpg?v=1666120853",
              title: "Great product",
              description: "I recently purchased the most comfortable and stylish t-shirt, and I couldn't be happier with my choice!",
            },

        // Add more reviews here...
      ];
  return (
    <div id="customer_section">
      <div className="page_width">
        <div className="header_title">
          <h2>OUR CUSTOMERS SPEAK FOR US</h2>
        </div>
        <div className="start">
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
        </div>
        <div className="reviews_detail">
          <span>from 14721 reviews</span>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review_section">
                <div className="review_wrapper">
                  <div className="imgwrapper">
                    <img src={review.img} alt={review.title} />
                  </div>
                  <div className="detail_section">
                    <div className="start1">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                    <div className="descr1">
                      <h4>{review.title}</h4>
                      <p>{review.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;

// import React, { useState } from 'react';
// import '../style/style.css';  // Ensure the path is correct

// // Swiper Imports (for background slider)
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// // Import Swiper modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="header_section">
//       <header>
//         <div className="header_site">
//           <div className="nav_section">
//             <div className="page_width">
//               <div className="nav_flex_item">
//                 <div className="menu_bar" onClick={toggleSidebar}>
//                   <i className="ri-menu-2-fill"></i>
//                 </div>
//                 <div className="logo">
//                   <a href="#">
//                     <img src="/img/snichWhite.png" alt="logo" className="whiteimg" />
//                     {/* You can conditionally render the black logo if needed */}
//                   </a>
//                 </div>
//                 <div className="nav_link_site">
//                   <div className="link_icone">
//                     <a href="contact.html">
//                       <i className="ri-user-3-line"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Background Slider */}
//           <div className="background">
//             <Swiper
//               className="mySwiper"
//               spaceBetween={0}
//               slidesPerView={1}
//               loop={true}
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//               pagination={{ clickable: true }}
//               navigation={false}
//               grabCursor={false}
//               modules={[Autoplay, Pagination, Navigation]}
//             >
//               <SwiperSlide>
//                 <img src="/img/back555.webp" alt="bg1" className="showimage" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="/img/bg2.webp" alt="bg2" className="showimage" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="/img/bg3.webp" alt="bg3" className="showimage" />
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;










// import React, { useState } from 'react';
// import '../style/style.css';  // Ensure the path is correct

// // Swiper Imports (for background slider)
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// // Import Swiper modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="header_section">
//       <header>
//         <div className="header_site">
//           <div className="nav_section" id="nav_section">
//             <div className="page_width">
//               <div className="nav_flex_item">
//                 <div className="menu_bar" onClick={toggleSidebar}>
//                   <i className="ri-menu-2-fill"></i>
//                 </div>
//                 <div className="logo">
//                   <a href="#">
//                     <img src="img/snichWhite.png" alt="logo" className="whiteimg" />
//                     <img src="img/_New Snitch logo.png" alt="logo" className="balckimg" />
//                   </a>
//                 </div>
//                 <div className="nav_link_site">
//                   <div className="link_icone hidesoicone">
//                     <a href="contact.html">
//                       <i className="ri-user-3-line"></i>
//                     </a>
//                   </div>
//                   <div className="link_icone">
//                     <i className="ri-search-line search-bar"></i>
//                   </div>
//                   <div className="link_icone hidesoicone wislbag">
//                     <i className="ri-heart-line bicon wish_cart" style={{ color: '#e30d23 !important' }}></i>
//                     <span id="count1">0</span>
//                   </div>
//                   <div className="link_icone">
//                     <i className="ri-camera-line camera-search"></i>
//                   </div>
//                   <div className="link_icone shopping-bag cart">
//                     <i className="ri-shopping-bag-line"></i><span id="count">0</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
        //   <div className="background">
        //     {/* Preloading effect */}
        //     <div className="lds-roller" id="lds-rollerInner"></div>
        //     <Swiper
        //       className="mySwiper backgroun_wrapper"
        //       spaceBetween={0}
        //       slidesPerView={1}
        //       loop={true}
        //       autoplay={{
        //         delay: 3000,
        //         disableOnInteraction: false,
        //       }}
        //       pagination={{
        //         clickable: true,
        //       }}
        //       navigation={false}
        //       grabCursor={false}
        //       modules={[Autoplay, Pagination, Navigation]}
        //       data-aos="fade-left"
        //     >
        //       <SwiperSlide>
        //         <img src="img/back555.webp" alt="bg2" className="showimge" />
        //         <img src="img/backsmall5.webp" alt="bg2" className="showsmall showimge1" />
        //         <video autoPlay muted loop>
        //           <source src="./back video/video1.mp4" type="video/mp4" className="videohide" />
        //         </video>
        //       </SwiperSlide>
        //       <SwiperSlide>
        //         <img src="img/bg2.webp" alt="bg2" className="showimge" />
        //         <img src="img/product/new-inss.webp" alt="bg2" className="showsmall showimge1" />
        //         <video autoPlay muted loop>
        //           <source src="back video/video2.mp4" type="video/mp4" className="videohide" />
        //         </video>
        //       </SwiperSlide>
        //       <SwiperSlide>
        //         <img src="img/bg3.webp" alt="bg3" className="showimge" />
        //         <img src="img/product/pro2.webp" alt="bg2" className="showsmall showimge1" />
        //         <video autoPlay muted loop>
        //           <source src="back video/video3.mp4" type="video/mp4" className="videohide" />
        //         </video>
        //       </SwiperSlide>
        //     </Swiper>
        //   </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import '../style/style.css';  // Ensure the path is correct

// // Swiper Imports (for background slider)
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// // Import Swiper modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const Header = ({ toggleSidebar, toggleCartSection, toggleSearch }) => {
//   return (
//     <div className="header_section">
//       <header>
//         <div className="header_site">
//           <div className="nav_section" id="nav_section">
//             <div className="page_width">
//               <div className="nav_flex_item">
//                 <div className="menu_bar" onClick={toggleSidebar}>
//                   <i className="ri-menu-2-fill"></i>
//                 </div>
//                 <div className="logo">
//                   <a href="#">
//                     <img src="img/snichWhite.png" alt="logo" className="whiteimg" />
//                     <img src="img/_New Snitch logo.png" alt="logo" className="balckimg" />
//                   </a>
//                 </div>
//                 <div className="nav_link_site">
//                   <div className="link_icone hidesoicone">
//                     <a href="contact.html">
//                       <i className="ri-user-3-line"></i>
//                       {/* <p>Account</p> */}
//                     </a>
//                   </div>
//                   <div className="link_icone" onClick={toggleSearch}>
//                     <i className="ri-search-line search-bar"></i>
//                     {/* <p>Search</p> */}
//                   </div>
//                   <div className="link_icone hidesoicone wislbag">
//                     <i className="ri-heart-line bicon wish_cart" style={{ color: '#e30d23' }}></i>
//                     <span id="count1">0</span>
//                     {/* <p>Wishlist</p> */}
//                   </div>
                  
//                   <div className="link_icone shopping-bag cart" onClick={toggleCartSection}>
//                     <i className="ri-shopping-bag-line"></i>
//                     <span id="count">0</span>
//                     {/* <p>Cart</p> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Background Slider */}
//           <div className="background">
//             {/* Preloading effect */}
//             <div className="lds-roller" id="lds-rollerInner"></div>
//             <Swiper
//               className="mySwiper backgroun_wrapper"
//               spaceBetween={0}
//               slidesPerView={1}
//               loop={true}
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//               pagination={{
//                 clickable: true,
//               }}
//               navigation={false}
//               grabCursor={false}
//               modules={[Autoplay, Pagination, Navigation]}
//               data-aos="fade-left"
//             >
//               <SwiperSlide>
//                 <img src="img/back555.webp" alt="bg2" className="showimge" />
//                 <img src="img/backsmall5.webp" alt="bg2" className="showsmall showimge1" />
//                 <video autoPlay muted loop>
//                   <source src="./back video/video1.mp4" type="video/mp4" className="videohide" />
//                 </video>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="img/bg2.webp" alt="bg2" className="showimge" />
//                 <img src="img/product/new-inss.webp" alt="bg2" className="showsmall showimge1" />
//                 <video autoPlay muted loop>
//                   <source src="back video/video2.mp4" type="video/mp4" className="videohide" />
//                 </video>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="img/bg3.webp" alt="bg3" className="showimge" />
//                 <img src="img/product/pro2.webp" alt="bg2" className="showsmall showimge1" />
//                 <video autoPlay muted loop>
//                   <source src="back video/video3.mp4" type="video/mp4" className="videohide" />
//                 </video>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

import React from 'react';
import '../style/style.css';  // Ensure the path is correct

// Swiper Imports (for background slider)
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = ({ toggleSidebar, toggleCartSection, toggleSearch }) => {
    const handleMenuClick = () => { console.log('Menu clicked'); toggleSidebar(); };
  return (
    <div className="header_section">
      <header>
        <div className="header_site">
          <div className="nav_section" id="nav_section">
            <div className="page_width">
              <div className="nav_flex_item">
                <div className="menu_bar" onClick={handleMenuClick}>
                  <i className="ri-menu-2-fill"></i>
                </div>
                <div className="logo">
                  <a href="#">
                    <img src="img/snichWhite.png" alt="logo" className="whiteimg" />
                    <img src="img/_New Snitch logo.png" alt="logo" className="balckimg" />
                  </a>
                </div>
                <div className="nav_link_site">
                  <div className="link_icone hidesoicone">
                    <a href="contact.html">
                      <i className="ri-user-3-line"></i>
                    </a>
                  </div>
                  <div className="link_icone" onClick={toggleSearch}>
                    <i className="ri-search-line search-bar"></i>
                  </div>
                  <div className="link_icone hidesoicone wislbag">
                    <i className="ri-heart-line bicon wish_cart" style={{ color: '#e30d23' }}></i>
                    <span id="count1">0</span>
                  </div>
                  <div className="link_icone shopping-bag cart" onClick={toggleCartSection}>
                    <i className="ri-shopping-bag-line"></i>
                    <span id="count">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background Slider */}
          <div className="background">
            {/* Preloading effect */}
            <div className="lds-roller" id="lds-rollerInner"></div>
            <Swiper
              className="mySwiper backgroun_wrapper"
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              grabCursor={false}
              modules={[Autoplay, Pagination, Navigation]}
              data-aos="fade-left"
            >
              <SwiperSlide>
                <img src="img/back555.webp" alt="bg2" className="showimge" />
                <img src="img/backsmall5.webp" alt="bg2" className="showsmall showimge1" />
                <video autoPlay muted loop>
                  <source src="./back video/video1.mp4" type="video/mp4" className="videohide" />
                </video>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img/bg2.webp" alt="bg2" className="showimge" />
                <img src="img/product/new-inss.webp" alt="bg2" className="showsmall showimge1" />
                <video autoPlay muted loop>
                  <source src="back video/video2.mp4" type="video/mp4" className="videohide" />
                </video>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img/bg3.webp" alt="bg3" className="showimge" />
                <img src="img/product/pro2.webp" alt="bg2" className="showsmall showimge1" />
                <video autoPlay muted loop>
                  <source src="back video/video3.mp4" type="video/mp4" className="videohide" />
                </video>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

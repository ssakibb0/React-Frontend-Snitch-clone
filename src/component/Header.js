
// import React from 'react';
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
//     const handleMenuClick = () => { console.log('Menu clicked'); toggleSidebar(); };
//   return (
//     <div className="header_section">
//       <header>
//         <div className="header_site">
//           <div className="nav_section" id="nav_section">
//             <div className="page_width">
//               <div className="nav_flex_item">
//                 <div className="menu_bar" onClick={handleMenuClick}>
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
//                   <div className="link_icone" onClick={toggleSearch}>
//                     <i className="ri-search-line search-bar"></i>
//                   </div>
//                   <div className="link_icone hidesoicone wislbag">
//                     <i className="ri-heart-line bicon wish_cart" style={{ color: '#e30d23' }}></i>
//                     <span id="count1">0</span>
//                   </div>
//                   <div className="link_icone shopping-bag cart" onClick={toggleCartSection}>
//                     <i className="ri-shopping-bag-line"></i>
//                     <span id="count">0</span>
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

// // export default Header;
// import React from 'react';
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
//   const handleMenuClick = () => { console.log('Menu clicked'); toggleSidebar(); };

//   return (
//     <div className="header_section">
//       <header>
//         <div className="header_site">
//           <div className="nav_section" id="nav_section">
//             <div className="page_width">
//               <div className="nav_flex_item">
//                 <div className="menu_bar" onClick={handleMenuClick}>
//                   <i className="ri-menu-2-fill"></i>
//                 </div>
//                 <div className="logo">
//                   <a href="#">
//                     <img src="img/snichWhite.png" alt="logo" className="whiteimg" />
//                     <img src="img/_New Snitch logo.png" alt="logo" className="balckimg" />
//                   </a>
//                 </div>
//                 {/* Header Links */}
//                 <div className="nav_link_site">
//                 <div className="link_icone hidesoicone">
//                        <a href="contact.html">
//                        <i className="ri-user-3-line"></i>
//                  </a>
//                  </div>
//                   {/* Search Bar Icon */}
//                   <div className="link_icone" onClick={toggleSearch}>
//                     <i className="ri-search-line search-bar"></i>
//                   </div>
//                   <div className="link_icone hidesoicone wislbag">
//                     <i className="ri-heart-line bicon wish_cart" style={{ color: '#e30d23' }}></i>
//                     <span id="count1">0</span>
//                   </div>
//                   <div className="link_icone shopping-bag cart" onClick={toggleCartSection}>
//                     <i className="ri-shopping-bag-line"></i>
//                     <span id="count">0</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Background Slider */}
//           <div className="background">
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
                {/* Header Links */}
                <div className="nav_link_site">
                  <div className="link_icone hidesoicone">
                    <a href="contact.html">
                      <i className="ri-user-3-line"></i>
                    </a>
                  </div>
                  {/* Search Bar Icon */}
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

      {/* Sticky Bottom Bar (Visible only on mobile) */}
      <div className="sticky-bottom-nav">
        <div className="sticky-icons">
          <div className="link_icone" onClick={toggleSearch}>
            <i className="ri-search-line"></i>
          </div>
          <div className="link_icone">
            <i className="ri-heart-line" style={{ color: '#e30d23' }}></i>
            <span id="count1">0</span>
          </div>
          <div className="link_icone" onClick={toggleCartSection}>
            <i className="ri-shopping-bag-line"></i>
            <span id="count">0</span>
          </div>
          <div className="link_icone hidesoicone">
              <a href="contact.html">
                <i className="ri-user-3-line"></i>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


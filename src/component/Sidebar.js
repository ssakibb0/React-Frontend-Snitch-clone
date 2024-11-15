// // src/components/Sidebar.js
// import React from 'react';
// import '../style/style.css';  // Import your custom CSS for this component


// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <div className={`side_bar_section ${isOpen ? 'open' : ''}`}>
//       <div className="side_navBar">
//         <div className="navbar_menu">
//           <div className="fixed_header">
//             <div>
//               <a href="#"><i className="ri-user-3-line user"></i></a>
//               <a href="#">LOG IN</a>
//             </div>
//             <i className="ri-close-line close" onClick={toggleSidebar}></i>
//           </div>
//           <div className="navbar_list">
//             <ul className="nav_item_list">
//               <li><a href="#">new</a></li>
//               <li><a href="#">Shop</a></li>
//               <li><a href="#">IN the spotlight</a></li>
//               <li><a href="#">Download App</a></li>
//               <li><a href="#">Track order</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import '../style/style.css';  // Ensure the path is correct

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeList, setActiveList] = useState(null);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const Toggle = (listId) => {
//     setActiveList((prevActiveList) => (prevActiveList === listId ? null : listId));
//   };

//   return (
//     <div className={`side_bar_section ${isSidebarOpen ? 'open' : ''}`}>
//       <div className="side_navBar">
//         <div className="navbar_menu">
//           <div className="fixed_header">
//             <div>
//               <a href="#"><i className="ri-user-3-line user"></i></a>
//               <a href="#">LOG IN</a>
//             </div>
//             <i className="ri-close-line close" onClick={toggleSidebar}></i>
//           </div>
//           <div className="navbar_list">
//             <ul className="nav_item_list">
//               <li className="NavLink"><a href="#">new</a></li>
//               <li className="NavLink">
//                 <div className="fdiv_flex">
//                   <a href="#">Shop</a>
//                   <a href="#"><i className="ri-arrow-down-s-line down_arrow"></i></a>
//                 </div>
//                 <div className={`LinkList ${activeList === 'flist' ? 'active' : ''}`} id="flist">
//                   <div className="Link_content_inner">
//                     <ul className="mobile_nav_list">
//                       {/* Replace the rest of the nav items similar to this one */}
//                       <li className="mobile_nav_item">
//                         <div className="flex_mobile_item">
//                           <a href="#">Shirts</a>
//                           <a href="#">
//                             <i className="ri-arrow-down-s-line inner_arrow" onClick={() => Toggle('flist')}></i>
//                           </a>
//                         </div>
//                         <div className={`LinkList_one ${activeList === 'flist' ? 'active' : ''}`}>
//                           <div className="Link_content_inner_one">
//                             <ul className="mobile_nav_list_one">
//                               <li className="mobile_nav_item_one"><a href="#">Plain</a></li>
//                               <li className="mobile_nav_item_one"><a href="#">Stripe</a></li>
//                               <li className="mobile_nav_item_one"><a href="#">linen</a></li>
//                               <li className="mobile_nav_item_one"><a href="#">Checks</a></li>
//                               <li className="mobile_nav_item_one"><a href="#">printed</a></li>
//                               <li className="mobile_nav_item_one"><a href="#">overshirt</a></li>
//                               <li className="mobile_nav_item_one"><a href="#">oversized shirt</a></li>
//                               <li className="mobile_nav_item_one"><a href="#">clubwear</a></li>
//                               <li className="mobile_nav_item_one"><a href="#">floral</a></li>
//                               <li className="mobile_nav_item_one"><a href="#">view all</a></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </li>
//                       {/* Continue with the rest of the nested nav items */}
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               {/* Continue with other main nav items similar to the "Shop" item above */}
//               <li className="NavLink"><a href="#">IN the spotlight</a></li>
//               <li className="NavLink"><a href="#">Download App</a></li>
//               <li className="NavLink"><a href="#">Track order</a></li>
//               <li className="NavLink"><a href="#">place a return REquest</a></li>
//               <li className="NavLink"><a href="#">customer support</a></li>
//               <li className="NavLink"><a href="#">Store location</a></li>
//               <li className="NavLink"><a href="#">ReLove</a></li>
//             </ul>
//           </div>
//           <div className="Nav_social_icon">
//             <div className="s_icon">
//               <a href="https://www.snitch.co.in/"><i className="ri-instagram-line"></i></a>
//             </div>
//             <div className="s_icon">
//               <a href="https://www.snitch.co.in/"><i className="ri-facebook-circle-fill"></i></a>
//             </div>
//             <div className="s_icon">
//               <a href="https://www.snitch.co.in/"><i className="ri-video-fill"></i></a>
//             </div>
//             <div className="s_icon">
//               <a href="https://www.snitch.co.in/"><i className="ri-twitter-fill"></i></a>
//             </div>
//             <div className="s_icon">
//               <a href="https://www.snitch.co.in/"><i className="ri-pinterest-fill"></i></a>
//             </div>
//             <div className="s_icon">
//               <a href="https://www.snitch.co.in/"><i className="ri-linkedin-fill"></i></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import '../style/style.css';  // Ensure the path is correct

const Sidebar = ({ isOpen, toggleSidebar }) => {
    console.log('Sidebar isOpen:', isOpen); // Log the isOpen prop to confirm it's being passed correctly
  return (
    <div className={`side_bar_section ${isOpen ? 'side_bar_section_active' : ''}`}>
      <div className="side_navBar">
        <div className="navbar_menu">
          <div className="fixed_header">
            <div>
              <a href="#"><i className="ri-user-3-line user"></i></a>
              <a href="#">LOG IN</a>
            </div>
            <i className="ri-close-line close" onClick={toggleSidebar}></i>
          </div>
          <div className="navbar_list">
            <ul className="nav_item_list">
              <li className="NavLink"><a href="#">new</a></li>
              <li className="NavLink">
                <div className="fdiv_flex">
                  <a href="#">Shop</a>
                  <a href="#"><i className="ri-arrow-down-s-line down_arrow"></i></a>
                </div>
                <div className="LinkList">
                  <div className="Link_content_inner">
                    <ul className="mobile_nav_list">
                      <li className="mobile_nav_item">
                        <div className="flex_mobile_item">
                          <a href="#">Shirts</a>
                          <a href="#"><i className="ri-arrow-down-s-line inner_arrow" onClick={toggleSidebar}></i></a>
                        </div>
                        <div className="LinkList_one">
                          <div className="Link_content_inner_one">
                            <ul className="mobile_nav_list_one">
                              <li className="mobile_nav_item_one"><a href="#">Plain</a></li>
                              <li className="mobile_nav_item_one"><a href="#">Stripe</a></li>
                              <li className="mobile_nav_item_one"><a href="#">linen</a></li>
                              <li className="mobile_nav_item_one"><a href="#">Checks</a></li>
                              <li className="mobile_nav_item_one"><a href="#">printed</a></li>
                              <li className="mobile_nav_item_one"><a href="#">overshirt</a></li>
                              <li className="mobile_nav_item_one"><a href="#">oversized shirt</a></li>
                              <li className="mobile_nav_item_one"><a href="#">clubwear</a></li>
                              <li className="mobile_nav_item_one"><a href="#">floral</a></li>
                              <li className="mobile_nav_item_one"><a href="#">view all</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* Continue with the rest of the nested nav items */}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="NavLink"><a href="#">IN the spotlight</a></li>
              <li className="NavLink"><a href="#">Download App</a></li>
              <li className="NavLink"><a href="#">Track order</a></li>
              <li className="NavLink"><a href="#">place a return request</a></li>
              <li className="NavLink"><a href="#">customer support</a></li>
              <li className="NavLink"><a href="#">Store location</a></li>
              <li className="NavLink"><a href="#">ReLove</a></li>
            </ul>
          </div>
          <div className="Nav_social_icon">
            <div className="s_icon">
              <a href="https://www.snitch.co.in/"><i className="ri-instagram-line"></i></a>
            </div>
            <div className="s_icon">
              <a href="https://www.snitch.co.in/"><i className="ri-facebook-circle-fill"></i></a>
            </div>
            <div className="s_icon">
              <a href="https://www.snitch.co.in/"><i className="ri-video-fill"></i></a>
            </div>
            <div className="s_icon">
              <a href="https://www.snitch.co.in/"><i className="ri-twitter-fill"></i></a>
            </div>
            <div className="s_icon">
              <a href="https://www.snitch.co.in/"><i className="ri-pinterest-fill"></i></a>
            </div>
            <div className="s_icon">
              <a href="https://www.snitch.co.in/"><i className="ri-linkedin-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

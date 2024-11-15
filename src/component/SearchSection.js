// // src/components/SearchSection.js
// import React, { useState } from 'react';
// import '../style/style.css';  // Import your custom CSS for this component


// const SearchSection = () => {
//   const [query, setQuery] = useState('');

//   return (
//     <div className="Search_section">
//       <div className="Search_menu">
//         <div className="search_bar_flex">
//           <div className="search_bar">
//             <a href="shop.html"><button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button></a>
//             <input
//               type="search"
//               name="search"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search"
//             />
//           </div>
//           <div className="close_menu">
//             <i className="fa-solid fa-x"></i>
//           </div>
//         </div>
//         <div className="trending_product">
//           <p>Trending Products</p>
//           <div className="product_grid_item">
//             {/* Add Product Cards Here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchSection;

import React from 'react';
import '../style/style.css';  // Ensure the path is correct

const SearchSection = ({ toggleSearch }) => {
  return (
    <div className="Search_section">
      <div className="Search_menu">
        <div className="search_bar_flex">
          <div className="search_bar">
            <a href="shop.html">
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </a>
            <input type="search" name="search" id="" placeholder="Search" />
          </div>
          <div className="close_menu" onClick={toggleSearch}>
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
        <div className="trending_product">
          <p>Trending Products</p>
          <div className="product_grid_item">
            <div className="pro_wrapper">
              <a href="shop.html">
                <img src="https://www.snitch.co.in/cdn/shop/files/4MSS2449-02-M49.jpg?v=1695880735" alt="Tencil Stripe Pink Shirt" />
                <div className="pro-detail">
                  <span className="title">Tencil Stripe Pink Shirt</span>
                  <span className="price">Rs.1,199</span>
                </div>
              </a>
            </div>
            <div className="pro_wrapper">
              <a href="shop.html">
                <img src="https://www.snitch.co.in/cdn/shop/files/4MSS2449-03-M26.jpg?v=1695983532" alt="Tencil Stripe Navy Shirt" />
                <div className="pro-detail">
                  <span className="title">Tencil Stripe Navy Shirt</span>
                  <span className="price">Rs.1,199</span>
                </div>
              </a>
            </div>
            <div className="pro_wrapper">
              <a href="shop.html">
                <img src="https://www.snitch.co.in/cdn/shop/files/4MSS2449-04-M39.jpg?v=1695880979" alt="Tencil Stripe Yellow Shirt" />
                <div className="pro-detail">
                  <span className="title">Tencil Stripe Yellow Shirt</span>
                  <span className="price">Rs.1,199</span>
                </div>
              </a>
            </div>
            <div className="pro_wrapper">
              <a href="shop.html">
                <img src="https://www.snitch.co.in/cdn/shop/files/4MSO4515-02-3255.jpg?v=1696008000" alt="Sauvie Olive Cargo Pant" />
                <div className="pro-detail">
                  <span className="title">Sauvie Olive Cargo Pant</span>
                  <span className="price">Rs.1,399</span>
                </div>
              </a>
            </div>
            <div className="pro_wrapper">
              <a href="shop.html">
                <img src="https://www.snitch.co.in/cdn/shop/products/Lazar_Oct16535.jpg?v=1668265593&width=120" alt="Smushy Black Shirt" />
                <div className="pro-detail">
                  <span className="title">Smushy Black Shirt</span>
                  <span className="price">Rs.1,299</span>
                </div>
              </a>
            </div>
            <div className="pro_wrapper">
              <a href="shop.html">
                <img src="https://www.snitch.co.in/cdn/shop/products/SNITCH-JUNE1503.jpg?v=1655120022p" alt="Aster White Shirt" />
                <div className="pro-detail">
                  <span className="title">Aster White Shirt</span>
                  <span className="price">Rs.799</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;


import React from 'react';

const NavLinkSiteSmall = () => {
  const toggleWishBtn = () => {
    // Define the toggle wish button function logic here
    console.log('Wishlist button clicked');
  };

  
  return (
    <div className="nav_link_site_small">
      <div className="link_icone">
        <a href="contact.html">
          <i className="fa-sharp fa-solid fa-user"></i>
          <p>Account</p>
        </a>
      </div>
      <div className="link_icone">
        <a href="#product_section3">
          <i className="ri-layout-grid-fill"></i>
          <p>Collections</p>
        </a>
      </div>
      <div className="link_icone">
        <a href="shop.html">
          <i className="fa-solid fa-light fa-shirt"></i>
          <p>New Arrival</p>
        </a>
      </div>
      <div className="link_icone">
        <div onClick={toggleWishBtn}>
          <i className="fa-sharp fa-solid fa-heart"></i>
          <p>Wishlist</p>
        </div>
      </div>
    </div>
  );
};

export default NavLinkSiteSmall;

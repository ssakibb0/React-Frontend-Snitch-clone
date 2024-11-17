import React from 'react';
import '../style/style.css';  // Ensure the path is correct

const CartSection = ({ toggleCartSection }) => {
  return (
    <div className="Cart_section">
      <div className="Cart_side_menu">
        <div className="cart_menu">
          <div className="heading">
            <h2>Cart</h2>
            <i className="ri-close-line close" onClick={toggleCartSection}></i>
          </div>
          <div className="cart_contant" id="cartItem">
            <p className="cart_text">your cart is empty</p>
          </div>
          <div className="foot">
            <h3>Total</h3>
            <h2 id="total">Rs. 0.00</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;

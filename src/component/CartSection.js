// // src/components/CartSection.js
// import React from 'react';
// import '../style/style.css';  // Import your custom CSS for this component


// const CartSection = ({ cartItems }) => {
//   const total = cartItems.reduce((sum, item) => sum + item.price, 0);
//   return (
//     <div className="Cart_section">
//       <div className="Cart_side_menu">
//         <div className="cart_menu">
//           <div className="heading">
//             <h2>Cart</h2>
//             <i className="ri-close-line close"></i>
//           </div>
//           <div className="cart_contant" id="cartItem">
//             {cartItems.length === 0 ? (
//               <p className="cart_text">Your cart is empty</p>
//             ) : (
//               <div>
//                 {cartItems.map((item, index) => (
//                   <div key={index} className="cart_item">
//                     <span>{item.name}</span>
//                     <span>Rs. {item.price}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div className="foot">
//             <h3>Total</h3>
//             <h2 id="total">Rs. {total.toFixed(2)}</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartSection;


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

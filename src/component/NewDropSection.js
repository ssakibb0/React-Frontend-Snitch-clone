// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import '../style/style.css';  // Ensure the path is correct
// import '../style/shop.css';  // Ensure the path is correct


// const NewDropsSection = () => {
//     const sizes = ['M', 'L', 'XL', 'XXL'];
//     const controls = useAnimation(); 
//     const [ref, inView] = useInView(); 
//     useEffect(() => { 
//         if (inView) { 
//             controls.start('visible'); 
//         } 
//         else {
//              controls.start('hidden'); }
//              }, [controls, inView]);
//     const products = [
//         {
//             id: 1,
//             title: "Pure Opulence",
//             description: "Fall in love with all-white shirts",
//             img: "https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54059_360x.jpg?v=1671105813",
//             img2: "https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54062_360x.jpg?v=1671105813",
//             price: 999.0,
//             qty: 1,
//         },
//         {
//             id: 2,
//             title: "Aster Red Shirt",
//             description: "Fall in love with all-white shirts",
//             img: "https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54090_360x.jpg?v=1671105702 ",
//             img2: "https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54077_360x.jpg?v=1671105702",
//             price: 999.0,
//             qty: 1,
//         },
//         {
//             id: 3,
//             title: "Active Navy Stretch Pants",
//             description: "Fall in love with all-white shirts",
//             img: "https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7097_59d8d929-37df-4d1c-b654-b5cbd3a444f7_360x.jpg?v=1663086621",
//             img2: "https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7086_9be918af-9c78-4f1c-a296-79a6fe837103_360x.jpg?v=1663086621",
//             price: 999.0,
//             qty: 1,
//         },
//         {
//             id: 4,
//             title: "Mould Linen White Shirt",
//             description: "Fall in love with all-white shirts",
//             img: "https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7199_360x.jpg?v=1656067839",
//             img2: "https://www.snitch.co.in/cdn/shop/products/F-H_3704e73d-5bbe-4f0b-bc8c-91003e589215_360x.jpg?v=1656067839",
//             price: 999.0,
//             qty: 1,
//         },
//         {
//             id: 5,
//             title: "Aster White Shirt",
//             description: "Fall in love with all-white shirts",
//             img: "https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7097_0518c82f-4b2b-4372-b386-a54454ff8790_360x.jpg?v=1663086617",
//             img2: "https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7086_4ba59664-cdc4-405b-9acc-f01218f9d175_360x.jpg?v=1663086617",
//             price: 999.0,
//             qty: 1,
//         },
//         {
//             id: 6,
//             title: "Metamorphosis Black Oversized T-Shirt",
//             description: "Fall in love with all-white shirts",
//             img: "https://www.snitch.co.in/cdn/shop/products/FH_360x.jpg?v=1656074340",
//             img2: "https://www.snitch.co.in/cdn/shop/products/F-h-1_360x.jpg?v=1656074340",
//             price: 1999.0,
//             qty: 1,
//         },
//         {
//             id: 7,
//             title: "Whis Navy Tapered Cargo Pant",
//             description: "Fall in love with all-white shirts",
//             img: "https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7215_360x.jpg?v=1656067967",
//             img2: "https://www.snitch.co.in/cdn/shop/products/H-f_360x.jpg?v=1656067967",
//             price: 1999.0,
//             qty: 1,
//         },
//         {
//             id: 8,
//             title: "Balmy Red Sweater",
//             description: "Fall in love with all-white shirts",
//             img: "https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7074_360x.jpg?v=1656067981",
//             img2: "https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7086_360x.jpg?v=1656067981",
//             price: 1999.0,
//             qty: 1,
//         },
//         // Additional products here
//     ];


//     const animationVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

//       return (
//         <div id="product_section">
//           <div className="page_width">
//             <div className="header_title">
//               <h2>New drops</h2>
//             </div>
//             <div className="Product_wrapper" id="Product_wrapper" ref={ref}>
//               {products.map((product, index) => (
//                 //  <Fade key={product.id} bottom>
//                 <motion.div key={product.id} initial="hidden" animate={controls} variants={animationVariants} transition={{ duration: 0.5, delay: index * 0.2 }} className="product_inner_wrapper" >

//                 {/* <div className="product_inner_wrapper" key={product.id}> */}
//                   <div className="pro_img">
//                     <img src={product.img} alt={product.title} />
//                     <div className="overlay">
//                       <img src={product.img2} alt={product.title} className="seimg" />
//                     </div>
//                   </div>
//                   <div className="desc">
//                     <h2 className="f12">{product.title}</h2>
//                     <h4>Rs. { product.price}</h4>
//                     <div className="size pd-f" id="sizeg"> {sizes.map((size, index) => ( <span key={index} className="Cl-h1"> {size} </span> ))} </div>
//                   </div>
//                 {/* </div> */}
//                 </motion.div>
//               ))}
//             </div>
//             <div className="view-btn">
//               <a href="shop.html">view all</a>
//             </div>
//           </div>
//         </div>
//       );
//     };
    
// export default NewDropsSection;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { products } from '../constant/NewDropProduct';
import '../style/style.css';  // Ensure the path is correct
import '../style/shop.css';  // Ensure the path is correct

const NewDropsSection = () => {
  const sizes = ['M', 'L', 'XL', 'XXL'];

 

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="product_section">
      <div className="page_width">
        <div className="header_title">
          <h2>New drops</h2>
        </div>
        <div className="Product_wrapper" id="Product_wrapper">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={animationVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product_inner_wrapper"
            >
              <div className="pro_img">
                <img src={product.img} alt={product.title} />
                <div className="overlay">
                  <img src={product.img2} alt={product.title} className="seimg" />
                </div>
              </div>
              <div className="desc">
                <h2 className="f12">{product.title}</h2>
                <h4>Rs. {product.price}</h4>
                <div className="size pd-f" id="sizeg">
                  {sizes.map((size, idx) => (
                    <span key={idx} className="Cl-h1">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="view-btn">
          <a href="shop.html">view all</a>
        </div>
      </div>
    </div>
  );
};

export default NewDropsSection;


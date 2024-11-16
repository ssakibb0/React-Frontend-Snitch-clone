// import React from 'react';

// const StepIntoSpotlightSection = () => {
//   return (
//     <div id="product_section">
//       <div className="page_width">
//         <div className="header_title">
//           <h2>STEP INTO THE SPOTLIGHT</h2>
//         </div>
//         <div className="Product_wrapper fivelayout" id="Product_wrapper">
//           <div className="product_inner_wrapper" data-aos="fade-down">
//             <div className="pro_img">
//               <img src="https://www.snitch.co.in/cdn/shop/files/IMG_0537.jpg?v=1695038114&width=1800" alt="Contrast White Low Top Sneaker" />
//               <div className="overlay">
//                 <img src="https://www.snitch.co.in/cdn/shop/files/IMG_0541.jpg?v=1695038114&width=1800" alt="Contrast White Low Top Sneaker Overlay" className="seimg" />
//               </div>
//             </div>
//             <div className="desc">
//               <h2 className="f12">Contrast White Low Top Sneaker</h2>
//               <h4>Rs. 2,190</h4>
//               <div className="size pd-f" id="sizeg">
//                 <span className="Cl-h1 Cl-h1_H">40</span>
//                 <span className="Cl-h1">41</span>
//                 <span className="Cl-h1">42</span>
//                 <span className="Cl-h1">43</span>
//                 <span className="Cl-h1">44</span>
//               </div>
//             </div>
//           </div>

//           {/* Repeat the product inner wrapper for each product */}
//           <div className="product_inner_wrapper" data-aos="fade-down">
//             <div className="pro_img">
//               <img src="https://www.snitch.co.in/cdn/shop/files/IMG_0591.jpg?v=1695036991&width=1800" alt="Panelled White Low Top Sneakerss" />
//               <div className="overlay">
//                 <img src="https://www.snitch.co.in/cdn/shop/files/IMG_0595.jpg?v=1695037016&width=1800" alt="Panelled White Low Top Sneakerss Overlay" className="seimg" />
//               </div>
//             </div>
//             <div className="desc">
//               <h2 className="f12">Panelled White Low Top Sneakerss</h2>
//               <h4>Rs. 2,190</h4>
//               <div className="size pd-f" id="sizeg">
//                 <span className="Cl-h1 Cl-h1_H">40</span>
//                 <span className="Cl-h1">41</span>
//                 <span className="Cl-h1">42</span>
//                 <span className="Cl-h1">43</span>
//                 <span className="Cl-h1">44</span>
//               </div>
//             </div>
//           </div>

//           <div className="product_inner_wrapper" data-aos="fade-down">
//             <div className="pro_img">
//               <img src="https://www.snitch.co.in/cdn/shop/files/IMG_0759.jpg?v=1695036990&width=1800" alt="Combined Piece White SneakerR" />
//               <div className="overlay">
//                 <img src="https://www.snitch.co.in/cdn/shop/files/IMG_0756.jpg?v=1695036990&width=1800" alt="Combined Piece White SneakerR Overlay" className="seimg" />
//               </div>
//             </div>
//             <div className="desc">
//               <h2 className="f12">Combined Piece White SneakerR</h2>
//               <h4>Rs. 2,190</h4>
//               <div className="size pd-f" id="sizeg">
//                 <span className="Cl-h1 Cl-h1_H">40</span>
//                 <span className="Cl-h1">41</span>
//                 <span className="Cl-h1">42</span>
//                 <span className="Cl-h1">43</span>
//                 <span className="Cl-h1">44</span>
//               </div>
//             </div>
//           </div>

//           <div className="product_inner_wrapper" data-aos="fade-down">
//             <div className="pro_img">
//               <img src="https://www.snitch.co.in/cdn/shop/files/IMG_0848.jpg?v=1695036641&width=1800ss" alt="Basic Blue Casual Sneaker" />
//               <div className="overlay">

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../style/style.css'; // Ensure the path is correct 
import '../style/shop.css'; // Ensure the path is correct

const StepIntoSpotlightSection = () => {
  const products = [
    {
      img1: "https://www.snitch.co.in/cdn/shop/files/IMG_0537.jpg?v=1695038114&width=1800",
      img2: "https://www.snitch.co.in/cdn/shop/files/IMG_0541.jpg?v=1695038114&width=1800",
      title: "Contrast White Low Top Sneaker",
      price: "Rs. 2,190",
      sizes: [40, 41, 42, 43, 44],
    },
    {
      img1: "https://www.snitch.co.in/cdn/shop/files/IMG_0591.jpg?v=1695036991&width=1800",
      img2: "https://www.snitch.co.in/cdn/shop/files/IMG_0595.jpg?v=1695037016&width=1800",
      title: "Panelled White Low Top Sneakers",
      price: "Rs. 2,190",
      sizes: [40, 41, 42, 43, 44],
    },
    {
      img1: "https://www.snitch.co.in/cdn/shop/files/IMG_0759.jpg?v=1695036990&width=1800",
      img2: "https://www.snitch.co.in/cdn/shop/files/IMG_0756.jpg?v=1695036990&width=1800",
      title: "Combined Piece White Sneaker",
      price: "Rs. 2,190",
      sizes: [40, 41, 42, 43, 44],
    },
    {
      img1: "https://www.snitch.co.in/cdn/shop/files/IMG_0848.jpg?v=1695036641&width=1800",
      img2: "https://www.snitch.co.in/cdn/shop/files/IMG_0846_1.jpg?v=1695638430&width=1800",
      title: "Basic Blue Casual Sneaker",
      price: "Rs. 2,190",
      sizes: [40, 41, 42, 43, 44],
    },
    {
      img1: "https://www.snitch.co.in/cdn/shop/files/IMG_0828.jpg?v=1695036582&width=1800",
      img2: "https://www.snitch.co.in/cdn/shop/files/IMG_0825.jpg?v=1695036582&width=1800",
      title: "Basic White Casual Sneaker",
      price: "Rs. 2,190",
      sizes: [40, 41, 42, 43, 44],
    },
  ];

  const handleSizeClick = (size, product) => {
    console.log(`Selected size ${size} for product ${product.title}`);
  };

  const animationVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const controls = useAnimation(); 
  const [ref, inView] = useInView();
   useEffect(() => { 
    if (inView) { 
        controls.start('visible');
     } 
     else {
         controls.start('hidden'); } 
        },[controls, inView]);
  return (
    <div id="product_section">
      <div className="page_width">
        <div className="header_title">
          <h2>STEP INTO THE SPOTLIGHT</h2>
        </div>
        <div className="Product_wrapper fivelayout" id="Product_wrapper" ref={ref}>
          {products.map((product, index) => (
            // <Fade key={product.id} bottom ssrFadeout>
            // <div className="product_inner_wrapper" key={index}>
            // <motion.div key={product.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationVariants} transition={{ duration: 0.5, delay: index * 0.1 }} className="product_inner_wrapper" >
              <motion.div key={product.id} initial="hidden" animate={controls} variants={animationVariants} transition={{ duration: 0.5, delay: index * 0.1 }} className="product_inner_wrapper">
              <div className="pro_img">
                <img src={product.img1} alt={product.title} />
                <div className="overlay">
                  <img src={product.img2} alt={product.title} className="seimg" />
                </div>
              </div>
              <div className="desc">
                <h2 className="f12">{product.title}</h2>
                <h4>{product.price}</h4>
                <div className="size pd-f" id="sizeg">
                  {product.sizes.map((size, idx) => (
                    <span
                      key={idx}
                      className="Cl-h1"
                      onClick={() => handleSizeClick(size, product)}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepIntoSpotlightSection;

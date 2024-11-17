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


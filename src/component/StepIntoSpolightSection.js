import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { products } from '../constant/StepIntoSpotlightSecton';
import '../style/style.css'; // Ensure the path is correct 
import '../style/shop.css'; // Ensure the path is correct

const StepIntoSpotlightSection = () => {

  const handleSizeClick = (size, product) => {
    console.log(`Selected size ${size} for product ${product.title}`);
  };

  const animationVariants = { 
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 } 
};
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

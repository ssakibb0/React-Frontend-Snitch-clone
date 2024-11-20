import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../style/style.css';
import '../style/shop.css';

const BrandAmbassador = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      id="brand-back-img"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 2 }}
    >
      <div className="page_width">
        <div className="backgourn-wrapper">
          <img src="img/back4.webp" alt="back4" />
        </div>
        <div className="backgourn-wrapper">
          <img src="img/backmapimg.webp" alt="back4" />
        </div>
        <div className="backgourn-wrapper">
          <img src="img/backgold.webp" alt="back4" />
        </div>
      </div>
    </motion.div>
  );
};

export default BrandAmbassador;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../style/style.css';
import '../style/shop.css';

const Footer = () => {
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
      id="Footer-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="page_width">
        <footer>
          <div className="flex_footer_div" style={{ textAlign: 'left' }}>
            <div className="footer_contant1">
              <ul>
                <li><a href="#">flagship store now open</a></li>
                <li><a href="#">bangalore: get Directions</a></li>
              </ul>
            </div>
            <div className="footer_contant2">
              <ul>
                <li><a href="#">contact Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="footer_contant3">
              <ul>
                <li><a href="#">Place Returns request</a></li>
                <li><a href="#">Returns policy</a></li>
                <li><a href="#">Track your order</a></li>
              </ul>
            </div>
            <div className="footer_contant4">
              <ul>
                <li><a href="#">Customer Care</a></li>
                <li><a href="#">timings: 10 Am - 6:00 PM (Mon-Sat)</a></li>
                <li title="6354728270"><a href="#">Call: +91 6354728270</a></li>
                <li title="Sohan@gmail.com"><a href="#">E-mail: Sohan@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer_sec_contant">
            <h4 className="open_click_footer">Sign up and save</h4>
            <div className="hide-footer">
              <p>sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</p>
              <div className="input_div">
                <form>
                  <input type="email" placeholder="Enter your email" required />
                  <input type="submit" value="subscribe" />
                </form>
              </div>
              <div className="social_icon">
                <a href="https://www.snitch.co.in/"><i className="ri-instagram-line"></i></a>
                <a href="https://www.snitch.co.in/"><i className="ri-facebook-circle-fill"></i></a>
                <a href="https://www.snitch.co.in/"><i className="ri-video-fill"></i></a>
                <a href="https://www.snitch.co.in/"><i className="ri-twitter-fill"></i></a>
                <a href="https://www.snitch.co.in/"><i className="ri-pinterest-fill"></i></a>
                <a href="https://www.snitch.co.in/"><i className="ri-linkedin-fill"></i></a>
              </div>
            </div>
            <p className="footer_text">© 2023 SNITCH | All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default Footer;

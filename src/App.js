// // import './App.css';
// // import { useState } from 'react'; // Importing useState to manage state
// // import TopHeader from './component/TopHeader';
// // import Header from './component/Header';
// // import Sidebar from './component/Sidebar';
// // import CartSection from './component/CartSection';
// // import SearchSection from './component/SerachSection'; // Fixed the typo 'SerachSection' to 'SearchSection'

// // function App() {
// //   // Define state variables
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // For sidebar open/close
// //   // const [cartItems, setCartItems] = useState([]);  // For managing the cart items
// //   const [cartItems, setCartItems] = useState([
// //     { name: 'Tencil Stripe Pink Shirt', price: 1199 },
// //     { name: 'Sauvie Olive Cargo Pant', price: 1399 },
// //   ]);
// //   // Toggle function to open/close sidebar
// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);  // Toggle between true and false
// //   };

// //   console.log("Sidebar open state: ", isSidebarOpen);
// //   console.log("Cart Items: ", cartItems);

// //   return (
// //     <div className="App">
// //       <TopHeader />
// //       <Header />
// //       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// //       <CartSection cartItems={cartItems} />
// //       <SearchSection />
// //     </div>
// //   );
// // }

// // export default App;

// import './App.css';
// import { useState } from 'react';
// import TopHeader from './component/TopHeader';
// import Header from './component/Header';
// import Sidebar from './component/Sidebar';
// import CartSection from './component/CartSection';
// import SearchSection from './component/SearchSection';  // Corrected the typo
// import ThreadSection from './component/ThreadSection';
// import SampleSectionProduct from './component/SampleSectionProduct';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For sidebar open/close
//   const [isCartOpen, setIsCartOpen] = useState(false); // For cart section open/close
//   const [isSearchOpen, setIsSearchOpen] = useState(false); // For search section open/close

//   const [cartItems, setCartItems] = useState([
//     { name: 'Tencil Stripe Pink Shirt', price: 1199 },
//     { name: 'Sauvie Olive Cargo Pant', price: 1399 },
//   ]);

//   // const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const toggleCartSection = () => setIsCartOpen(!isCartOpen);
//   const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

//   const toggleSidebar = () => { console.log('Toggling sidebar:', !isSidebarOpen); setIsSidebarOpen(!isSidebarOpen); };

//   return (
//     <div className="App">
//       <TopHeader />
//       <Header 
//         toggleSidebar={toggleSidebar}
//         toggleCartSection={toggleCartSection}
//         toggleSearch={toggleSearch}
//       />
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       {isCartOpen && <CartSection cartItems={cartItems} toggleCartSection={toggleCartSection} />}
//       {isSearchOpen && <SearchSection toggleSearch={toggleSearch} />}
//       <SampleSectionProduct/>
//       <ThreadSection/>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { useState, useEffect } from 'react';
import TopHeader from './component/TopHeader';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import CartSection from './component/CartSection';
import SearchSection from './component/SearchSection';  // Corrected the typo
import ThreadSection from './component/ThreadSection';
import SampleSectionProduct from './component/SampleSectionProduct';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For sidebar open/close
  const [isCartOpen, setIsCartOpen] = useState(false); // For cart section open/close
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For search section open/close

  const [cartItems, setCartItems] = useState([
    { name: 'Tencil Stripe Pink Shirt', price: 1199 },
    { name: 'Sauvie Olive Cargo Pant', price: 1399 },
  ]);

  const toggleSidebar = () => { 
    console.log('Toggling sidebar:', !isSidebarOpen); 
    setIsSidebarOpen(!isSidebarOpen); 
  };
  const toggleCartSection = () => setIsCartOpen(!isCartOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav_section');
      if (window.scrollY > 50) {
        nav.classList.add('nav_section_background');
      } else {
        nav.classList.remove('nav_section_background');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <TopHeader />
      <Header 
        toggleSidebar={toggleSidebar}
        toggleCartSection={toggleCartSection}
        toggleSearch={toggleSearch}
      />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isCartOpen && <CartSection cartItems={cartItems} toggleCartSection={toggleCartSection} />}
      {isSearchOpen && <SearchSection toggleSearch={toggleSearch} />}
      <SampleSectionProduct />
      <ThreadSection />
    </div>
  );
}

export default App;

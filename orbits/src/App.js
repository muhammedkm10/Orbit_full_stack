// import React from "react";
// import Navbar from "./components/navbar/Navbar";
// import { BrowserRouter } from "react-router-dom";

// import AnimatedRoutes from "./components/AnimatedRoutes";

// import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./components/footer/Footer";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <AnimatedRoutes />

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./Context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import AdminRoutes from './admin_side/AdminRoutes'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={
            <CartProvider>
              <Navbar />
              <AnimatedRoutes />
              <ScrollToTopButton />
              <Footer />
            </CartProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

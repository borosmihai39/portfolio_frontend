import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import ScrollToTop from "react-scroll-to-top";
import "./App.scss";

const App = () => {
  const [showScrollToTopMobileMenu, setShowScrollToTopMobileMenu] =
    React.useState(true);
  return (
    <div className="app">
      <Navbar setShowScrollToTopMobileMenu={setShowScrollToTopMobileMenu} />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      {showScrollToTopMobileMenu && (
        <ScrollToTop
          smooth
          color="#313BAC"
          style={{ border: "1px solid black", width: "40px", height: "40px" }}
        />
      )}
    </div>
  );
};

export default App;

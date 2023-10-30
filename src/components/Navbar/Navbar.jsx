import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = ({ setShowScrollToTopMobileMenu }) => {
  const [toggle, setToggle] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="app__navbar">
      <div
        className="app__navbar-logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer", zIndex: 3 }}
      >
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonials", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
            setShowScrollToTopMobileMenu(false);
          }}
        />

        <AnimatePresence>
          {toggle && (
            <motion.div
              className="app__navbar-menu-items"
              animate={{ x: 0 }}
              initial={{ x: 300 }}
              exit={{ x: 320 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX
                onClick={() => {
                  setToggle(false);
                  setShowScrollToTopMobileMenu(true);
                }}
              />
              <ul>
                {[
                  "home",
                  "about",
                  "work",
                  "skills",
                  "testimonials",
                  "contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => {
                        setToggle(false);
                        setShowScrollToTopMobileMenu(true);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

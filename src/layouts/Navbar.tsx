import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logodark.png";
import Download from "../assets/download.svg";

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Handle scroll direction and update navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);

      // Only toggle visibility if scrollY changes significantly
      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsScrolled(currentScrollY > 0);
      lastScrollY.current = currentScrollY;
    };

    // Use requestAnimationFrame for better performance on iOS
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    handleScroll(); // Initial run to detect scroll on load

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (!isModalOpen) { // Only manage scroll from here if modal is not open
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }
  }, [menuOpen, isModalOpen]);

  return (
    <>
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          showNavbar ? "top-0" : "-top-[130.18px]"
        } ${
          isScrolled
            ? "h-[70px] bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md shadow-md"
            : "h-[80.18px]"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 h-full flex justify-between items-center transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center">
            <img
              src={Logo}
              alt="AftA Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-[40px] w-[127.8px] pt-0" : "h-[40px] w-[127.8px]"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ml-[4rem] gap-[40px] lg:pr-[1.3rem] 2xl:pr-[5rem]">
         <NavLink
  to="/about"
  className={({ isActive }) =>
    `group text-primary text-base font-normal transition-all duration-100 ${
      isActive ? 'text-primary' : ''
    }`
  }
>
  <span className="group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
    About
  </span>
</NavLink>

            <NavLink
              to="/feature"
              className={({ isActive }) =>
    `group text-primary text-base font-normal transition-all duration-100 ${
                  isActive
                    ? "text-primary"
                    : ""
                }`
              }
            >
  <span className="group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
    Features
  </span>
              </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) =>
    `group text-primary text-base font-normal transition-all duration-100 ${
                  isActive
                    ? "text-primary"
                    : ""
                }`
              }
            >
  <span className="group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
    Community
  </span>
              </NavLink>
                       <NavLink
              to="/community"
              className={({ isActive }) =>
    `group text-primary text-base font-normal transition-all duration-100 ${
                  isActive
                    ? "text-primary"
                    : ""
                }`
              }
            >
  <span className="group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
Privacy 
 </span>
              </NavLink>
                       <NavLink
              to="/community"
              className={({ isActive }) =>
    `group text-primary text-base font-normal transition-all duration-100 ${
                  isActive
                    ? "text-primary"
                    : ""
                }`
              }
            >
  <span className="group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
    Support
  </span>
              </NavLink>
     
          </div>

<button
  className="
    group
    hidden lg:flex items-center py-[12px] px-[40px] leading-[24px]
    rounded-[90px]
    text-white text-sm font-normal
    bg-[rgba(20,80,72,1)]
    hover:bg-black
    transition-all duration-300
    overflow-hidden
  "
>

  
  {/* Content on top */}
  <span className="relative hidden lg:flex items-center z-10">
    <img
      src={Download}
      className="h-5 w-6 pr-2 transition-all duration-300"
      alt="Download"
    />
    Get The App Now
  </span>
</button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
className={`lg:hidden fixed top-0 left-0 h-screen w-3/4 z-[60]  bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md shadow-md transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link
            to="/"
            className="text-2xl font-bold flex justify-center items-center"
          >
            <img
              src={Logo}
              alt="Paul Smith Initiative"
              className={`transition-all my-5 duration-300 ${
                isScrolled ? "h-[40px] pt-0" : "h-[40px] pt-2"
              }`}
            />
          </Link>

          <div className="flex flex-col items-center gap-6 py-10">
         
         <NavLink
  to="/about"
  className={({ isActive }) =>
    `group text-primary text-base font-normal transition-all duration-100  py-[12px] px-[40px] leading-[24px] border-2 border-white bg-white rounded-[90px] text-[12px] hover:border-primary z-[70] hover:!text-primary ${
      isActive ? 'text-primary' : ''
    }`
  }
>
  <span className="group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
    About
  </span>
</NavLink>

            <NavLink
              to="/feature"
              className={({ isActive }) =>
    `group text-primary text-base font-normal transition-all duration-100  py-[12px] px-[40px] leading-[24px] border-2 border-white bg-white rounded-[90px] text-[12px] hover:border-primary z-[70] hover:!text-primary ${
                  isActive
                    ? "text-primary"
                    : ""
                }`
              }
            >
  <span className="group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
    Features
  </span>
              </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) =>
    `group text-primary text-base font-normal transition-all duration-100  py-[12px] px-[40px] leading-[24px] border-2 border-white bg-white rounded-[90px] text-[12px] hover:border-primary z-[70] hover:!text-primary ${
                  isActive
                    ? "text-primary"
                    : ""
                }`
              }
            >
  <span className="group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
    Community
  </span>
              </NavLink>
                       <NavLink
              to="/community"
              className={({ isActive }) =>
    `group text-primary text-base font-normal transition-all duration-100  py-[12px] px-[40px] leading-[24px] border-2 border-white bg-white rounded-[90px] text-[12px] hover:border-primary z-[70] hover:!text-primary ${
                  isActive
                    ? "text-primary"
                    : ""
                }`
              }
            >
  <span className="group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
Privacy 
 </span>
              </NavLink>
                       <NavLink
              to="/community"
              className={({ isActive }) =>
    `group text-primary text-base font-normal transition-all duration-100 py-[12px] px-[40px] leading-[24px] border-2 border-white bg-white rounded-[90px] text-[12px] hover:border-primary z-[70] hover:!text-primary ${
                  isActive
                    ? "text-primary"
                    : ""
                }`
              }
            >
  <span className="group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
    Support
  </span>
              </NavLink>
     
       
 <button
  className="
    group
    flex items-center py-[12px] px-[40px] leading-[24px]
    rounded-[90px]
    text-white text-sm font-normal
    bg-[rgba(20,80,72,1)]
    hover:bg-black
    transition-all duration-300
    overflow-hidden
    relative
  "
>

  
  {/* Content on top */}
  <span className="relative flex items-center z-10">
    <img
      src={Download}
      className="h-5 w-6 pr-2 transition-all duration-300"
      alt="Download"
    />
    Get The App Now
  </span>
</button>
          </div>
        </div>
      </nav>
      
      {/* Donation Modal - Use the improved DonationModal component */}
    </>
  );
};

export default Navbar;
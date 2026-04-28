import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import SideBar from "./SideBar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const router = useRouter();
  
  // Use a ref to store the last scroll Y position
  const lastScrollY = useRef(0);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Update sticky state if scroll > 50px
    setIsSticky(currentScrollY > 50);
    
    // Determine scroll direction: if scrolling down and past 100px, hide header
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
    
    // Update the last scroll position
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }
    return () => {
      document.body.classList.remove("lock-scroll");
    };
  }, [isSidebarOpen]);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Project", link: "/", hasDropdown: true },
    // { name: "News and Media", link: "/news" },
    { name: "Blogs", link: "/blogs" },
    { name: "Careers", link: "/career" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <motion.div
      initial={{ y: 0 }}
      // animate={{ y: isScrolledDown ? -120 : 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`${
        isSticky
          ? "bg-nav z-[99999] shadow-md bg-header "
          : "bg-transparent"
      } fixed top-0 left-0 w-full z-[10] transition-all duration-300`}
    >
      <div className="flex items-center justify-between w-full px-5 py-3 xl:px-32">
        {/* Logo */}
        <Image
          className={`${
            isSticky
              ? "lg:w-[4.7rem] w-[3.5rem] !cursor-pointer lg:h-[4.7rem]"
              : "lg:w-[5.6rem] w-[3.5rem] !cursor-pointer lg:h-[6.25rem]"
          }`}
          src={"/Icons/logo.svg"}
          height={100}
          width={100}
          onClick={() => {
            router.push("/");
          }}
          alt="Logo"
        />

        {/* Menu Icon */}
        <div
          onClick={toggleSidebar}
          className="bg-secondary-color rounded-[4.5rem] cursor-pointer flex lg:pr-3 lg:pl-6 pl-4 pr-3 py-2 items-center justify-between gap-[1rem]"
        >
          <span className="text-center Alata text-[1rem] font-[500] text-white">
            Menu
          </span>

          <div className="bg-white rounded-[3.8rem] lg:p-[0.9rem] p-[0.5]">
            <svg
              width="25"
              className="!cursor-pointer"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="jam:menu">
                <path
                  id="Vector"
                  d="M6.59277 7H11.5928C11.858 7 12.1123 7.10536 12.2999 7.29289C12.4874 7.48043 12.5928 7.73478 12.5928 8C12.5928 8.26522 12.4874 8.51957 12.2999 8.70711C12.1123 8.89464 11.858 9 11.5928 9H6.59277C6.32756 9 6.0732 8.89464 5.88567 8.70711C5.69813 8.51957 5.59277 8.26522 5.59277 8C5.59277 7.73478 5.69813 7.48043 5.88567 7.29289C6.0732 7.10536 6.32756 7 6.59277 7ZM13.5928 15H18.5928C18.858 15 19.1123 15.1054 19.2999 15.2929C19.4874 15.4804 19.5928 15.7348 19.5928 16C19.5928 16.2652 19.4874 16.5196 19.2999 16.7071C19.1123 16.8946 18.858 17 18.5928 17H13.5928C13.3276 17 13.0732 16.8946 12.8857 16.7071C12.6981 16.5196 12.5928 16.2652 12.5928 16C12.5928 15.7348 12.6981 15.4804 12.8857 15.2929C13.0732 15.1054 13.3276 15 13.5928 15ZM6.59277 11H18.5928C18.858 11 19.1123 11.1054 19.2999 11.2929C19.4874 11.4804 19.5928 11.7348 19.5928 12C19.5928 12.2652 19.4874 12.5196 19.2999 12.7071C19.1123 12.8946 18.858 13 18.5928 13H6.59277C6.32756 13 6.0732 12.8946 5.88567 12.7071C5.69813 12.5196 5.59277 12.2652 5.59277 12C5.59277 11.7348 5.69813 11.4804 5.88567 11.2929C6.0732 11.1054 6.32756 11 6.59277 11Z"
                  fill="#AD843E"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Sidebar Modal */}
      {isSidebarOpen && (
        <SideBar
          toggleSidebar={toggleSidebar}
          navLinks={navLinks}
          showProjectDropdown={showProjectDropdown}
          setShowProjectDropdown={setShowProjectDropdown}
        />
      )}

      {/* Background Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[15]"
          onClick={toggleSidebar}
        ></div>
      )}
    </motion.div>
  );
};

export default Header;

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { cleanImage } from "../imageHandling";
import { SiFacebook } from "react-icons/si";

const SideBar = ({
  toggleSidebar,
  navLinks,
  showProjectDropdown,
  setShowProjectDropdown,
}) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div className="">
      <motion.div
        className="fixed top-0 right-0 h-full xl:w-[30rem] w-[20rem]   bg-SnowWhite !z-[999999999] flex flex-col p-5"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Close Button */}
        <div className="flex justify-between">
          <div className="">
            <Image
              className={` ${"lg:w-[5.6rem] w-[3.5rem] !cursor-pointer lg:h-[6.25rem]"}`}
              src={"/Icons/logo.svg"}
              height={100}
              width={100}
              alt="Logo"
            />
          </div>
          <button
            className="w-[3rem] h-[3rem] cursor-pointer"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#AD843E"
              className="w-full h-full"
            >
              <path
                fillRule="evenodd"
                d="M6.225 4.811a.75.75 0 011.06 0L12 9.526l4.715-4.715a.75.75 0 111.06 1.06L13.06 10.586l4.715 4.715a.75.75 0 01-1.06 1.06L12 11.646l-4.715 4.715a.75.75 0 01-1.06-1.06l4.715-4.715-4.715-4.715a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/* Sidebar Content */}

        <div className="mt-20 space-y-5">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 0.99 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() =>
                link.hasDropdown && setShowProjectDropdown(true)
              }
              onMouseLeave={() =>
                link.hasDropdown && setShowProjectDropdown(false)
              }
            >
              <Link
                onClick={
                  link.name == "Project" ? () => {} : () => toggleSidebar()
                }
                href={link.link}
                className="lg:text-[1.5rem] text-[1.2rem] text-secondary-color font-[800] mont  hover:text-primary-color transition-colors duration-200"
              >
                <h2>{link.name}</h2>
              </Link>

              {/* Dropdown for Project */}
              {link.hasDropdown && showProjectDropdown && (
                <motion.div
                  className="ml-4 mt-2 space-y-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    onClick={() => {
                      toggleSidebar(), setShowProjectDropdown(false);
                    }}
                    href="/projects/residential"
                    className="block xl:text-[1.5rem] text-[1rem] text-secondary-color mont hover:text-primary-color transition-colors duration-200 font-semibold"
                  >
                    <h2>Residential</h2>
                  </Link>
                  <Link
                    onClick={() => {
                      toggleSidebar(), setShowProjectDropdown(false);
                    }}
                    href="/projects/commercial"
                    className="block xl:text-[1.5rem] text-[1rem] text-secondary-color mont hover:text-primary-color transition-colors duration-200 font-semibold"
                  >
                    <h2>Commercial</h2>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col  h-full justify-end ">
          {/* <div className="flex gap-5 justify-center border-t-setext-secondary-color border-t-2 border-secondary-color py-3">
            <Link target="_blank" href={"https://www.facebook.com/mibuilders"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xl:h-[2rem] xl:w-[2rem] h-[1.5rem] w-[1.5rem] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all"
                viewBox="0 0 14 26"
                fill="none"
              >
                <g clip-path="url(#clip0_204_9478)">
                  <path
                    d="M12.8108 2.04492V5.7833H10.5876C9.77577 5.7833 9.22824 5.95322 8.94502 6.29308C8.66181 6.63293 8.52021 7.1427 8.52021 7.82242V10.4987H12.6692L12.117 14.6903H8.52021V25.4381H4.1871V14.6903H0.576172V10.4987H4.1871V7.41175C4.1871 5.65586 4.678 4.29409 5.65979 3.32645C6.64158 2.35882 7.94907 1.875 9.58225 1.875C10.97 1.875 12.0462 1.93164 12.8108 2.04492Z"
                    fill="#AD843E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_204_9478">
                    <rect
                      width="13.2088"
                      height="24.95"
                      fill="white"
                      transform="translate(0.371094 0.509766)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link target="_blank" href={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xl:h-[2rem] xl:w-[2rem] h-[1.5rem] w-[1.5rem] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M8.43304 2.00781C4.85645 2.00781 1.94604 4.91822 1.94604 8.49481V17.4768C1.94604 21.0534 4.85645 23.9638 8.43304 23.9638H17.415C20.9916 23.9638 23.902 21.0534 23.902 17.4768V8.49481C23.902 4.91822 20.9916 2.00781 17.415 2.00781H8.43304ZM8.43304 3.00581H17.415C20.4522 3.00581 22.904 5.45766 22.904 8.49481V17.4768C22.904 20.514 20.4522 22.9658 17.415 22.9658H8.43304C5.39589 22.9658 2.94404 20.514 2.94404 17.4768V8.49481C2.94404 5.45766 5.39589 3.00581 8.43304 3.00581ZM18.912 5.99981C18.3609 5.99981 17.914 6.44663 17.914 6.99781C17.914 7.54899 18.3609 7.99581 18.912 7.99581C19.4632 7.99581 19.91 7.54899 19.91 6.99781C19.91 6.44663 19.4632 5.99981 18.912 5.99981ZM12.924 7.49681C9.89846 7.49681 7.43504 9.96023 7.43504 12.9858C7.43504 16.0114 9.89846 18.4748 12.924 18.4748C15.9496 18.4748 18.413 16.0114 18.413 12.9858C18.413 9.96023 15.9496 7.49681 12.924 7.49681ZM12.924 8.49481C15.4103 8.49481 17.415 10.4996 17.415 12.9858C17.415 15.472 15.4103 17.4768 12.924 17.4768C10.4378 17.4768 8.43304 15.472 8.43304 12.9858C8.43304 10.4996 10.4378 8.49481 12.924 8.49481Z"
                  fill="#AD843E"
                />
              </svg>
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/mi-builders-970032300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xl:h-[2rem] xl:w-[2rem] h-[1.5rem] w-[1.5rem] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M6.94217 9.02734V23.9274H1.9805V9.02734H6.94217ZM7.25791 4.42652C7.26794 5.15824 7.01484 5.76969 6.49862 6.26084C5.98242 6.752 5.30331 6.99757 4.46133 6.99757H4.43126C3.60933 6.99757 2.94777 6.752 2.4466 6.26084C1.94541 5.76969 1.69482 5.15824 1.69482 4.42652C1.69482 3.68477 1.95293 3.07083 2.46915 2.58468C2.98536 2.09854 3.65945 1.85547 4.49141 1.85547C5.32337 1.85547 5.98994 2.09854 6.49111 2.58468C6.99229 3.07083 7.24788 3.68477 7.25791 4.42652ZM24.7891 15.3873V23.9274H19.8425V15.9587C19.8425 14.9062 19.6396 14.0817 19.2335 13.4853C18.8276 12.8889 18.1936 12.5907 17.3316 12.5907C16.7002 12.5907 16.1714 12.7636 15.7454 13.1094C15.3194 13.4553 15.0011 13.8838 14.7906 14.395C14.6804 14.6957 14.6253 15.1016 14.6253 15.6128V23.9274H9.67861C9.69866 19.9279 9.70869 16.6854 9.70869 14.1995C9.70869 11.7137 9.70367 10.2302 9.69364 9.74904L9.67861 9.02734H14.6253V11.1924H14.5952C14.7956 10.8717 15.0011 10.591 15.2116 10.3505C15.4221 10.1099 15.7053 9.84928 16.0611 9.56862C16.417 9.28796 16.853 9.06995 17.3691 8.91459C17.8854 8.75921 18.4593 8.68154 19.0907 8.68154C20.8047 8.68154 22.1831 9.25037 23.2255 10.388C24.268 11.5257 24.7891 13.1921 24.7891 15.3873Z"
                  fill="#AD843E"
                />
              </svg>
            </Link>
          </div> */}
          <div className="flex gap-10 relative z-10">
            <a
              href="https://www.facebook.com/mibuilders/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook className="h-[1.7rem] text-primary-color w-[1.7rem] cursor-pointer brown-hex" />
            </a>
            <a
              href="https://www.linkedin.com/in/mi-builders-970032300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="h-[1.5rem] w-[1.5rem] cursor-pointer brown-hex"
                src="/Icons/Link.svg"
                height={100}
                width={100}
                alt="LinkedIn"
              />
            </a>
            <a href="https://www.youtube.com/@mibuilders1987" target="_blank" rel="noopener noreferrer">
              <Image
                className="h-[1.5rem] w-[1.5rem] cursor-pointer brown-hex"
                src="/Icons/youtube.svg"
                height={100}
                width={100}
                alt="YouTube"
              />
            </a>
            <a
              href="https://www.instagram.com/m.i.group?igsh=M2Q5eWh5bmJwNzVw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="h-[1.5rem] w-[1.5rem] cursor-pointer brown-hex"
                src="/Icons/insta.svg"
                height={100}
                width={100}
                alt="YouTube"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideBar;

import React from "react";
import { motion } from "framer-motion";

const Buttons = ({ text, type = "button", onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer relative"
      onClick={onClick}
    >
      <button
        type={type}
        className="bg-secondary-color rounded-[4.5rem] hover:border border-secondary-color cursor-pointer flex lg:pr-3 lg:pl-6 pl-4 pr-3 xl:py-2 py-2 items-center justify-between gap-[1rem] relative overflow-hidden transition-colors duration-300 ease-in-out hover:bg-primary-color "
      >
        <span className="text-center Alata text-[1rem] lg:text-[0.833vw] font-[500] text-white">
          {text}
        </span>

        <motion.div className="bg-white rounded-[3.8rem] lg:p-[0.9rem] p-[0.2rem] transition-colors duration-300 ease-in-out hover:bg-accent-color">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <g clipPath="url(#clip0_116_601)">
              <motion.path
                d="M11.293 21.3139C11.4806 21.5014 11.7349 21.6067 12 21.6067C12.2652 21.6067 12.5195 21.5014 12.707 21.3139L18.364 15.6569C18.4595 15.5647 18.5357 15.4543 18.5881 15.3323C18.6405 15.2103 18.6681 15.0791 18.6693 14.9463C18.6704 14.8135 18.6451 14.6818 18.5948 14.5589C18.5446 14.4361 18.4703 14.3244 18.3764 14.2305C18.2825 14.1366 18.1709 14.0624 18.048 14.0121C17.9251 13.9618 17.7934 13.9365 17.6606 13.9377C17.5278 13.9388 17.3966 13.9664 17.2746 14.0188C17.1526 14.0712 17.0423 14.1474 16.95 14.2429L13 18.1929V4.9499C13 4.68469 12.8947 4.43033 12.7071 4.2428C12.5196 4.05526 12.2652 3.9499 12 3.9499C11.7348 3.9499 11.4805 4.05526 11.2929 4.2428C11.1054 4.43033 11 4.68469 11 4.9499V18.1929L7.05002 14.2429C6.86142 14.0607 6.60882 13.96 6.34662 13.9622C6.08443 13.9645 5.83361 14.0697 5.6482 14.2551C5.4628 14.4405 5.35763 14.6913 5.35535 14.9535C5.35307 15.2157 5.45386 15.4683 5.63602 15.6569L11.293 21.3139Z"
                fill="#AD843E"
                transform="rotate(-90 12 12)"
              />
            </g>
            <defs>
              <clipPath id="clip0_116_601">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="matrix(-1 0 0 -1 24 24.95)"
                />
              </clipPath>
            </defs>
          </svg>
        </motion.div>
      </button>
    </motion.div>
  );
};

export default Buttons;

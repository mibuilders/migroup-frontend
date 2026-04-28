import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqSection = ({ data }) => {
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    if (data?.faq?.length) {
      setOpenItems(Array(data.faq.length).fill(true));
    }
  }, [data]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="max-w-7xl mx-auto my-10 py-8 px-4">
      <h2 className="text-center text-[#AD843E] text-3xl font-semibold">
        Frequently Asked Questions
      </h2>

      <div className="mt-10 space-y-4">
        {data?.faq?.map((item, index) => (
          <div
            key={index}
            className="border border-[#AD843E] overflow-hidden bg-white shadow"
          >
            {/* Clickable Header */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-start gap-4 px-6 py-4 bg-[#AD843E] hover:bg-[#c79e55] transition-colors"
            >
              <span className="text-left w-[90%] text-white text-lg font-semibold uppercase flex-1 break-words">
                {item.Question}
              </span>
              <span className="text-white text-xl mt-1 shrink-0">
                {openItems[index] ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            {/* Collapsible Body */}
            <AnimatePresence initial={false}>
              {openItems[index] && (
                <motion.div
                  key={`faq-body-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 py-4 bg-white text-black text-base font-normal"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: item.Answer }}
                    className="leading-relaxed"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;

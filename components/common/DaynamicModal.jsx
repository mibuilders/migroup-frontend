import React from "react";
import { RxCross2 } from "react-icons/rx";
const DynamicModal = ({ showModal, onClose, children }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-sm shadow-lg w-[90%] max-w-[600px] relative">
            <button onClick={onClose} className="absolute top-2 right-2">
              <RxCross2 className="relative h-10 w-10  ml-3" />
            </button>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicModal;

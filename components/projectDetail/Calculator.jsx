import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { fadeIn } from "../common/Animation";
import Container from "../common/Conatiner";
import PopupForm from "../Form/PopupForm";

const EMICalculator = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const ref = useRef(null);
  const [loanAmount, setLoanAmount] = useState(2000000); // Default: ₹20L
  const [interestRate, setInterestRate] = useState(8); // Default: 8%
  const [tenure, setTenure] = useState(8); // Default: 8 months

  const handleLoanChange = (e) => setLoanAmount(Number(e.target.value));
  const handleInterestChange = (e) => setInterestRate(Number(e.target.value));
  const handleTenureChange = (e) => setTenure(Number(e.target.value));

  const calculateEMI = () => {
    const rate = interestRate / 12 / 100; // Monthly interest rate
    const n = tenure; // Number of months
    return (
      (loanAmount * rate * Math.pow(1 + rate, n)) /
      (Math.pow(1 + rate, n) - 1)
    ).toFixed(2);
  };
  const formatLoanAmount = (amount) => {
    if (amount >= 10000000) {
      return `${(amount / 10000000).toFixed(1)}C`; // "Cr" for Crores with 1 decimal place
    } else if (amount >= 100000) {
      return `${(amount / 100000).toFixed(0)}L`; // "L" for Lakhs without decimal
    }
    return amount.toLocaleString(); // For amounts less than a lakh
  };

  const renderScale = (min, max, step) => {
    const scalePoints = [];
    for (let i = min; i <= max; i += step) {
      scalePoints.push(i);
    }
    return scalePoints.map((point, index) => (
      <span key={index} className="text-xs xl:text-lg">
        {formatLoanAmount(point)}
      </span>
    ));
  };

  return (
    <section className="bg-white">
      <div className=" container mx-auto py-10 lg:py-[5.208vw]">
        <div className="xl:text-[5rem] flex gap-2 py-6 xl:py-0 justify-center  text-center lg:text-[4rem] text-[2rem] capitalize font-[500] AriensNobela">
          <motion.div
            ref={ref}
            data-splitting=""
            variants={fadeIn("left", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="text-secondary-color heading-line ">EMI</span>
          </motion.div>
          <span className="text-black">Calculator</span>
        </div>

        <div className="flex flex-col gap-5 text-black xl:flex-row xl:py-8">
          {/* Left Section */}
          <div className="flex-1 p-6">
            {/* Loan Amount */}
            <div className="mt-6">
              <label className="text-primary-color  Alata font-[500] xl:text-[16px] md:text-[14px] text-[15px] ">
                Loan Amount
              </label>
              <div className="flex flex-col items-center w-full gap-4">
                <div className="border-[1.5px] p-4 rounded-full Alata font-[500] text-primary-color xl:text-[16px] text-[15px] flex items-center gap-2 w-full border-secondary-color mt-5">
                  ₹{" "}
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={handleLoanChange}
                    min="2000000"
                    max="18000000"
                    step="100000"
                    className="w-full p-3 px-2 py-1 rounded-full outline-none"
                  />
                </div>
                <div className="w-full px-6 -mt-8">
                  <input
                    type="range"
                    min="2000000"
                    max="18000000"
                    step="100000"
                    value={loanAmount}
                    onChange={handleLoanChange}
                    className="w-full range-slider"
                    style={{
                      background: `linear-gradient(to right, black ${
                        ((loanAmount - 2000000) / (18000000 - 2000000)) * 100
                      }%, #ddd ${
                        ((loanAmount - 2000000) / (18000000 - 2000000)) * 100
                      }%)`,
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between pl-6 mt-2">
                {renderScale(2000000, 18000000, 2000000)}
              </div>
            </div>

            {/* Interest Rate */}
            <div className="flex-1 ">
              {/* Loan Amount */}

              {/* Rate of Interest */}
              <div className="mt-6">
                <label className="text-primary-color Alata font-[500] xl:text-[16px] md:text-[14px] text-[15px]">
                  Rate of Interest
                </label>
                <div className="flex flex-col items-center w-full gap-4">
                  <div className="border-[1.5px] p-4 rounded-full Alata font-[500] text-primary-color xl:text-[16px] text-[15px] flex items-center gap-2 w-full border-secondary-color mt-5">
                    %{" "}
                    <input
                      type="number"
                      value={interestRate}
                      onChange={handleInterestChange}
                      min="2"
                      max="24"
                      step="1"
                      className="w-full p-3 px-2 py-1 rounded-full outline-none"
                    />
                  </div>
                  <div className="w-full px-6 -mt-8">
                    <input
                      type="range"
                      min="2"
                      max="24"
                      step="1"
                      value={interestRate}
                      onChange={handleInterestChange}
                      className="w-full range-slider"
                      style={{
                        background: `linear-gradient(to right, black ${
                          ((interestRate - 2) / (24 - 2)) * 100
                        }%, #ddd ${((interestRate - 2) / (24 - 2)) * 100}%)`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between pl-6 mt-2">
                  {renderScale(2, 24, 2)}
                </div>
              </div>

              {/* Tenure */}
              <div className="mt-6">
                <label className="text-primary-color Alata font-[500] xl:text-[16px] md:text-[14px] text-[15px]">
                  Tenure
                </label>
                <div className="flex flex-col items-center w-full gap-4">
                  <div className="border-[1.5px] p-4 rounded-full Alata font-[500] text-primary-color xl:text-[16px] text-[15px] flex items-center gap-2 w-full border-secondary-color mt-5">
                    M{" "}
                    <input
                      type="number"
                      value={tenure}
                      onChange={handleTenureChange}
                      min="2"
                      max="24"
                      step="1"
                      className="w-full p-3 px-2 py-1 rounded-full outline-none"
                    />
                  </div>
                  <div className="w-full px-6 -mt-8">
                    <input
                      type="range"
                      min="2"
                      max="24"
                      step="1"
                      value={tenure}
                      onChange={handleTenureChange}
                      className="w-full mt-2 range-slider"
                      style={{
                        background: `linear-gradient(to right, black ${
                          ((tenure - 2) / (24 - 2)) * 100
                        }%, #ddd ${((tenure - 2) / (24 - 2)) * 100}%)`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between pl-6 mt-2">
                  {renderScale(2, 24, 2)}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col flex-1 gap-3 p-5 text-white xl:gap-5 bg-secondary-color xl:p-10">
            <p className="Alata xl:text-[40px] text-[30px] font-[400] capitalize">
              Selected Scheme
            </p>

            <p className="Alata text-[16px] font-[500]">Total Amount</p>

            <h3 className="Alata font-[500] xl:text-[80px] text-[30px] capitalize">
              ₹ {calculateEMI()}
            </h3>

            <div className="flex flex-col justify-between mt-6 space-y-2 xl:flex-row">
              <div className="flex flex-col items-start ">
                <span className="text-[16px] font-[600] Alata capitalize">
                  Interest Rate:
                </span>{" "}
                <span className="text-[16px] Alata capitalize">
                  {interestRate}%
                </span>
              </div>
              <div className="flex flex-col items-start ">
                <span className="text-[16px] font-[600] Alata capitalize">
                  Term:
                </span>{" "}
                <span className="text-[16px] Alata capitalize">
                  {tenure} Months
                </span>
              </div>
              <div className="flex flex-col items-start ">
                <span className="text-[16px] font-[600] Alata capitalize">
                  {" "}
                  Loan Amount:
                </span>{" "}
                <span className="text-[16px] Alata capitalize">
                  ₹ {loanAmount.toLocaleString()}
                </span>
              </div>
            </div>

            <div
              className="bg-white mt-10 rounded-[4.5rem] cursor-pointer flex px-4 py-3 xl:w-[40%] items-center justify-between gap-[1rem]"
              onClick={() => setPopupOpen(true)}
            >
              <span className="text-center Alata text-[1rem] font-[500] text-secondary-color">
                Apply Now
              </span>

              <div className="bg-secondary-color rounded-[3.8rem] lg:p-[0.9rem] p-[0.5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_157_144)">
                    <path
                      d="M20.364 12.707C20.5514 12.5194 20.6567 12.2651 20.6567 12C20.6567 11.7348 20.5514 11.4805 20.364 11.293L14.707 5.63598C14.6147 5.54047 14.5044 5.46428 14.3824 5.41188C14.2604 5.35947 14.1291 5.33188 13.9964 5.33073C13.8636 5.32957 13.7319 5.35487 13.609 5.40516C13.4861 5.45544 13.3744 5.52969 13.2806 5.62358C13.1867 5.71747 13.1124 5.82913 13.0621 5.95202C13.0118 6.07492 12.9865 6.2066 12.9877 6.33938C12.9889 6.47216 13.0164 6.60338 13.0689 6.72538C13.1213 6.84739 13.1974 6.95773 13.293 7.04998L17.243 11H3.99995C3.73474 11 3.48038 11.1053 3.29284 11.2929C3.10531 11.4804 2.99995 11.7348 2.99995 12C2.99995 12.2652 3.10531 12.5195 3.29284 12.7071C3.48038 12.8946 3.73474 13 3.99995 13H17.243L13.293 16.95C13.1108 17.1386 13.01 17.3912 13.0123 17.6534C13.0146 17.9156 13.1197 18.1664 13.3051 18.3518C13.4905 18.5372 13.7414 18.6424 14.0036 18.6447C14.2657 18.6469 14.5183 18.5461 14.707 18.364L20.364 12.707Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_157_144">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="matrix(0 1 -1 0 24 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        title={"Enquire Now"}
        source={"EMI Caluclator Enquire Now"}
      />
    </section>
  );
};

export default EMICalculator;

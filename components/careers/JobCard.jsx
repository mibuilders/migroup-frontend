import Image from "next/image";
import React, { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { cleanImage } from "../imageHandling";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
const YearIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_180_5007)">
        <path
          d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM10 10C10 10.55 9.55 11 9 11C8.45 11 8 10.55 8 10V8H10V10ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM16 10C16 10.55 15.55 11 15 11C14.45 11 14 10.55 14 10V8H16V10Z"
          fill="#AD843E"
        />
      </g>
      <defs>
        <clipPath id="clip0_180_5007">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const LocationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 1.5C7.85953 1.5 4.5 4.52391 4.5 8.25C4.5 14.25 12 22.5 12 22.5C12 22.5 19.5 14.25 19.5 8.25C19.5 4.52391 16.1405 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.1481 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z"
        fill="#AD843E"
      />
    </svg>
  );
};

const JobCard = ({ content }) => {
  // console.log("content", content);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOpening, setSelectedOpening] = useState(null);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
    register,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValue: {
      attachment: null,
    },
  });
  const watchedField = watch("attachment");

  const handleApplyClick = (content) => {
    setIsModalOpen(true);
    setSelectedOpening(content);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    reset(); // Reset form when modal closes
  };

  const onSubmit = async (data) => {
    const uploadFormData = new FormData();
    const formvalue = {
      Name: data.Name,
      Email: data.Email,
      Mobile: `${data.Mobile}`,
      Message: data.Message,
      jobTitle: selectedOpening?.attributes?.Job_Title || "",
      jobLocation: selectedOpening?.attributes?.Location || "",
      jobType: selectedOpening?.attributes?.Job_Type || "",
    };
    // console.log("formvalue", formvalue);
    uploadFormData.append("data", JSON.stringify(formvalue));
    uploadFormData.append(
      "files.Resume",
      watchedField && watchedField[0],
      watchedField && watchedField[0].name
    );
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/job-applies`,
        uploadFormData,
        config
      );
      if (response.status === 200) {
        window.location.href = "/thank-you";
      }
    } catch (error) {
      console.error(error);
    }
    reset();
  };

  // const onSubmit = (data) => {
  //   // Log other form data
  //   console.log("Form Data (except file):", data);

  //   // Access the selected file
  //   const resumeFile = data.resume[0];
  //   console.log("Selected Resume File:", resumeFile);

  //   // Example: You can append the data to FormData for submission
  //   const formData = new FormData();
  //   formData.append("name", data.name);
  //   formData.append("email", data.email);
  //   formData.append("mobile", data.mobile);
  //   formData.append("designation", data.applyingfor);
  //   formData.append("resume", resumeFile);

  //   console.log("FormData Object for Submission:", formData);

  //   // Close modal after submission
  //   handleCloseModal();
  // };
  return (
    <div className="w-full h-full border border-[#AD843E]">
      <div className="h-full flex justify-between flex-col w-full lg:px-[1.667vw] lg:py-[1.823vw] px-3 py-4">
        <div>
          <div className="flex items-center carrericon justify-start lg:gap-[1.042vw] gap-8">
            {content?.attributes?.jobicon?.data && (
              <Image
                src={cleanImage(
                  content?.attributes?.jobicon?.data?.attributes?.url
                )}
                alt={
                  content?.attributes?.jobicon?.data?.attributes
                    ?.alternativeText
                    ? content?.attributes?.jobicon?.data?.attributes
                      ?.alternativeText
                    : "icon"
                }
                height={1000}
                width={1000}
                className="lg:w-[3.542vw] lg:h-[3.542vw] w-10 h-10"
              />
            )}
            <p className="text-[#233F66] lg:text-[1.25vw] text-[1.3rem]">
              {content?.attributes?.Job_Title}
            </p>
          </div>
          <div className="lg:py-[1.667vw] py-4 lg:mt-0 mt-3 flex items-center gap-10">
            <span className="flex items-center justify-start lg:gap-[0.521vw] gap-2">
              <YearIcon />
              <p className="text-black lg:text-[0.729vw] text-[1rem]">
                {content?.attributes?.Experience}
              </p>
            </span>
            <span className="flex items-center justify-start lg:gap-[0.521vw] gap-2">
              <LocationIcon />
              <p className="text-black lg:text-[0.729vw] text-[1rem]">
                {content?.attributes?.Location}
              </p>
            </span>
          </div>
          <div className=" lg:pb-[1.667vw] lg:pt-0 pt-4 pb-8 flex flex-wrap lg:gap-x-[1.667vw] gap-x-3 lg:gap-y-[0.729vw] gap-y-2">
            {content?.attributes?.jobtags &&
              content?.attributes?.jobtags.map((item, index) => (
                <p
                  key={index}
                  className={`text-black Alata lg:text-[0.95vw] relative ${index !== content?.attributes?.jobtags.length - 1 &&
                    "after:content-['']  after:absolute after:h-full after:w-[2px] after:bg-primary-color after:opacity-[12%] after:-right-[0.834vw]"
                    }`}
                >
                  {item?.text}
                </p>
              ))}
          </div>
        </div>
        <button
          class="apply-button w-full lg:h-[3.438vw]  h-12"
          onClick={() => handleApplyClick(content)}
        >
          <span className="Alata lg:text-[0.95vw] ml-4">Apply</span>
          <svg
            width="34"
            height="34"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="54" height="54" rx="27" fill="#F4EBE2" />
            <g clip-path="url(#clip0_180_4905)">
              <path
                d="M35.3644 27.7064C35.5519 27.5188 35.6572 27.2645 35.6572 26.9994C35.6572 26.7342 35.5519 26.4799 35.3644 26.2924L29.7074 20.6354C29.6152 20.5399 29.5048 20.4637 29.3828 20.4113C29.2608 20.3589 29.1296 20.3313 28.9968 20.3301C28.8641 20.329 28.7324 20.3543 28.6095 20.4045C28.4866 20.4548 28.3749 20.5291 28.281 20.623C28.1872 20.7169 28.1129 20.8285 28.0626 20.9514C28.0123 21.0743 27.987 21.206 27.9882 21.3388C27.9893 21.4715 28.0169 21.6028 28.0693 21.7248C28.1217 21.8468 28.1979 21.9571 28.2934 22.0494L32.2434 25.9994L19.0004 25.9994C18.7352 25.9994 18.4809 26.1047 18.2933 26.2923C18.1058 26.4798 18.0004 26.7341 18.0004 26.9994C18.0004 27.2646 18.1058 27.5189 18.2933 27.7065C18.4809 27.894 18.7352 27.9994 19.0004 27.9994L32.2434 27.9994L28.2934 31.9494C28.1113 32.138 28.0105 32.3906 28.0128 32.6528C28.015 32.915 28.1202 33.1658 28.3056 33.3512C28.491 33.5366 28.7418 33.6418 29.004 33.644C29.2662 33.6463 29.5188 33.5455 29.7074 33.3634L35.3644 27.7064Z"
                fill="#AD843E"
              />
            </g>
            <defs>
              <clipPath id="clip0_180_4905">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="matrix(0 1 -1 0 39 15)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black modal bg-opacity-70"
            >
              <div className="relative w-11/12 max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-1 text-xl font-semibold text-center text-black">
                  Apply for the Job
                </h2>
                <p class="text-center mb-4 lg:mb-6 text-black">
                  Please fill out the form below to apply for the{" "}
                  <span class="">{selectedOpening?.attributes?.Job_Title}</span>{" "}
                  position
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  encType="multipart/form-data"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary-color"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full py-2 text-black bg-transparent border border-t-0 border-gray-300 Alata placeholder:black-white border-x-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your name"
                      {...register("Name", {
                        required: "Enter Your Name",
                        maxLength: {
                          value: 100,
                          message: "Name is too long",
                        },
                      })}
                    />
                    {errors.Name && (
                      <p className="text-sm text-red-500 text-error">
                        {errors.Name.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary-color"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full py-2 text-black bg-transparent border border-t-0 border-gray-300 Alata placeholder:black-white border-x-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your email"
                      {...register("Email", {
                        required: "Enter Your Email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid Email Address",
                        },
                      })}
                    />
                    {errors.Email && (
                      <p className="text-sm text-red-500 text-error">
                        {errors.Email.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-primary-color"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      className="w-full py-2 text-black bg-transparent border border-t-0 border-gray-300 Alata placeholder:black-white border-x-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your mobile number"
                      {...register("Mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit mobile number",
                        },
                      })}
                    />
                    {errors.Mobile && (
                      <p className="text-sm text-red-500 text-error">
                        {errors.Mobile.message}
                      </p>
                    )}
                  </div>
                  {/* <div className="mb-4">
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-primary-color"
                  >
                    Applying For
                  </label>
                  <input
                    type="text"
                    id="designation"
                    {...register("designation", {
                      required: "Designation is required",
                    })}
                    className="w-full py-2 text-black bg-transparent border border-t-0 border-gray-300 Alata placeholder:black-white border-x-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Which position are you applying for?"
                  />
                  {errors.designation && (
                    <p className="text-sm text-red-500 text-error">
                      {errors.designation.message}
                    </p>
                  )}
                </div> */}
                  <div className="mb-4">
                    <label
                      htmlFor="resume"
                      className="block text-sm font-medium text-primary-color"
                    >
                      Upload Resume
                    </label>
                    <input
                      type="file"
                      name="attachment"
                      // onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="block w-full mt-1"
                      {...register("attachment", {
                        required: "Please Upload Resume",
                        validate: {
                          lessThan10MB: (files) =>
                            files[0]?.size < 10000000 || "Max 10MB",
                        },
                      })}
                    />
                    {errors.attachment && (
                      <p className="text-sm text-red-500 text-error">
                        {errors.attachment.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-[#AD843E] text-white px-4 py-2 rounded w-full"
                  >
                    Submit
                  </button>
                </form>
                <button
                  onClick={handleCloseModal}
                  className="absolute text-black text-gr ay-500 top-2 right-2"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
                      fill="#0F1729"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
                      fill="#0F1729"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JobCard;

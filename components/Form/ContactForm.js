import { getwebsiteLeads } from "@/redux/features/lead/websiteleadSlice";
import React, { useEffect } from "react";
import { Form, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

function ContactForm({ source, hidemsg, projectEnquire, pdfurl }) {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValue: {
      attachment: null,
    },
  });
  const downloadBrochure = () => {
    const anchor = document.createElement("a");
    anchor.href = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}${pdfurl}`;
    anchor.target = "_blank";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const onSubmit = async (data) => {
    const formvalue = {
      Name: data.Name,
      Email: data.Email,
      Mobile: `${data.Mobile}`,
      Message: data.Message ? data.Message : "",
      FormSource: source,
      ProjectEnquire: projectEnquire,
    };

    // console.log("formvalue", formvalue);

    dispatch(getwebsiteLeads(formvalue));
    reset();
  };

  const { status } = useSelector((state) => state.websitelead);

  useEffect(() => {
    if (status === "succeeded") {
      if (source == "Download Brochure") {
        downloadBrochure();
        window.location.href = "/thank-you";
      } else {
        window.location.href = "/thank-you";
      }
    }
  }, [status]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          {/* <label
                        htmlFor="name"
                        className="block text-sm font-medium text-primary-color"
                    >
                        Name
                    </label> */}
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
          {/* <label
                        htmlFor="email"
                        className="block text-sm font-medium text-primary-color"
                    >
                        Email
                    </label> */}
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
          {/* <label
                        htmlFor="mobile"
                        className="block text-sm font-medium text-primary-color"
                    >
                        Mobile Number
                    </label> */}
          <input
            type="tel"
            id="mobile"
            className="w-full py-2 text-black bg-transparent border border-t-0 border-gray-300 Alata placeholder:black-white border-x-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your mobile number"
            {...register("Mobile", {
              required: "Enter your mobile number",
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
        {hidemsg ? (
          ""
        ) : (
          <div className="mb-4">
            {/* <label
                        htmlFor="Message"
                        className="block text-sm font-medium text-primary-color"
                    >
                        Message
                    </label> */}
            <input
              type="text"
              id="designation"
              {...register("Message", {
                required: "Enter Your Message",
              })}
              className="w-full py-2 text-black bg-transparent border border-t-0 border-gray-300 Alata placeholder:black-white border-x-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Message"
            />
            {errors.Message && (
              <p className="text-sm text-red-500 text-error">
                {errors.Message.message}
              </p>
            )}
          </div>
        )}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-[#AD843E] text-white px-4 py-2 rounded w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

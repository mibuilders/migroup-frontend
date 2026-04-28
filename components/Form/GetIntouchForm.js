import React, { useEffect } from 'react'
import { Form, useForm } from "react-hook-form";
import { getwebsiteLeads } from "@/redux/features/lead/websiteleadSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

function GetIntouchForm() {
    const dispatch = useDispatch();

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = async (data) => {
        try {
            const formvalue = {
                Name: data.fname,
                Email: data.email,
                Mobile: `${data.mobile}`,
                Message: data.Message,
                FormSource: "Footer Form",
            };
            dispatch(getwebsiteLeads(formvalue));
            reset();
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };
    const { status } = useSelector((state) => state.websitelead);

    useEffect(() => {
        if (status === "succeeded") {
            window.location.href = "/thank-you";
        }
    }, [status]);
    return (
        <>
            <form
                noValidate
                id="getintouchForm"
                className="space-y-6 getintouch_form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label className="block">
                        <input
                            required
                            type="text"
                            placeholder="Your Name"
                            name="fname"
                            className="w-full py-2 text-white bg-transparent border border-gray-300 rounded-md Alata placeholder:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register("fname", {
                                required: "Enter Your Name",
                                maxLength: {
                                    value: 100,
                                    message: "Name is too long",
                                },
                            })}
                        />
                    </label>
                    {errors.fname && (
                        <span className="text-sm text-error">{errors.fname.message}</span>
                    )}
                </div>
                <div>
                    <label className="block">
                        <input
                            required
                            type="number"
                            placeholder="Phone Number"
                            name="mobile"
                            className="w-full py-2 text-white bg-transparent border border-gray-300 rounded-md Alata placeholder:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register("mobile", {
                                required: "Enter Your mobile",
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Invalid number",
                                },
                                minLength: {
                                    value: 10,
                                    message: "Please enter 10 digit number",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Please enter 10 digit number",
                                },
                            })}
                        />
                    </label>
                    {errors.mobile && (
                        <span className="text-sm text-error">
                            {errors.mobile.message}
                        </span>
                    )}
                </div>
                <div>
                    <label className="block">
                        <input
                            required
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="w-full py-2 text-white bg-transparent border border-gray-300 rounded-md Alata placeholder:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register("email", {
                                required: "Enter Your Email",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                    </label>
                    {errors.email && (
                        <span className="text-sm text-error">{errors.email.message}</span>
                    )}
                </div>
                <div>
                    <label className="block">
                        <textarea
                            required
                            placeholder="Enter your Message"
                            rows={2}
                            className="w-full py-2 text-white bg-transparent border border-gray-300 rounded-md Alata placeholder:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register("Message", {
                                required: "Enter Your Message",
                                maxLength: {
                                    value: 250,
                                    message: "Message is too long",
                                },
                            })}
                        ></textarea>
                    </label>
                    {errors.Message && (
                        <span className="text-sm text-error">
                            {errors.Message.message}
                        </span>
                    )}
                </div>
                <div class="block">
                    <label class="relative flex items-center cursor-pointer">
                        <input
                            name="term_condition"
                            type="checkbox"
                            class="peer term_condition h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-red-500 checked:bg-red-500 transition-all"
                            id="term_condition"
                            aria-label="I agree with the terms and conditions"
                            {...register("term_condition", {
                                required: "You must agree to the terms and conditions",
                            })}
                        />
                        <span class="absolute bg-white w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-[10px] transform -translate-x-1/2 -translate-y-1/2"></span>
                        <span class="ml-2 text-slate-600 Alata text-white cursor-pointer text-sm">
                            I agree with the terms and conditions of this website for the
                            processing of personal data
                        </span>
                    </label>
                    {errors.term_condition && (
                        <span className="text-sm text-error w-100">
                            {errors.term_condition.message}
                        </span>
                    )}
                </div>

                <div className="mt-4 text-center  flex justify-center items-center">
                    <div className="text-center w-[100%] flex justify-center items-center">
                        <button
                            type="submit"
                            className="bg-secondary-color rounded-[4.5rem] hover:border cursor-pointer flex lg:pr-3 lg:pl-6 pl-4 pr-3 xl:py-2 py-4 items-center justify-between gap-[1rem] relative overflow-hidden transition-colors duration-300 ease-in-out hover:bg-primary-color "
                        >
                            <span className="text-center Alata text-[1rem] font-[500] text-white">
                                Submit
                            </span>

                            <motion.div
                                className="bg-white rounded-[3.8rem]  -rotate-90 lg:p-[0.9rem] p-[0.8] transition-colors duration-300 ease-in-out hover:bg-accent-color"
                                // whileHover={{ rotate: 90 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_116_601)">
                                        <motion.path
                                            // initial={{ y: 0 }}
                                            // animate={{ y: [0, -5, 0] }}
                                            // transition={{ repeat: Infinity, duration: 1 }}
                                            d="M11.293 21.3139C11.4806 21.5014 11.7349 21.6067 12 21.6067C12.2652 21.6067 12.5195 21.5014 12.707 21.3139L18.364 15.6569C18.4595 15.5647 18.5357 15.4543 18.5881 15.3323C18.6405 15.2103 18.6681 15.0791 18.6693 14.9463C18.6704 14.8135 18.6451 14.6818 18.5948 14.5589C18.5446 14.4361 18.4703 14.3244 18.3764 14.2305C18.2825 14.1366 18.1709 14.0624 18.048 14.0121C17.9251 13.9618 17.7934 13.9365 17.6606 13.9377C17.5278 13.9388 17.3966 13.9664 17.2746 14.0188C17.1526 14.0712 17.0423 14.1474 16.95 14.2429L13 18.1929V4.9499C13 4.68469 12.8947 4.43033 12.7071 4.2428C12.5196 4.05526 12.2652 3.9499 12 3.9499C11.7348 3.9499 11.4805 4.05526 11.2929 4.2428C11.1054 4.43033 11 4.68469 11 4.9499V18.1929L7.05002 14.2429C6.86142 14.0607 6.60882 13.96 6.34662 13.9622C6.08443 13.9645 5.83361 14.0697 5.6482 14.2551C5.4628 14.4405 5.35763 14.6913 5.35535 14.9535C5.35307 15.2157 5.45386 15.4683 5.63602 15.6569L11.293 21.3139Z"
                                            fill="#AD843E"
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
                    </div>
                </div>
            </form>
        </>
    )
}

export default GetIntouchForm

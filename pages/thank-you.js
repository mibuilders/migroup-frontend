import Buttons from "@/components/common/Button";
import Seo from "@/components/Seo/Seo";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TbExclamationMark } from "react-icons/tb";
import axios from 'axios';
import qs from 'qs'

const ThankYou = ({ seodata }) => {
  const seo = seodata?.attributes?.seo;
  const navigate = useRouter();

  const handleBack = () => {
    navigate.back();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Seo seo={seo} />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 px-5 text-center bg-white xl:px-40">
        <h1 className="text-[3rem] Fontspring font-bold mb-4 text-primary-color flex items-center gap-2">
          THANK YOU <TbExclamationMark />
        </h1>
        <p className="text-[1.5rem] mb-6 mont text-secondary-color">
          Thank you for reaching out to us! We have received your message and will
          get back to you as soon as possible. Your inquiry is important to us,
          and we appreciate your patience.
        </p>
        <Buttons text="Go Back" onClick={handleBack} />


      </div>
    </>
  );
};

export default ThankYou;

export async function getServerSideProps() {
  try {
    const query = {
      populate: [
        // "Banner.DesktopBanner",
        // "Banner.MobileBanner",
        "seo.metaImage",
        "seo.metaSocial.image",
        "seo.schema",
      ],
    };

    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/thank-you-page/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);
    const response = await axios.get(endpoint);
    const seodata = response.data.data;


    return {
      props: { seodata },
    };
  } catch (error) {
    console.log("Error fetching data", error);
    return {
      props: { seodata: null },
    };
  }
}

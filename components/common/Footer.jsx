import { fetchfooterData } from "@/redux/features/footer/footerSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanImage } from "../imageHandling";
import Link from "next/link";
import CopyRight from "./CopyRight";
import axios from "axios";
import qs from "qs";

const Footer = ({
  
}) => {

  const router = useRouter();
  const dispatch = useDispatch();
  const [currData, setCurrData] = useState(null);
  useEffect(() => {
    dispatch(fetchfooterData());
  }, [dispatch]);

  const { footerData } = useSelector((state) => state.footer);
  const fetchTypologyData = async () => {
    const query = {
      populate: [
        "seo",
        "seo.schema",
        "seo.ogtag",
        "seo.twiitercard",
        "seo.metaSocial",
        "Banner.DesktopBanner",
        "Banner.MobileBanner",
        "Banner",
        "Banner.Desktopbanner",
        "Banner.Mobilebanner",
        "projects",
        "projects.projectThumbnail",
        "Faq",
        "Faq.faq",
      ],
    };

    const queryString = qs.stringify(query, { encodeValuesOnly: true });

    try {
      const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/typologies?${queryString}`;
      const response = await axios.get(endpoint);
      const data = response || [];

      
      setCurrData(data?.data?.data);
      return data
    } catch (error) {
      console.error("Failed to fetch typology data:", error);
      setCurrData(null);
    }
  };
  useEffect(() => {
    
    const fetchData = async () => {
      const data = await fetchTypologyData()
      console.log(data, "foot data")
    }
    fetchData()
    // const data = await fetchTypologyData();
  }, [router.isReady, router.query]);
  
  // You can use `currData` below if needed
  console.log( currData, "footer data");




  // console.log("footerData", footerData);
  const copyrighttext = footerData?.attributes?.CopyrightText;

  return (
    <>
      <div className="px-5 pt-20 pb-10 bg-SnowWhite md:px-10 xl:px-40">
        <div className="grid lg:grid-cols-[12%,16%,16%,16%,20%]  xl:grid-cols-[12%,16%,16%,16%,20%] xl:gap-16 lg:gap-16 gap-7 xs:grid-cols-1">
          {footerData?.attributes?.Logo?.data && (
            <div>
              <Image
                src={cleanImage(
                  footerData?.attributes?.Logo?.data?.attributes?.url
                )}
                height={100}
                width={100}
                onClick={() => router.push("/")}
                alt={
                  footerData?.attributes?.Logo?.data?.attributes
                    ?.alternativeText
                    ? footerData?.attributes?.Logo?.data?.attributes
                        ?.alternativeText
                    : "Logo"
                }
                className="cursor-pointer"
              />{" "}
            </div>
          )}

          {footerData?.attributes?.Address && (
            <div>
              <h3 className="flex justify-start text-textColor mont text-[1.5rem] font-[600] capitalize pb-3">
                {footerData?.attributes?.Address?.Title}
              </h3>
              <p className="flex justify-start text-textColor Alata text-[1rem] font-[400] capitalize">
                {footerData?.attributes?.Address?.address}
              </p>
            </div>
          )}

          <div>
            {footerData?.attributes?.contactTitle && (
              <h3 className="flex justify-start text-textColor mont text-[1.5rem] font-[600] capitalize pb-3">
                {footerData?.attributes?.contactTitle}
              </h3>
            )}
            <div className=" text-textColor Alata text-[1rem] font-[400] ">
              <div className="pb-3">
                <p className="font-bold capitalize">
                  {footerData?.attributes?.Email?.Title}
                </p>
                <Link
                  href={`mailto:${footerData?.attributes?.Email?.Email?.text}`}
                  className="text-textColor"
                >
                  {footerData?.attributes?.Email?.Email?.text}
                </Link>
              </div>
            </div>
            <div className=" text-textColor Alata text-[1rem] font-[400] ">
              <div className="pb-3">
                <p className="font-bold capitalize">
                  {footerData?.attributes?.Phone?.Title}
                </p>
                {footerData?.attributes?.Phone?.number?.map((item, index) => {
                  return (
                    <Link
                      className="block"
                      href={`tel:${item?.text?.replace(/-|\s/g, "")}`}
                      key={`foophone${index}`}
                    >
                      {item?.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h3 className="flex justify-start text-textColor mont text-[1.5rem] font-[600] capitalize pb-3">
              {footerData?.attributes?.quickLinks?.Title}
            </h3>
            <ul className="flex justify-start text-textColor Alata text-[1rem] flex-col font-[400] capitalize space-y-1">
              {footerData?.attributes?.quickLinks?.link &&
                footerData?.attributes?.quickLinks?.link?.map((link, index) => {
                  // console.log({ link });
                  return (
                    <li key={index}>
                      <a
                        href={link.Url}
                        className="hover:underline cursor-pointer"
                      >
                        {link.Title}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <h3 className="flex justify-start text-textColor mont text-[1.5rem] font-[600] capitalize pb-3">
              Typology
            </h3>
            <ul className="flex justify-start text-textColor Alata text-[1rem] flex-col font-[400] capitalize space-y-1">
              {currData &&
                currData?.map((link, index) => {
                  // console.log({ link });
                  return (
                    <li key={index}>
                      <a
                         href={`/${link?.attributes?.slug}`}
                        className="hover:underline cursor-pointer"
                      >
                        {link.attributes?.Title}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <CopyRight copyrighttext={copyrighttext} />
    </>
  );
};

export default Footer;

// export async function getServerSideProps(context) {
//   const { typology } = context.params; // Get slug from URL params
//   console.log(typology, "typology");
//   const query = {
//     populate: [
//       "seo",
//       "seo.schema",
//       "seo.ogtag",
//       "seo.twiitercard",
//       "seo.metaSocial",
//       "Banner.DesktopBanner",
//       "Banner.MobileBanner",
//       "Banner",
//       "Banner.Desktopbanner",
//       "Banner.Mobilebanner",
//       "projects",
//       "projects.projectThumbnail",
//       "Faq",
//       "Faq.faq",
//     ],
//   };

//   const queryString = qs.stringify(query, {
//     encodeValuesOnly: true,
//   });

//   try {
//     const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/typologies?${queryString}`;
//     const response = await axios.get(endpoint);

//     console.log("endpoint for typology", endpoint, response);
//     const data = response?.data?.data || [];

//     // Check if the API returned empty or an error
//     if (!data || data.length === 0) {
//       return {
//         notFound: true,
//       };
//     }

//     // Filter based on the requested slug
//     const currData = data.filter((item) => item?.attributes?.slug === typology);

//     // If no matching typology, return 404
//     if (!currData || currData.length === 0) {
//       return {
//         notFound: true,
//       };
//     }
//     console.log(currData, "current data");
//     return {
//       props: {
//         currData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching typologies:", error);
//     return {
//       notFound: true, // Redirect to 404 in case of API failure
//     };
//   }
// }

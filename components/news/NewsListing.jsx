import React, { useEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";
import { motion } from "framer-motion";
import { fadeIn } from "../common/Animation";
import Heading from "../common/Heading";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedia } from "@/redux/features/News/mediaSlice";
import Pagination from "react-js-pagination";

const NewsListing = ({ title }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  //pagination
  const router = useRouter();
  let { page = 1 } = router.query;
  page = Number(page);
  let queryParams;
  if (typeof window !== "undefined") {
    queryParams = new URLSearchParams(window.location.search);
  }
  const handlePagination = (pageNumber) => {
    if (queryParams.has("page")) {
      queryParams.set("page", pageNumber);
    } else {
      queryParams.append("page", pageNumber);
    }
    router.replace({
      search: queryParams.toString(),
    });
  };

  useEffect(() => {
    // Check if the URL has the "page" parameter
    if (router.query.page) {
      const mediaSection = document.getElementById("media");
      if (mediaSection) {
        mediaSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.query.page]);

  const dispatch = useDispatch();
  const { media, status, totalCount, resultsPerPage } = useSelector(
    (state) => state.media
  );
  // console.log('media', media)
  useEffect(() => {
    dispatch(fetchMedia({ itemperPage: 9, pageNumber: router.query.page }));
  }, [dispatch, router.query.page]);

  return (
    <div className=" py-10 md:px-10 lg:px-[10.938vw] lg:pb-[5.229vw] lg:pt-[1.229vw] bg-white" id="media">
      <div className="text-center headwrap">
        <Heading center>{title}</Heading>
      </div>

      {media?.length !== 0 ? (
        <>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24  lg:gap-[5.208vw] my-10">
            {media.map((item, index) => (
              <NewsCard data={item} key={index} />
            ))}
          </div>
          <div className="pt-5 mt-5 pagination_wrap light">
            {resultsPerPage < totalCount && (
              <>
                <Pagination
                  activePage={page}
                  itemsCountPerPage={resultsPerPage}
                  totalItemsCount={totalCount}
                  onChange={handlePagination}
                  hideNavigation={true}
                  itemClass="page-item"
                  linkClass="page-numbers"
                  linkClassFirst="prev"
                  linkClassLast="next"
                ></Pagination>
              </>
            )}
          </div>
        </>
      ) : (
        <p className="text-center mt-7 text-primary-color text-[1rem] md:text-[1.7rem]">
          No Media Found
        </p>
      )}
    </div>
  );
};

export default NewsListing;

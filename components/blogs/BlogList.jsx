import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../common/Animation";
import BlogCard from "./BlogCard";
import Heading from "../common/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchBlogs } from "@/redux/features/blog/blogSlice";
import Pagination from "react-js-pagination";

const BlogsListing = ({ title }) => {
  const ref = useRef();
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
      const mediaSection = document.getElementById("blog");
      if (mediaSection) {
        mediaSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.query.page]);

  const dispatch = useDispatch();
  const { blog, status, totalCount, resultsPerPage } = useSelector(
    (state) => state.blogPost
  );
  // console.log('blog', blog)
  useEffect(() => {
    dispatch(fetchBlogs({ itemperPage: 6, pageNumber: router.query.page }));
  }, [dispatch, router.query.page]);

  return (
    <div
      className=" px-5 py-10 md:px-10 lg:px-[10.938vw] lg:pb-[5.229vw] lg:pt-[1.229vw] bg-white"
      id="blog"
    >
      <div className="text-center headwrap xl:py-10 py-0">
        {/* <Heading center>{title}</Heading> */}
        <div className="xl:text-[5rem] flex gap-2 py-6 xl:py-0 justify-center  text-center lg:text-[4rem] text-[2rem] capitalize font-[500] AriensNobela">
          <motion.div
            ref={ref}
            data-splitting=""
            variants={fadeIn("left", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="text-secondary-color heading-line ">
              {title?.split(" ")[0]}
            </span>
          </motion.div>
          <span className="text-black">
            {title?.split(" ").slice(1).join(" ")}
          </span>
        </div>
      </div>

      {blog?.length !== 0 ? (
        <>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24  lg:gap-[1.25vw] my-10">
            {blog.map((item, index) => (
              <BlogCard data={item} key={index} />
            ))}
          </div>
          <div className="mt-5 pagination_wrap light">
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
          No Blogs Found
        </p>
      )}
    </div>
  );
};

export default BlogsListing;

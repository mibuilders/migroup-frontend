import React from "react";

function Heading({ light, children, center }) {
  return (
    <>
      <h3
        className={` font-[500] xl:text-[5rem] leading-[5rem] text-[2.5rem] md:text-[4rem] capitalize ${
          light ? "text-white" : "text-black"
        } ${center ? "center" : ""}`}
        dangerouslySetInnerHTML={{ __html: children }}
      ></h3>
    </>
  );
}

export default Heading;

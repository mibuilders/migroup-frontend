import React from 'react';

const Details = ({ data }) => {
  const parseHTML = (htmlString) => {
    return React.createElement('div', {
      dangerouslySetInnerHTML: { __html: htmlString },
    });
  };

  return (
    <div className=" bg-white">
      <div className="py-10 px-4 md:px-20">
        <div className="w-full">
          <h1 className="text-center text-black p-0 m-0 text-3xl md:text-4xl font-semibold">
            {data.Title}
          </h1>
          <div className="mt-5 md:mt-10">
            <span className="text-white font-medium leading-relaxed block">
              {parseHTML(data?.Description)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

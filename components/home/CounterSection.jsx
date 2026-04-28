// import { useSpring } from 'framer-motion';
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
const CounterSection = ({ stats }) => {
  const AnimatedNumber = ({ value, sub }) => {
    const { ref, inView } = useInView({
      threshold: 0.5,
    });

    // Convert value to a number
    const numericValue = Number(value);

    const props = useSpring({
      from: { number: 0 },
      to: { number: inView ? numericValue : 0 },
      config: { duration: 2000 },
    });

    return (
      <div className="flex gap-2 items-center counts text-center text-white lg:text-[3.125vw] text-[2rem] Alata !font-[500]">
        <animated.div ref={ref}>
          {props.number.to((val) => Math.floor(val))}
        </animated.div>
        {sub && <span>{sub}</span>}
      </div>
    );
  };

  return (
    <>
      {stats && (
        <div className="relative w-full h-auto overflow-hidden lg:py-[4.688vw]  ">
          <div className="absolute top-0 left-0 z-0 w-full h-full">
            <Image
              src={"/Images/Home/counter.png"}
              className="object-cover w-full h-full"
              height={2000}
              width={2000}
            />
          </div>

          <div className=" lg:border-y border-white relative z-[1] ">
            <div className="container mx-auto ">
              <div className="flex items-center justify-center h-full text-center">
                <div className=" flex xl:flex-row lg:flex-row flex-1 xl:px-5  px-15 gap-4  md:flex-col  flex-col justify-between items-center align-middle  w-full py-20">
                  {stats && stats[0] && (
                    <div className="flex xl:flex-[0.3] flex-[1] flex-col items-center gap-2">
                      <AnimatedNumber
                        value={stats[0]?.number}
                        sub={stats[0]?.suffix || ""}
                      />
                      <h3 className="Alata font-[500] text-white lg:text-[1.25vw] text-[1.3rem]">
                        {stats[0]?.text}
                      </h3>
                    </div>
                  )}
                  {stats && stats[1] && (
                    <div className="flex xl:flex-[0.2] flex-[1] flex-col items-center gap-2">
                      <AnimatedNumber
                        value={stats[1]?.number}
                        sub={stats[1]?.suffix || ""}
                      />
                      <h3 className="Alata font-[500] text-white lg:text-[1.25vw] text-[1.3rem]">
                        {stats[1]?.text}
                      </h3>
                    </div>
                  )}
                  <div className="size-40 lg:size-[18.229vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 386 385"
                      fill="none"
                      className="background-svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M199.165 202.12L287.893 289.86L262.392 278.655C245.847 289.331 229.092 296.837 212.126 300.431L216.447 280.557L241.843 269.669L222.664 261.212L199.165 202.12ZM194.212 0V179.286C207.068 152.858 216.236 127.805 218.133 105.711C217.922 105.077 217.711 104.443 217.395 103.808C225.088 105.923 233.096 110.68 242.58 116.282L262.392 105.077C244.477 94.4 227.406 87.3174 211.072 84.2518C203.485 58.1411 198.111 29.8105 194.212 0ZM81.8788 211.951L103.587 215.439C106.853 225.588 110.752 234.89 115.6 242.818L123.819 223.896L184.412 200.64L95.1564 290.177L106.221 264.595C95.8941 248.527 87.5692 231.19 81.8788 211.951ZM192.737 204.974V385L172.293 301.805C152.588 295.885 135.727 288.486 122.766 279.183L142.998 269.246L167.34 281.509L167.13 280.663C163.758 261.001 176.403 236.793 192.737 204.974ZM0 192.606H179.459C149.426 178.123 127.613 166.284 103.271 169.244C106.327 160.364 110.226 151.484 114.862 142.604L106.01 122.308C95.7887 134.57 87.3585 151.801 80.825 174.212L0 192.606ZM278.62 123.259L303.384 177.278L281.043 172.309C277.671 160.258 273.772 151.273 269.452 144.613L261.865 162.267L198.532 186.58L291.054 94.4L278.62 123.259ZM120.342 106.345C136.675 96.4086 153.536 88.1631 171.134 81.8204L169.659 102.117C160.912 106.768 151.112 110.997 142.471 115.754L161.334 123.788L185.044 185.1L93.365 94.6115L120.342 106.345ZM278.304 218.928C275.775 226.01 272.192 233.093 269.241 240.07L277.355 262.481C287.155 246.413 295.27 229.922 300.433 212.797C327.199 205.925 357.126 200.217 386 193.98L204.117 193.346C230.989 207.617 256.28 217.976 278.304 218.928Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  {stats && stats[2] && (
                    <div className="flex xl:flex-[0.2] flex-[1] flex-col items-center gap-2">
                      <AnimatedNumber
                        value={stats[2]?.number}
                        sub={stats[2]?.suffix || ""}
                      />
                      <h3 className="Alata font-[500] text-white lg:text-[1.25vw] text-[1.3rem]">
                        {stats[2]?.text}
                      </h3>
                    </div>
                  )}
                  {stats && stats[3] && (
                    <div className="flex xl:flex-[0.3] flex-[1] flex-col items-center gap-2">
                      <AnimatedNumber
                        value={stats[3]?.number}
                        sub={stats[3]?.suffix || ""}
                      />
                      <h3 className="Alata font-[500] text-white lg:text-[1.25vw] text-[1.3rem]">
                        {stats[3]?.text}
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CounterSection;

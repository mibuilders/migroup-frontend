export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  export const zoomIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        opacity: 0,
        scale: 0.6,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "tween",
          duration: 0.6,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  export const slideFromLeft = (delay) => {
    return {
      hidden: {
        x: -90,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export const slideFromRight = (delay) => {
    return {
      hidden: {
        x: 90,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  export const slideFromTop = (delay) => {
    return {
      hidden: {
        y: -90,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  export const slideFromBottom = (delay) => {
    return {
      hidden: {
        y: 90,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
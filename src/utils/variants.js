export const variantNav = {
    offscreen: {
      x: -100,
      opacity: 0,
    }, 
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
      }
    }
};

// variant for accordion header...
export const variantAccordion = {
    offscreen: {
      y: 44,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        type: "spring",
      }
    }
  };
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Arrow from "./Arrow";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        cursor: "pointer",
        transform: "rotate(180deg)",
      }}
    >
      {isVisible && (
        <div onClick={scrollToTop}>
          <Arrow />
        </div>
      )}
    </Box>
  );
};
export default ScrollToTop;

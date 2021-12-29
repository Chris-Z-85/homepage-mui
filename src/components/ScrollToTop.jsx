import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function ScrollToTop() {
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
    <Box sx={{ position: "fixed", bottom: 10, right: 10 }}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <ArrowCircleUpIcon sx={{ fontSize: 70, cursor: "pointer" }} />
        </div>
      )}
    </Box>
  );
}

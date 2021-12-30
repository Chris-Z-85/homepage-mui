import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import Arrow from "./Arrow";

const ArrowAnimation = styled.div`
  position: fixed;
  left: calc(50% - 25px);
  bottom: 3rem;
  animation: action 1s infinite alternate;

  @keyframes action {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
  }
`;

const ScrollDown = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
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
      }}
    >
      {isVisible && (
        <ArrowAnimation>
          <Arrow />
        </ArrowAnimation>
      )}
    </Box>
  );
};
export default ScrollDown;

import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ArrowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background: grey;
  opacity: 0.5;
  border-radius: 50%;
  left: calc(50% - 10px);
  bottom: 2rem;
`;

const Arrow = () => {
  return (
    <ArrowButton>
      <KeyboardArrowDownIcon sx={{ fontSize: 70 }} />
    </ArrowButton>
  );
};

export default Arrow;

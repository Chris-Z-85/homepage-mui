import React from "react";
import styled from "styled-components";
import { grey, deepPurple } from "@mui/material/colors/";

const Heading = ({ title, subtitle }) => {
  const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
  `;

  const Title = styled.h2`
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    color: ${grey[800]};
    font-size: 7rem;
    font-weight: 1000;
    line-height: 1.2;
  `;

  const Subtitle = styled.h3`
    color: ${deepPurple[500]};
    position: absolute;
    bottom: 5.5rem;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 1000;
    margin: 0;
  `;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default Heading;

import React from "react";
import styled from "styled-components";
import { grey, deepPurple } from "@mui/material/colors/";

const Heading = ({ title, subtitle }) => {
  const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 60px;
    margin-bottom: 2rem;
  `;

  const Title = styled.div`
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    color: ${grey[800]};
    font-size: 5rem;
    font-weight: 1000;
    line-height: 1.2;
  `;

  const Subtitle = styled.div`
    color: ${deepPurple[500]};
    position: absolute;
    bottom: -0.5rem;
    text-transform: uppercase;
    font-size: 2rem;
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

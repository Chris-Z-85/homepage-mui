import React from "react";
import styled from "styled-components";

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
    color: #343a40;
    font-size: 7rem;
    font-weight: 1000;
    line-height: 1.2;
  `;

  const Subtitle = styled.h3`
    color: #7c3aed;
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

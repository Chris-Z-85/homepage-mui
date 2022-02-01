import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors/";

const Heading = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        marginTop: "60px",
        marginBottom: "2em",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Rubik",
          textTransform: "uppercase",
          color: `${grey[800]}`,
          fontSize: { xs: "3.5rem", md: "5rem" },
          fontWeight: "1000",
          lineHeight: "1.2",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#9b63ff",
          position: "absolute",
          bottom: "-0.5rem",
          textTransform: "uppercase",
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "1000",
          margin: "0",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Heading;

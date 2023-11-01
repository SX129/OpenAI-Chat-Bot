import { Box } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";

const Home = () => {
  return (
    <Box width={"100%"} height={"100%"} flex={"flex"} mx={"auto"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
        <Box
          sx={{
            width: "100%",
            gap: 5,
            my: 10,
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <img
            src="robot.png"
            alt="robot"
            style={{ width: "200px", margin: "auto" }}
          />
          <img
            className="image-inverted rotate"
            src="openai.png"
            alt="openai"
            style={{ width: "200px", margin: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

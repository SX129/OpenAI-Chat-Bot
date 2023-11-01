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
      </Box>
    </Box>
  );
};

export default Home;

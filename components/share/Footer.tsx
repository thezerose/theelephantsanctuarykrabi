import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Typography variant="h6" color='secondary' fontWeight={300}>
          © Copyright 2022. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;

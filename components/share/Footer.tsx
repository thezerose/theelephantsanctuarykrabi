import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#9DAC6E" }}>
      <Container maxWidth="lg">
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "280px",
          }}
        >
          <Grid container columnSpacing={6} mt={4}>
            <Grid item lg={3}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ my: "auto" }}>
                  <img alt="logo" src="/images/logo.png" width="400px" />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2} sx={{ textAlign: "left" }}>
              <Box>
                <Box mb={4}>
                  <Typography
                    color="white"
                    variant="h3"
                    sx={{ textTransform: "uppercase", fontWeight: 900 }}
                  >
                    Link
                  </Typography>
                </Box>
                <Typography color="white" my="auto">
                  Home
                </Typography>
                <Box sx={{ display: "flex", my: 1, justifyContent: "left" }}>
                  <NextLink href="/booking/1">
                    <Typography
                      color="white"
                      sx={{
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Morning Program
                    </Typography>
                  </NextLink>
                </Box>

                <Box sx={{ display: "flex", mb: 1, justifyContent: "left" }}>
                  <NextLink href="/booking/2">
                    <Typography
                      color="white"
                      sx={{
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Afternoon Program
                    </Typography>
                  </NextLink>
                </Box>

                <Typography color="white" my={1}>
                  Gallery
                </Typography>
                <Typography color="white">Contact</Typography>
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Box mb={4}>
                <Typography
                  color="white"
                  variant="h3"
                  sx={{ textTransform: "uppercase", fontWeight: 900 }}
                >
                  JOIN US ON
                </Typography>
              </Box>
              <Typography color="white">
                165 Moo 4, NongTalay, Meaung Krabi, Krabi, Thailand 81000
              </Typography>
              <Box>
                <Typography color="white">Google Map</Typography>
              </Box>
              <Box>
                <Typography color="white">
                  The Elephant Sanctuary Krabi Thailand
                </Typography>
              </Box>
              <Box>
                <Typography color="white">
                  theelephantsanctuary.krabi
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Box mb={4}>
                <Typography
                  color="white"
                  variant="h3"
                  sx={{ textTransform: "uppercase", fontWeight: 900 }}
                >
                  CONTACT
                </Typography>
              </Box>
              <Box>
                <Typography color="white">(+66)91-8265498</Typography>
              </Box>
              <Box>
                <Typography color="white">
                  theelephantsanctuary.krabi@gmail.com
                </Typography>
              </Box>
              <Box>
                <Typography color="white">Whatsapp (+66)91-8265498</Typography>
              </Box>
              <Box>
                <Typography color="white">
                  Line - TheElephantSanctuary
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#7c8b4d	",
          height: "40px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" color="#9DAC6E" my="auto">
          © Copyright 2022 The Elephant Sanctuary Krabi Thailand. All Rights
          Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

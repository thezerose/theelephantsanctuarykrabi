import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Result = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            m: "auto",
            width: "600px",
            border: "1px solid #c29e75	",
            minHeight: "400px",
            borderTop: "10px solid #c29e75",
          }}
        >
          <Stack mx={2} py={2}>
            <Box>
              <Typography
                sx={{
                  py: 2,
                  fontSize: "24px",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
                fontWeight={700}
              >
                Summary
              </Typography>
            </Box>
            <Divider />
            <Stack sx={{ px: 4 }}>
              <Box sx={{ my: 1 }}>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography fontWeight={600}>Booking id :</Typography>
                  </Grid>
                  <Grid item lg={8}>
                    <Typography>6135512044</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography fontWeight={600}>Name :</Typography>
                  </Grid>
                  <Grid item lg={8}>
                    <Typography>Apichaya Chuenjit</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography fontWeight={600}>Tel. :</Typography>
                  </Grid>
                  <Grid item lg={8}>
                    <Typography>0950673007</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography fontWeight={600}>Country :</Typography>
                  </Grid>
                  <Grid item lg={8}>
                    <Typography>Thailand</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography fontWeight={600}>Adult :</Typography>
                  </Grid>
                  <Grid item lg={8}>
                    <Typography>1 Person</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Box sx={{ width: "30px" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 700,
                      borderTop: "3px solid #c29e75",
                      py: 0.5,
                    }}
                  >
                    Service
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography fontWeight={600}>Pakages :</Typography>
                  </Grid>
                  <Grid item lg={8}>
                    <Typography>08:00 AM - 12.00 PM</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography fontWeight={600}>Date :</Typography>
                  </Grid>
                  <Grid item lg={8}>
                    <Typography>1 January 2566</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography fontWeight={600}>Deposit :</Typography>
                  </Grid>
                  <Grid item lg={8}>
                    <Typography>5,000.00 ฿ (Apichaya Cheunjit)</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography fontWeight={600}>Pay in Cash :</Typography>
                  </Grid>
                  <Grid item lg={8}>
                    <Typography>Already Paid</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography fontWeight={600}>Pick up point :</Typography>
                  </Grid>
                  <Grid item lg={8}>
                    <Typography>
                      Room 306,Tyler Apartment,Kathu,Phuket
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h5" fontWeight={600}>
                Contact
              </Typography>
              <Typography variant="h6">(+66)91-8265498</Typography>

              <Typography variant="h5" fontWeight={600} pt={0.5}>
                Office Address
              </Typography>
              <Typography variant="h6">
                165 Moo 4, NongTalay, Meaung Krabi, Krabi, Thailand 81000
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  textTransform: "uppercase",
                  mt: 2,
                  width: "84px",
                }}
              >
                home
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Result;

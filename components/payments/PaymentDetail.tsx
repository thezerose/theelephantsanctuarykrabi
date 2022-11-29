import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Bill from "./Bill";
import BillContract from "./step/BillContract";
import BookingDetail from "./step/BookingDetail";
import { Pay } from "./step/Pay";
import { PickUpMe } from "./step/PickUpMe";

const PaymentDetail = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Grid container>
          <Grid item lg={5}>
            <Box>
              <BookingDetail />
            </Box>
            <Box my={4}>
              <BillContract />
            </Box>
            <Box>
              <PickUpMe />
            </Box>
            <Box mt={4}>
              <Pay />
            </Box>
          </Grid>
          <Grid item lg={7}>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
              <Bill />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PaymentDetail;

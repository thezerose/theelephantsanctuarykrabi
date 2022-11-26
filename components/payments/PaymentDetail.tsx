import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Bill from "./Bill";
import BillContract from "./step/BillContract";
import BookingDetail from "./step/BookingDetail";
import { Pay } from "./step/Pay";

const PaymentDetail = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Grid container>
          <Grid item lg={5}>
            <BookingDetail />
            <BillContract />
            <Pay />
          </Grid>
          <Grid item lg={7}>
            <Box sx={{ display: "flex", justifyContent: "center",mt:8}}>
              <Bill />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PaymentDetail;

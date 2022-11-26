import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import { Ipackage } from "../../interface/booking";

type Props = {
  bookingData: Ipackage
}

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];
const PickUp = ( {bookingData}: Props ) => {
  return (
    <Box>
      <Box sx={{ display: "flex", my: 6 }}>
        <Typography
          sx={{ fontWeight: 900, fontSize: "24px", textTransform: "uppercase" }}
        >
          Pick Up Times
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Stepper alternativeLabel>
          {(bookingData.pickup).map((item:any) => (
            <Step key={item.id}>
              <StepLabel>
                <label>{item.pickup_time}</label>
                <label>{item.detail}</label>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default PickUp;

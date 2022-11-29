import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const BillContract = () => {
  return (
    <Box>
      <Typography>step 2 of 4</Typography>
      <Typography variant="h3" fontWeight={700}>
        Billing & Contact
      </Typography>
      <Box mt={2}>
        <Box
          sx={{
            background: "#7c8b4d",
            py: 2,
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "white", pl: 2, fontWeight: 700 }}
          >
            Confirmation and Billing Statements
          </Typography>
        </Box>
        <Box
          sx={{
            py: 3,
            px: 2,
            border: "1px solid #7c8b4d ",
            borderEndEndRadius: "12px",
            borderEndStartRadius: "12px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="small"
            fullWidth
            // required
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={4}
            sx={{ my: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="Tel"
            variant="outlined"
            size="small"
            fullWidth
          />

          {/* <Box sx={{ mt: 2 }}>
            <Typography fontSize="10px">
              {`PayPal option can also be used for credit Cards by choosing
                "Check out as Guest" or "Pay with Debit or Credit Card"`}
            </Typography>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default BillContract;

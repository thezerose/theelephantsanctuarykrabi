import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const BillContract = () => {
  return (
    <Box>
      <Typography>step 2 of 3</Typography>
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
                p: 2,
                border: "1px solid #7c8b4d ",
                borderEndEndRadius: "12px",
                borderEndStartRadius: "12px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                fullWidth
                required
              />
              <TextField
                id="outlined-basic"
                label="Middle Name"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ my: 3 }}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
                fullWidth
                required
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Country"
                size="small"
                sx={{ my: 3 }}
                fullWidth
                // value={currency}
                // onChange={handleChange}
              >
                {/* {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))} */}
              </TextField>
              <TextField
                id="outlined-select-currency"
                select
                size="small"
                fullWidth
                label="How did you hear about us?"
                // value={currency}
                // onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Special requirements"
                size="small"
                fullWidth
                multiline
                maxRows={4}
                sx={{ my: 3 }}

                //   value={value}
                //   onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Hotel name"
                variant="outlined"
                size="small"
                fullWidth
                required
              />
              <TextField
                id="outlined-basic"
                label="Room number"
                variant="outlined"
                size="small"
                fullWidth
                required
                sx={{ my: 3 }}
              />
              <TextField
                id="outlined-basic"
                label="Thai Phone number or WhatsApp number"
                variant="outlined"
                size="small"
                fullWidth
                required
              />
              <Box sx={{mt:2}}>

              <Typography fontSize="10px" >
                {`PayPal option can also be used for credit Cards by choosing
                "Check out as Guest" or "Pay with Debit or Credit Card"`}
              </Typography>
              </Box>
            </Box>
      </Box>
    </Box>
  );
};

export default BillContract;

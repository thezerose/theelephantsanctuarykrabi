import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Ipackages } from "../interface/booking";

type Props = {
  bookingData: Ipackages
}

const Book = ({bookingData}: Props) => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Box>
          <img src="/images/main.jpeg" alt="img" />
        </Box>
        <Box sx={{ mt: 8 }}>
          {(bookingData.packages)?.map((item:any) => (
            <Grid container className="mb-4" key={item.id}>
              <Grid item lg={3}>
                <img src={item.img} alt="img" width="300px" />
              </Grid>
              <Grid item lg={6} pl={4}>
                <Typography
                  variant="h3"
                  color="secondary"
                  sx={{ fontWeight: 900 }}
                >
                  {item.name}
                </Typography>
                <Typography variant="h5" sx={{ my: 1 }}>
                  {item.description}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Duration:
                  </Typography>
                  <Typography variant="h4">3 Hours (approx.)</Typography>
                </Box>
              </Grid>
              <Grid item lg={3} sx={{ textAlign: "end" }}>
                <Typography variant="h4" fontWeight={900}>
                  From THB
                </Typography>
                <Typography variant="h3" fontWeight={900} mb={2}>
                  ฿ {item.price_adult}
                </Typography>
                <Button variant="contained" color="primary" size="large" href={`booking/${item.id}`}>
                  Book Now
                </Button>
              </Grid>
          </Grid>
          ))}

        </Box>
      </Box>
    </Container>
  );
};

export default Book;

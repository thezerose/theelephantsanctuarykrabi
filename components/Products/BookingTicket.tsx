import { Box, Button, Grid, MenuItem, Stack, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { IBookingTicket } from "../../interface/booking";
import { converToCurrencyFormat } from "../../utils/numberFormat";
import { getBookPackagePeople } from "../../pages/api/booking";
import { useRouter } from "next/router";

const moment = require("moment");
type Props = {
  bookingTicketData: IBookingTicket
}

const BookingTicket = ({bookingTicketData}: Props) => {
  const router = useRouter();
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(moment().format("YYYY-MM-DD")));
  const [numAdult, setNumAdult] = useState<number>(1);
  const [numChild, setNumChild] = useState<number>(0);
  const [numInfant, setNumInfant] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isFull, setIsFull] = useState<number>(0);

  const handleAdultChange = (event: SelectChangeEvent) => {
    setNumAdult(parseInt(event.target.value as string));
  };
  const handleChildChange = (event: SelectChangeEvent) => {
    setNumChild(parseInt(event.target.value as string));
  };
  const handleInfantChange = (event: SelectChangeEvent) => {
    setNumInfant(parseInt(event.target.value as string));
  };

  useEffect(() => {
    const adultPrice = bookingTicketData.adult_price * numAdult;
    const childPrice = bookingTicketData.child_price * numChild;
    const infantPrice = bookingTicketData.infant_price * numInfant;
    setTotalPrice(adultPrice + childPrice + infantPrice)
  },[numAdult, numChild, numInfant])

  const submitBookingHandler = async() => {
    const bookDate = moment(date).format("YYYY-MM-DD");
    const res = await getBookPackagePeople(bookDate, bookingTicketData.packageId);
    if(parseInt(res) < 100){
      router.push(`/payment?package_id=${bookingTicketData.packageId}&book_date=${bookDate}&adult=${numAdult}&child=${numChild}&infant=${numInfant}`);
    } else {
      setIsFull(1)
    }
  }

  return (
    <Box>
      <Box
        sx={{
          background: "#7c8b4d",
          py: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            pl: 2,
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "24px",
          }}
        >
          Start Booking Now
        </Typography>
      </Box>
      <Box
        sx={{
          background: "#fbf9f5",
        }}
      >
        <Stack sx={{ px: 4, py: 2 }}>
          <Typography variant="h4">
            Number of Participants{" "}
            <Typography component="span" color="#7c8b4d">
              *
            </Typography>{" "}
          </Typography>
          <Grid container mt={2}>
            <Grid item xs={6}>
              <Box>
                <Typography>Adult</Typography>
                <Typography sx={{ color: "#71747a	" }}>{converToCurrencyFormat(bookingTicketData.adult_price)} THB</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <Select 
                value={`${numAdult}`}
                onChange={handleAdultChange}
              >
              {[...Array(10)].map((x, i) =>
                <MenuItem value={i+1} key={i+1}>{i+1}</MenuItem>
              )}
              </Select>
            </Grid>
          </Grid>
          <Grid container mt={2}>
            <Grid item xs={6}>
              <Box>
                <Typography>Child (4-10 yrs)</Typography>
                <Typography sx={{ color: "#71747a	 " }}>{converToCurrencyFormat(bookingTicketData.child_price)} THB</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <Select 
                value={`${numChild}`}
                onChange={handleChildChange}
              >
                {[...Array(10)].map((x, i) =>
                  <MenuItem value={i} key={i}>{i}</MenuItem>
                )}
                </Select>
            </Grid>
          </Grid>
          <Grid container mt={2}>
            <Grid item xs={6}>
              <Box>
                <Typography>Infant (Below 4 yrs)</Typography>
                <Typography sx={{ color: "#71747a	 " }}>{(bookingTicketData.infant_price!==0)?converToCurrencyFormat(bookingTicketData.infant_price)+' THB':'Free'}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <Select 
                value={`${numInfant}`}
                onChange={handleInfantChange}
              >
                {[...Array(10)].map((x, i) =>
                  <MenuItem value={i} key={i}>{i}</MenuItem>
                )}
              </Select>
            </Grid>
          </Grid>
          <Box>
            <Typography variant="h4">
              Choose a Date{" "}
              <Typography component="span" color="#7c8b4d">
                *
              </Typography>{" "}
            </Typography>
            <Stack sx={{ my: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid
                  item
                  sx={{
                    border: "1px solid #7c8b4d !important",
                    background: "white",
                  }}
                >
                  <CalendarPicker
                    date={date}
                    maxDate={dayjs(moment().add(1, 'year'))}
                    disablePast={true}
                    onChange={(newDate) => setDate(newDate)}
                  />
                </Grid>
              </LocalizationProvider>
            </Stack>
          </Box>

          <Grid container mt={2}>
            <Grid item xs={6} sx={{ display: "flex" }}>
              <Box my="auto">
                <Typography variant="h3">Total Price</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <Typography
                color="secondary"
                sx={{ fontSize: "24px", my: "auto" }}
                fontWeight={700}
              >
                {converToCurrencyFormat(totalPrice)} THB
              </Typography>
            </Grid>
          </Grid>

          {
            (isFull === 1) && (
              <Typography variant="h6" sx={{ color: "#FF0000	 " }}>
              This date already full, Please change date
              </Typography>
            )
          }


          <Box sx={{ my: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ borderRadius: 0, fontSize: "16px" }}
              onClick={submitBookingHandler}
            >
              Book Now
            </Button>
          </Box>
          <Typography variant="h6" sx={{ color: "#71747a	 " }}>
            {""}
            <Typography variant="h6" component="span" fontWeight={700}>
              Please note:
            </Typography>
            {` `} Booking confirmation is issued to you indicating that payment
            is complete
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default BookingTicket;

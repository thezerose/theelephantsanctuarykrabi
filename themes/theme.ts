import { createTheme, responsiveFontSizes } from "@mui/material";


const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#7c8b4d',
      },
      background: {
        paper: '#ffffff',
        default: '#ffffff',
      },
      text: {
        primary: '#33302f',
        secondary: '#ffffff',
      },
      success: {
        main: '#53FF98',
        contrastText: '#000000',
      },
      error: {
        main: '#FC5555',
      },
      warning: {
        main: '#FFC107',
      },
      divider: '#7c8b4d,0.8',
    },
    
    typography: {
      fontFamily: [
        'Inter',
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontSize: '48px',
      },
      h2: {
        fontSize: '32px',
      },
      h3: {
        fontSize: '20px',
      },
      h4: {
        fontSize: '16px',
      },
      h5: {
        fontSize: '14px',
      },
      h6: {
        fontSize: '12px',

      },
    },
    components: {
      
      MuiButton: {
        variants: [
          {
            props: {
              variant: 'contained',
              color: 'primary',
            },
            style: {
              background: '#7c8b4d !important',
              borderRadius:'25px'
            },
          },
         
        ],
      },
    },
  })
);

export default { theme };
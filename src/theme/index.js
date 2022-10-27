import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f23f57',
    },
  },
  typography: {
    h2: {
      fontFamily: 'Tanker',
      textAlign: 'center',
    },
  },
});

export default theme;

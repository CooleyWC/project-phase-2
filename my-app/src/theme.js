import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#007bff'
        },
        secondary: {
            main: '#4682b4'
        },
        background: {
            default: '#333333'
        }
    },
    components: {
        MuiInputBase: {
          styleOverrides: {
            root: {
              color: '#fff', 
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.5)'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6c5ce7'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff'
              }
            }
          }
        }
      }
    });


export default theme;
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette: {
        primary: {
            main: '#007bff'
        },
        secondary: {
            main: '#6c5ce7'
        },
        background: {
            default: '#333333'
        }
    },
    components: {
        MuiInputBase: {
          styleOverrides: {
            root: {
              color: '#fff', // Set the text color
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.5)' // Set the outline color
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6c5ce7'// Set the hover outline color
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff' // Set the focused outline color
              }
            }
          }
        }
      }
    });


export default theme;
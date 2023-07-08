import { createTheme } from '@mui/material'

export const theme = createTheme({
   palette: {
      mode: 'light',
      primary: {
         main: '#ffffff',
         dark: '#363636',
         white: '#F7F7F7',
      },
      secondary: {
         main: '#DD8A08',
         dark: '#4F7755',
         light: '#1C2E20',
         lightbrown: '#FFBE58',
      },
      tertiary: {
         darkgray: '#646464',
         lightgreen: '#97C69E',
         middlegray: '#828282',
         blue: '#266BD3',
         lightgray: '#C4C4C4',
         lightwhite: '#F3F3F3',
         eyllow: '#F7D212',
         lightpink: '#FFF0F6',
         pink: '#FFCBE0',
      },
      typograghpy: {
         fontFamily: 'Open Sans',
      },
   },
})

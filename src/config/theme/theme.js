import { createMuiTheme } from '@material-ui/core/styles'; 

const theme = createMuiTheme({
  palette: {
    backgroundAltColor: '#F0F1F1', // jasny szary
    dividerColor: '#707070',
    dropdownMenuBgr: '#EEEDEB',
    fontFamilyAlt: 'Merriweather',
    fontColorInferior: '#737373', // ciemny szary
    primary: {
      main: '#FAD648' // jasny żółty
    },
    text: {
      primary: '#3C3C3C',    // bardzo ciemny szary
      secondary: '#5E5322'  // ciemny żółty
    }
  },
  typography: {
    fontFamily: 'Open Sans'
  }
});

export default theme;
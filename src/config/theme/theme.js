import { createMuiTheme } from '@material-ui/core/styles';

// Pozostałe kolory do przypisania w poszczególne sekcje:
// #737373 - ciemny szary

const theme = createMuiTheme({
  palette: {
    backgroundAltColor: '#F0F1F1', // jasny szary
    dividerColor: '#707070',
    fontFamilyAlt: 'Merriweather',
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
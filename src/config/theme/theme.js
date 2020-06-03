import { createMuiTheme } from '@material-ui/core/styles';

// Pozostałe kolory do przypisania w poszczególne sekcje:
// #F0F1F1 - jasny szary
// #737373 - ciemny szary

// Pozostałe fonty:
// 'Merriweather', sefir

const theme = createMuiTheme({
  palette: {
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
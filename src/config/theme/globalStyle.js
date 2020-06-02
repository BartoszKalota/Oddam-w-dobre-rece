export const globalStyle = {
  '@global': {
    body: {
      fontFamily: `'Open Sans', sans-serif`
    },
    a: {
      color: 'inherit', // !important zaburzało działanie activeClassName w navbarze aplikacji
      textDecoration: [['none'], '!important']
    }
  }
};
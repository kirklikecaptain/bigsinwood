import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
  test: 'Test'
};

const ThemeProvider = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;

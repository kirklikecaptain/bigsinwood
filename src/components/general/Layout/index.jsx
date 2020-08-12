import React from 'react';

import TopNav from '../TopNav';
import Footer from '../Footer';
import Page from '../Page';

import ThemeProvider from '../../../style/ThemeProvider';
import GlobalStyles from '../../../style/GlobalStyles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Layout = props => {
  const { children, ...rest } = props;
  return (
    <ThemeProvider>
      <GlobalStyles />
      <TopNav />
      <Page {...rest}>{children}</Page>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

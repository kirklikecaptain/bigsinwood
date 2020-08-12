import React from 'react';
import { Helmet } from 'react-helmet-async';

const DefaultHead = () => {
  return (
    <Helmet>
      <meta property='og:site_name' content='BIG SIN WOOD' />
      <meta property='og:type' content='website' />

      <meta name='twitter:site' content='@bigsinwood' />

      <meta
        name='google-site-verification'
        content='IMLrmnyDryrkko7ihyr43HP-meqtnBaIz3B1cW5kU7k'
      />
    </Helmet>
  );
};

export default DefaultHead;

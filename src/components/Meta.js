import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../style/_index.less';

const Meta = ({ title, description }) => {
  useEffect(() => {
    window.analytics && window.analytics.page();
  }, []);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='google-site-verification' content='IMLrmnyDryrkko7ihyr43HP-meqtnBaIz3B1cW5kU7k' />
    </Helmet>
  );
};

export default Meta;

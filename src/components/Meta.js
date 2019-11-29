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
    </Helmet>
  );
};

export default Meta;

import React from 'react';
import { Helmet } from 'react-helmet';
import '../style/_index.less';

const Meta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};

export default Meta;

import React from 'react';
import { Helmet } from 'react-helmet';
import '../style/_index.less';

const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Meta;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import '../style/_index.less';
import defaultImage from '../assets/big-sin-wood-meta.jpg';

const Meta = ({ title, description, canonical, ogImage, noIndex }) => {
  useEffect(() => {
    window.analytics && window.analytics.page();
  }, []);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='google-site-verification' content='IMLrmnyDryrkko7ihyr43HP-meqtnBaIz3B1cW5kU7k' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta property='og:url' content={canonical} />
      <meta property='og:site_name' content='BIG SIN WOOD' />
      <meta property='og:image' content={ogImage} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:site' content='@bigsinwood' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      {noIndex && <meta name='robots' content='noindex' />}
    </Helmet>
  );
};

Meta.defaultProps = {
  ogImage: `https://www.bigsinwood.com${defaultImage}`
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string.isRequired,
  ogImage: PropTypes.string
};

export default Meta;

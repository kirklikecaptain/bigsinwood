import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import defaultImage from '../../../images/big-sin-wood-meta.jpg';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  shareImage: PropTypes.string
};

const defaultProps = {
  shareImage: defaultImage
};

const Head = props => {
  const { title, description, shareImage, noIndex } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta property='og:site_name' content='BIG SIN WOOD' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={href} />
      <meta name='og:description' content={description} />
      <meta property='og:image' content={shareImage} />

      <meta name='twitter:site' content='@bigsinwood' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:image' content={shareImage} />
      <meta name='twitter:description' content={description} />

      {noIndex && <meta name='robots' content='noindex' />}

      <meta
        name='google-site-verification'
        content='IMLrmnyDryrkko7ihyr43HP-meqtnBaIz3B1cW5kU7k'
      />
    </Helmet>
  );
};

Head.defaultProps = defaultProps;
Head.propTypes = propTypes;

export default Head;

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.bigsinwood.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/general/Layout/index.jsx`)
      }
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 85
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        trackPage: true,
        prodKey: 'mIAEIbsipcIVKolROuKFROdFl2sb1wxN',
        devKey: 'qY1DawzmqR1Qt9f75qTUyHyBw3hZPA7g'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '0nwt33fm2jth',
        accessToken: 'oqa8sChGi6gjZa1fPkg3C6pKrhHvG3-hSiC6wk_vOXs'
      }
    }
  ]
};

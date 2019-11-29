module.exports = {
  siteMetadata: {
    siteUrl: `https://www.bigsinwood.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-less',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
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

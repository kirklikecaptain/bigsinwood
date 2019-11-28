module.exports = {
  siteMetadata: {
    siteUrl: `https://bigsinwood.netlify.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-less',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '0nwt33fm2jth',
        accessToken: 'oqa8sChGi6gjZa1fPkg3C6pKrhHvG3-hSiC6wk_vOXs'
      }
    }
  ]
};

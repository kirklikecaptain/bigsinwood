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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Big Sin Wood`,
    //     short_name: `Big Sign Wood`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`
    //     // icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};

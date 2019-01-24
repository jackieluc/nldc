module.exports = {
  siteMetadata: {
    title: `NLDC 2019 | AIESEC`,
    description: `Join us in "Disrupting the Now!" May 1 - 5, 2019 at the National Leadership Development Conference in Calgary.`,
    author: `@jackieluc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NLDC 2019`,
        short_name: `NLDC`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#037EF3`,
        display: `minimal-ui`,
        icon: `src/images/nldc2019-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120821697-1",
        head: true,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-KHHQQF5",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

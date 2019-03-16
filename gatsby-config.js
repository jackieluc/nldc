module.exports = {
  siteMetadata: {
    title: `NLDC 2019 | AIESEC`,
    description: `Join us in "Disrupting the Now!" May 1 - 5, 2019 at the National Leadership Development Conference in Calgary.`,
    author: `@jackieluc`,
    siteUrl: `https://www.nldcnow.com`
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
        name: `National Leadership Development Conference 2019`,
        short_name: `NLDC 2019`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#037EF3`,
        display: `minimal-ui`,
        icon: `src/images/nldc2019-logo.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    // `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-remove-serviceworker`,
      options: {
        filename: `service-worker.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-120821697-1`,
        head: true,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Lato:300,400,700`]
        },
        custom: {
          families: [`BillyOhio`]
        }
      }
    },
    `gatsby-plugin-sitemap`,
  ],
}

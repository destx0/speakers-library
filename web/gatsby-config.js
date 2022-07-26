const sanityConfig = require('./sanity-config');

require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `speakers-library`,
    siteUrl: `https://speakerslibrary.in`,
    description: `speakers-library is a platform for knowledge in your native language`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sitemap`,

    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `speakerslibrary`,
      },
    },
    {
      resolve: 'gatsby-plugin-social9-socialshare',
      options: {
        content: 'da2f2c59832a4614a34f76e5cffb1501',
        async: true,
        defer: true,
      },
    },
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: 'https://6d27c855d2524aadb473bb437b6e631d@o1333822.ingest.sentry.io/6599588',
        sampleRate: 0.7,
      },
    },
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        height: 5,
        prependToBody: false,
        color: `#00D7FF`,
        footerHeight: 500,
        headerHeight: 0,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
        spinnerSelector: 'div.spin',
      },
    },
  ],
};

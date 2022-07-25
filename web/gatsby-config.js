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
  ],
};

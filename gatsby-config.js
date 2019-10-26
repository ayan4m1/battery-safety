module.exports = {
  siteMetadata: {
    title: 'LiPo Safety',
    description: 'The LiPo safety resource',
    author: '@ayan4m1'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src/docs`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        /* eslint-disable camelcase */
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-eslint',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-138430995-2',
        head: true,
        anonymize: true
      }
    }
  ]
};
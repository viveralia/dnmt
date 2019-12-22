module.exports = {
  siteMetadata: {
    title: 'DNMT',
    tagline: 'Denim & More',
    description:
      'Everything Denim. Find jeans, jackets for both, men and women, baggy, slim or skinny fit. Free shipping worldwide this week only.',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        type: `hashtag`,
        hashtag: `doubledenim`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/products`,
        name: `products`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

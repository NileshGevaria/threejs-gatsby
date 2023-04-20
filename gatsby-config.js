/**
 * @type {import('gatsby').GatsbyConfig}
 */

// module.exports = {
//   siteMetadata: {
//     title: `ThreeJSDevelopers`,
//     siteUrl: `https://www.yourdomain.tld`,
//   },
//   plugins: [],
// }

module.exports = {
  siteMetadata: {
    title: `ThreeJS Developers`,
    description: `ThreeJSDevelopers is your best option to hire top three.js developers or a dedicated team on an hourly, monthly, or full-time basis.`,
    // image: `/src/images/favicon.ico`,
    // logo: "favicon.ico",
    siteUrl: `https://www.threejsdevelopers.com/`,
  },
  // plugins: [`gatsby-plugin-react-helmet`]
  // plugins: [
  //   {
  //     resolve: 'gatsby-plugin-manifest',
  //     options: {
  //       icon: './src/images/favicon.ico',
  //     },
  //   },
  // ],
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
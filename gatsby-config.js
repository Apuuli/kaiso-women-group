module.exports = {
  siteMetadata: {
    title: `Kaiso Women's Group`,
    description: `A locally women led group for grassroot advocacy, awareness and activisim of gender Equality, Women Rights, Women Empowerment, Environmentalism in Kaiso landing site in Hoima distict in Uganda on the eastern shore line of lake Albert.`,
    email: `kaisowomensgroup@gmail.com`,
    telephone: `@johnapuuli`,
    twitterHandle: `@kaisoWomensGroup`,
    author: `@apuuliJohn`,
    address: {
      country: `Uganda`,
      district: `Hoima`,
      subcounty: `Kabaale`,
      parish: `Mbeegu`,
      village: `kaiso Trading Center`,
      road: `Kaiso-Tonya Road`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kaiso Women's Group`,
        short_name: `KWG`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kwg-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Mulish", "Dancing Script"],
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: `Kaiso Women's Group`,
    description: `A locally women led group for grassroot advocacy, awareness and activism of feminism, Women Empowerment, Environmentalism in Kaiso landing site in Hoima distict in Uganda on the eastern shore line of lake Albert.`,
    email: `kaisowomensgroup@gmail.com`,
    telephone: `+256777274131`,
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
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `article`,
          `user`,
          // if you don't want to leave the definition of an api endpoint to the pluralize module
          {
            name: `collection-name`,
            endpoint: `custom-endpoint`,
          },
          // if you want to use custom query strings (e.g. to fetch all locales)
          // mapping of api.qs object will be used to create final query string (e.g: http://localhost:1337/collection-name?_locale=all)
          {
            name: `collection-name`,
            api: { qs: { _locale: "all" } },
          },
          // exemple fetching only english content
          {
            name: `collection-name`,
            api: { qs: { _locale: "en" } },
          },
        ],
        //If using single types place them in this array.
        // singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: '',
        //   password: '',
        // },
      },
    },
    // {
    //   resolve: `gatsby-source-youtube-v3`,
    //   options: {
    //     channelId: [
    //       "<< Array of Youtube channelIDs>>",
    //       "UCK8sQmJBp8GCxrOtXWBpyEA",
    //     ],
    //     apiKey: "<< Add your Youtube api key here>>", // Optional for public requests
    //     maxVideos: 50, // Defaults to 50
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

import type { GatsbyConfig } from "gatsby";

require('dotenv').config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      apiKey: process.env.MICROCMS_API_KEY,
      serviceId: process.env.MICROCMS_SERVICE_ID,
      apis: [
        {
          endpoint: 'blogs',
        },
        {
          endpoint: 'categories',
        },
      ],
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;

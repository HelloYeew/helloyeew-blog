module.exports = {
  siteMetadata: {
    title: `HelloYeew's Blog`,
    name: `Phawit Pornwattanakul`,
    siteUrl: `https://novela.narative.co`,
    description: `HelloYeew's personal blog and a place to write everything that I want.`,
    hero: {
      heading: `Welcome to HelloYeew's blog, the place that I write everything that I want.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/nonggummud`,
      },
      {
        name: `github`,
        url: `https://github.com/HelloYeew`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/ttim.gummud/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Phawit Pornwattanakul`,
        short_name: `HelloYeew`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

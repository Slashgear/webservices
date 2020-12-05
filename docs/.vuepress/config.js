module.exports = {
  plugins: {
    sitemap: {
      hostname: "https://learn-webservices.netlify.com",
    },
  },
  title: "Learn webservices",
  description: "Ateliers et cours autour des webservices",
  themeConfig: {
    editLinkText: "Edit cette page sur Github",
    lastUpdated: "Mis à jour le",
    repo: "Slashgear/webservices",
    repoLabel: "Contribue !",
    docsRepo: "Slashgear/webservices",
    docsDir: "docs",
    editLinks: true,
    sidebar: ["/", "/json-rpc.md", "/soap.md", "/rest.md", "/graphql.md"],
    nav: [{ text: "Home", link: "/" }],
  },
};

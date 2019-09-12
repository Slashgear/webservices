module.exports = {
  plugins: {
    sitemap: {
      hostname: "https://learn-webservices.netlify.com"
    }
  },
  locales: {
    "/": {
      lang: "fr-FR",
      title: "Webservices",
      description: "Ateliers et cours autour des webservices"
    }
  },
  themeConfig: {
    editLinkText: "Edit cette page sur Github",
    lastUpdated: "Mis à jour le",
    repo: "Slashgear/webservices",
    repoLabel: "Contribue !",
    docsRepo: "Slashgear/webservices",
    docsDir: "docs",
    editLinks: true,
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        nav: [{ text: "Home", link: "/" }],
        sidebar: []
      }
    }
  }
};

const nextTranslate = require("next-translate");
const withTranslateRoutes = require("next-translate-routes/plugin");

module.exports = nextTranslate(
  withTranslateRoutes({
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/nhu-cau-mua/:province",
          destination: "/nhu-cau-mua",
        },
        {
          source: "/gioi-thieu",
          destination: "/",
        },
      ];
    },
    images: {
      domains: [
        "picsum.photos",
        "api.taisanvn.com",
        "nova-file.taisanvn.com",
        "nova-file.test.taisanvn.com",
      ],
    },
    i18n: {
      locales: ["vi", "en"],
      defaultLocale: "vi",
    },
  })
);

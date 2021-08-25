const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["react-native-web"]);
const withFonts = require("next-fonts");
const withImages = require("next-images");

const nextConfig = {
  projectRoot: __dirname,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "connect-src 'self';",
          },
        ],
      },
    ];
  },
};

module.exports = withPlugins(
  [withTM, [withExpo, { projectRoot: __dirname }], withFonts],
  nextConfig
);

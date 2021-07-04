// @generated: @expo/next-adapter@2.1.77
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");
const withImages = require("next-images");

module.exports = withExpo(
  withFonts(
    withImages({
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
    })
  )
);

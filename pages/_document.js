import { getInitialProps } from "@expo/next-adapter/document";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
const isProd = process.env.NODE_ENV === "production";
const TOKEN = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {isProd && (
            <>
              <script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon={`{"token": "${TOKEN}"}`}
              ></script>
            </>
          )}
        </body>
      </Html>
    );
  }
}

// Import the getInitialProps method and assign it to your component to ensure the react-native-web styles are used.
CustomDocument.getInitialProps = getInitialProps;

// OR...
//
// CustomDocument.getInitialProps = async (props) => {
//   const result = await getInitialProps(props);
//   return result;
// };

export default CustomDocument;

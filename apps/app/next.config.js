//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        // will match exactly /basic-redirect
        source: "/basic-redirect",
        destination: "/redirects",
        permanent: false,
      },
      {
        // will match /wildcard-redirect/a/b/c/
        source: "/wildcard-redirect/:slug*",
        destination: "/redirects",
        permanent: false,
      },
      {
        // will match /regex-redirect/123 but not /regex-redirect/abc
        source: "/regex-redirect/:slug(\\d{1,})",
        destination: "/redirects",
        permanent: false,
      },
      {
        // will match /query-redirect?q=hello
        source: "/query-redirect",
        destination: "/redirects",
        permanent: false,
        has: [
          {
            type: "query",
            key: "q",
            value: "hello",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/rewrite",
        destination: "/",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/custom-headers",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
        ],
      },
    ];
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNx(nextConfig);

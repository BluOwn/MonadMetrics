/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  serverPlatform: "node",
  tailwind: true,
  postcss: true,
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true
  },
  serverDependenciesToBundle: [/^marked.*/, "@farcaster/frame-sdk"],
  publicPath: "/build/",
  assetsBuildDirectory: "public/build"
};
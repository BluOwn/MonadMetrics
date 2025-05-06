/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    ignoredRouteFiles: ["**/.*"],
    serverModuleFormat: "cjs",
    serverPlatform: "node",
    tailwind: true,
    postcss: true,
    future: {
        v2_dev: true,
        v2_errorBoundary: true,
        v2_headers: true,
        v2_meta: true,
        v2_normalizeFormMethod: true,
        v2_routeConvention: true,
    },
    serverDependenciesToBundle: [/^marked.*/],
    publicPath: "/build/",
    serverBuildPath: "api/index.js",
    assetsBuildDirectory: "public/build",
    devServerPort: 3000,
};
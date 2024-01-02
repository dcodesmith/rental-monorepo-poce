/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  tailwind: true,
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  watchPaths: () => require('@nx/remix').createWatchPaths(__dirname),
};

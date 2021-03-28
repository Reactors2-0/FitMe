const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox
  } = require("customize-cra");
  const path = require("path");
  
  module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
  
    // disable eslint in webpack
    disableEsLint(),
  
    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
  
    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
      ['@Components']: path.resolve(__dirname, './src/frontoffice/components'),
      ['@FrontOfficeComponents']: path.resolve(__dirname, './src/frontoffice/components/frontoffice'),
      ['@BackOfficeComponents']: path.resolve(__dirname, './src/backoffice/components'),
      ['@FrontOfficePages']: path.resolve(__dirname, './src/frontoffice/pages'),
      ['@BackOfficePages']: path.resolve(__dirname, './src/backoffice/pages'),
      ['@Actions']: path.resolve(__dirname, './src/actions'),
      ['@Constants']: path.resolve(__dirname, './src/constants'),
      ['@Reducers']: path.resolve(__dirname, './src/reducers'),
      ['@Routes']: path.resolve(__dirname, './src/routes'),
      ['@FrontOfficeAssets']: path.resolve(__dirname, './src/frontoffice/assets'),
      ['@BackOfficeAssets']: path.resolve(__dirname, './src/backoffice/assets')
    }),
    // adjust the underlying workbox
    adjustWorkbox(wb =>
      Object.assign(wb, {
        skipWaiting: true,
        exclude: (wb.exclude || []).concat("index.html")
      })
    )
  );

const commonConfig = require('./webpack.common');

const webpackMerge = require('webpack-merge');

const addons = (/* string | string[] */ addonsArg) => {
  let addons = [...[addonsArg]] // Normalize array of addons (flatten)
    .filter(Boolean); // If addons is undefined, filter it out

  return addons.map(addonName =>
    require(`./config/addons/webpack.${addonName}.js`)
  );
};

module.exports = env => {
  env = env || {
    mode: 'dev'
  };

  const envConfig = require(`./webpack.${env.mode}.js`);
  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig,
    ...addons(env.addons)
  );

  return mergedConfig;
};

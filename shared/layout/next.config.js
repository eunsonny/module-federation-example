const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    social: `social@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    home: `home@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    gathering: `gathering@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'layout',
        filename: 'static/chunks/remoteEntry.js',
        dts: false,
        exposes: {
          './gnb': './components/gnb.js',
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          exposePages: true,
          
        },
      }),
    );

    return config;
  },
};

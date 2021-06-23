const path = require('path')

const aliasPathsToResolve = [
  // { name: '@test/ui', path: path.resolve(__dirname, '../../react-ui') },
  // { name: '@utils', path: path.resolve(__dirname, '../../utils') },
]

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.externals = {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    }

    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../../react/'),
        path.resolve(__dirname, '../../utils/'),
      ],
      use: [defaultLoaders.babel],
    })

    /** Resolve aliases */
    aliasPathsToResolve.forEach((mod) => {
      config.resolve.alias[mod.name] = mod.path
    })

    return config
  },
};

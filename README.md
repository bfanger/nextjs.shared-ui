# nextjs-shared-ui

This is the base branch where [the SO question][4] is based of:

## Shared UI in NextJS unable to receive imported modules value in build process

So I have managed to share UI between websites. However, this worked only once by deleting the corrupt `.next` and `node_modules` folders. After that I got the error:

```
> next build

info  - Using external babel configuration from D:\Code\Project\next\siteName\.babelrc
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data
[  ==] info  - Generating static pages (0/3)
Error occurred prerendering page "/". Read more: https://err.sh/next.js/prerender-error
Error: Minified React error #321; visit https://reactjs.org/docs/error-decoder.html?invariant=321 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at S (D:\Code\Project\next\siteName\.next\server\pages\index.js:11266:327)
    at Object.module.exports.hLw4.exports.useContext (D:\Code\Project\next\siteName\.next\server\pages\index.js:11270:269)
    at D:\Code\Project\next\siteName\.next\server\pages\index.js:10999:13829
    at Object.styled.div [as render] (D:\Code\Project\next\siteName\.next\server\pages\index.js:10999:14417)
    at a.b.render (D:\Code\Project\next\siteName\node_modules\react-dom\cjs\react-dom-server.node.production.min.js:43:194)
    at a.b.read (D:\Code\Project\next\siteName\node_modules\react-dom\cjs\react-dom-server.node.production.min.js:41:83)
    at exports.renderToString (D:\Code\Project\next\siteName\node_modules\react-dom\cjs\react-dom-server.node.production.min.js:52:138)
    at Object.renderPage (D:\Code\Project\next\siteName\node_modules\next\dist\next-server\server\render.js:54:851)
    at Function.getInitialProps (D:\Code\Project\next\siteName\.next\server\pages\_document.js:734:19)
    at loadGetInitialProps (D:\Code\Project\next\siteName\node_modules\next\dist\next-server\lib\utils.js:5:101)
```

I fixed that by adding in the [`config.externals` seen here in the example project][1]

Now the issue is that by compiling the theme object is not read out at build time.
But the theme object is loggable at build time.
To understand better please look at the [`index.tsx` of app1 or app2 from the example code][2]

The following will be logged in my console by running `npm run build`

```
> next build

info  - Using external babel configuration from D:\Code\nextjs.shared-ui\next\app1\.babelrc
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data
[  ==] info  - Generating static pages (0/3)

=> logging app1 lowlight: #051923

Error occurred prerendering page "/". Read more: https://err.sh/next.js/prerender-error
TypeError: Cannot read property 'lowlight' of undefined
    at module.exports.23aj.Container.children.children (D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:547:51)
    at me (D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:12049:11223)
    at e.generateAndInjectStyles (D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:12049:8295)
    at D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:12049:13946
    at D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:12049:14013
    at Object.styled.div [as render] (D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:12049:14417)
    at a.b.render (D:\Code\nextjs.shared-ui\next\app1\node_modules\react-dom\cjs\react-dom-server.node.production.min.js:43:194)
    at a.b.read (D:\Code\nextjs.shared-ui\next\app1\node_modules\react-dom\cjs\react-dom-server.node.production.min.js:41:83)
    at exports.renderToString (D:\Code\nextjs.shared-ui\next\app1\node_modules\react-dom\cjs\react-dom-server.node.production.min.js:52:138)
    at Object.renderPage (D:\Code\nextjs.shared-ui\next\app1\node_modules\next\dist\next-server\server\render.js:54:851)
info  - Generating static pages (3/3)

> Build error occurred
Error: Export encountered errors on following paths:
        /
    at D:\Code\nextjs.shared-ui\next\app1\node_modules\next\dist\export\index.js:30:1103
    at async D:\Code\nextjs.shared-ui\next\app1\node_modules\next\dist\build\tracer.js:3:470
    at async D:\Code\nextjs.shared-ui\next\app1\node_modules\next\dist\build\index.js:41:69
    at async D:\Code\nextjs.shared-ui\next\app1\node_modules\next\dist\build\tracer.js:3:470
    at async D:\Code\nextjs.shared-ui\next\app1\node_modules\next\dist\build\index.js:21:1225
    at async D:\Code\nextjs.shared-ui\next\app1\node_modules\next\dist\build\tracer.js:3:470
```

The command line says that we can not access the `lowlight` of `undefined`.  
Even though we logged the same `lowlight` just moments before the error.  
For me, that ^ is unexpected behavior since we can log the value before it.

next.config.js:

```javascript
const path = require('path')

const aliasPathsToResolve = [
  { name: '@react', path: path.resolve(__dirname, '../../react') },
  { name: '@utils', path: path.resolve(__dirname, '../../utils') },
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
}
```

Folder structure:

```
nextjs.shared-ui (root)
├/next
│├/app1 (next project)
│└/app2 (next project)
├/react (shared ui components)
├/sites (custom express servers for next)
├/utils
├ [config files]
└ index.js (end point for both next apps)
```

How can I resolve this build issue?
The full example project can be found here: [https://github.com/TessavWalstijn/nextjs.shared-ui][3]

I have added a branch without sharing UI.
This to show that the react components work fine
and that the theme object does not becomes undefined at other build processes.

Branch without sharing UI: https://github.com/TessavWalstijn/nextjs.shared-ui/tree/working-not-shared-ui-version

[1]: https://github.com/TessavWalstijn/nextjs.shared-ui/blob/bugstate/not-recieving-imported-modules/next/app1/next.config.js#L10
[2]: https://github.com/TessavWalstijn/nextjs.shared-ui/blob/bugstate/not-recieving-imported-modules/next/app1/pages/index.tsx#L11
[3]: https://github.com/TessavWalstijn/nextjs.shared-ui/tree/bugstate/not-recieving-imported-modules
[4]: https://stackoverflow.com/questions/66570634/shared-ui-in-nextjs-unable-to-receive-imported-modules-value-in-build-process

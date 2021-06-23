# nextjs-shared-ui

This project is setup to try and show / fix the requested behaviour of the following issue explained in [this SO question](https://stackoverflow.com/questions/66570634/shared-ui-in-nextjs-unable-to-receive-imported-modules-value-in-build-process)

The purpose it to try and share react UI between 2 nextjs apps.

Both of the apps have a custom express server.

This branch had the following issue: 
```
Error: Cannot find module 'D:\Code\nextjs.shared-ui\next\app2\.next\server\font-manifest.json'
```
To reproduce run the following:
`npm run i-all` to install all packages for **all** npm projects
`npm run build` to build all next projects
`npm run prod-b` running production server via `./sites/*` folder

I took this fix from [`working-not-shared-ui-version`](https://github.com/TessavWalstijn/nextjs.shared-ui/tree/working-not-shared-ui-version) because I had the idea it might fix it.

However with moving the `getStaticProps()` to `getServerSideProps()` only fixed the initial build process. But moving it to building the page on request time still throws the same error:
```
> cross-env NODE_ENV=production nodemon ./index-a.js

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node ./index-a.js`      
Listening on post 3030

=> logging app1 lowlight: #051923

TypeError: Cannot read property 'lowlight' of undefined
    at module.exports.23aj.Container.children.children (D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:547:51)
    at me (D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:12048:11223)
    at e.generateAndInjectStyles (D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:12048:8295)
    at D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:12048:13946 
    at D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:12048:14013 
    at Object.styled.div [as render] (D:\Code\nextjs.shared-ui\next\app1\.next\server\pages\index.js:12048:14417)
    at a.b.render (D:\Code\nextjs.shared-ui\next\app1\node_modules\react-dom\cjs\react-dom-server.node.production.min.js:43:194)
    at a.b.read (D:\Code\nextjs.shared-ui\next\app1\node_modules\react-dom\cjs\react-dom-server.node.production.min.js:41:83)
    at exports.renderToString (D:\Code\nextjs.shared-ui\next\app1\node_modules\react-dom\cjs\react-dom-server.node.production.min.js:52:138)
    at Object.renderPage (D:\Code\nextjs.shared-ui\next\app1\node_modules\next\dist\next-server\server\render.js:54:851)
```

As shown in the SO question this is the same error...

# nextjs-shared-ui

This project is setup to try and show / fix the requested behaviour of the following issue explained in [this SO question](https://stackoverflow.com/questions/66570634/shared-ui-in-nextjs-unable-to-receive-imported-modules-value-in-build-process)

The purpose it to try and share react UI between 2 nextjs apps.

Both of the apps have a custom express server.

App1 is set up to work the same as in [the bugstate branch](https://github.com/TessavWalstijn/nextjs-shared-ui/tree/bugstate/not-recieving-imported-modules)  
App2 is set up to work on its own with its own custom server.

Conclusion from setting up this project.

Running the handler for App1 in:
```
~/sites/app1.js
```
Makes app1 break. Moving the handler to app1 root folder:
```
~/next/app1/app1.js
```
Will fix the issue what showed up in the first configuration.
The issue relating to the first config is not the same as discriped in the SO question.

Error from first config:
```
Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
```
Can be tested by your own by commenting line 8 in `~/index.js` and uncommenting line 11

App2 works as expected without issues.

# Running this branch

`npm run i-all` to install all packages for **all** npm projects  

`npm run build` to mimic the main build process (only builds app1)  
`npm run start` to start mimicked server  
`npm run prod` to run with the nextjs production build of app1  

Because app2 is running on its own:  
Please quit all running processes of this project

`npm run build2` to build app2  
`npm run start2` to start app2  
`npm run prod2` to run with the nextjs production build  

## Express server issue

Yes I am aware that the custom express server issue I have found is not resolved in the other branches. But that is not the focus of the [SO question](https://stackoverflow.com/questions/66570634/shared-ui-in-nextjs-unable-to-receive-imported-modules-value-in-build-process)

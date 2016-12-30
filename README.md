# Visual Studio ASP.NET Core with React-Redux-TypeScript

A minimal example of the ASP Core application using the following technologies:

1. Visual Studio 2017RC
2. ReactJs
3. Redux
4. React-Redux
5. TypeScript
6. TypeScript Modules loaded by RequireJs
7. Synchronous and Asynchronous actions (XMLHttpRequest) in Redux
8. ASP Core
8. Bower,npm, Gulp

For clarity, this project has been created with '**Empty** ASP.NET Core Template', however, same code can be used in full 'Web API' or 'Web Application' ASP.NET Core Templates.

This example uses just single TypeScript module app.tsx. One can easily add another module say, app-store.ts, which will be automatically linked by RequireJs, when references (import-ed) in app.tsx.


**To run:** open solution in Visual Studio 2017 RC, and make sure npm, Bower and Gulp fire correctly:
  - npm - right click 'package.json' and Restore Packages, - they should show under Dependencies/npm, - may take a minute;
  - bower - right click 'bower.json' and Restore Packages, - you should see wwwroot/lib/requirejs/require.js;
  - app.tsx - you may need to add a space and save the file, since TypeScript is compiled on 'Save', - you should see files wwwroot/js(hidden)/(app.js+app.js.map)
  - gulp, - right click 'gulpfile.js' and Task Runner Explorer, - in Task Explorer Explorer windoe click refresh icon and doubleclick 'default' task - you should see files wwwroot/js(hidden)/(app.js+app.js.map+react.js+react-dom.js+react-redux.js+redux.js)
 
 Build solution and run for default.html. This page includes 2 buttons for triggering synchronous actions, and one button for asynchronous GET action from https://jsonplaceholder.typicode.com/posts/1. Clicking on the buttons changes text in div below.

**References**
 - Fantastic introductionary tutorial on Redux - https://github.com/happypoulp/redux-tutorial

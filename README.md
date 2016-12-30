# Visual Studio ASP.NET Core with React-Redux-TypeScript

A minimal example of the ASP Core application using the following technologies:

1. Visual Studio 2017RC
2. ReactJs
3. Redux
4. React-Redux
5. TypeScript
6. TypeScript (ES6) Modules linked with RequireJs
7. Synchronous and Asynchronous actions (XMLHttpRequest) in Redux
8. ASP Core
8. Bower,npm, Gulp

**To run:** open solution in Visual Studio 2017 RC, build and run for default.html. You should see 2 buttons triggering synchronous actions, and one button for asynchronous GET action from https://jsonplaceholder.typicode.com/posts/1. Clicking on the buttons changes text in div.

**P.S.** This example, for simplicity, uses just single TypeScript module app.tsx. You can easily add another module say, app-store.ts which will be automatically picked up by require, when references (import-ed) in app.tsx.

**P.S.S.** For clarity, this Visual Studio project has been created with 'Empty ASP.NET Core Template, however, you can easily use the same code for any other ASP Core Template which include MVC views.


**Troubleshoot:** make sure npm, bower and gulp fire correctly.

  - npm - right click 'package.json' and Restore Packages, - they should show under Dependencies/npm
  - bower - right click 'bower.json' and Restore Packages, - you should see wwwroot/lib/requirejs/require.js
  - gulp, - right click 'gulpfile.js' and Task Runner Explorer, - in explorer click refresh and doubleclick 'default' task - you should see files wwwroot/js(hidden)/(app.js+app.js.map+react.js+react-dom.js+react-redux.js+redux.js)
   
 
  
  GOOD LUCK !

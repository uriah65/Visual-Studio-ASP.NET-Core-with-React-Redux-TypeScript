# Visual Studio ASP.NET Core with React-Redux-TypeScript

A minimal example of the ASP Core application using the following:

1. Visual Studio 2017RC
2. ReactJs
3. Redux
4. React-Redux
5. TypeScript
6. TypeScript Modules loaded by RequireJs
7. Synchronous and asynchronous Redux actions 
8. ASP Core
9. Bower,npm, Gulp

For clarity, this project has been created with 'Empty' ASP.NET Core template, however, same code can be used in full 'Web API' or 'Web Application' templates. 

Build solution and navigate to default.html. This page shows 2 buttons to trigger synchronous actions, and a button for asynchronous XMLHttpRequest GET action from https://jsonplaceholder.typicode.com/posts/1. Clicking on the buttons changes text in div below.
 

**To build:** open solution in Visual Studio 2017 RC, and make sure npm, Bower and Gulp fire correctly:
  - npm - right click 'package.json' and Restore Packages, - they should show under Dependencies/npm, - may take a minute;
  - bower - right click 'bower.json' and Restore Packages, - you should see wwwroot/lib/requirejs/require.js;
  - app.tsx - you may need to add a space and save the file, since TypeScript is compiled on 'Save', - you should see files wwwroot/js(hidden)/(app.js + app.js.map + app-store.js + app-store.js.map);
  - gulp, - right click 'gulpfile.js' and Task Runner Explorer, - in Task Explorer Explorer windoe click refresh icon and doubleclick 'default' task - you should see files wwwroot/js(hidden)/(... + react.js + react-dom.js + react-redux.js + redux.js);


**References**
 - Fantastic introductionary tutorial on Redux - https://github.com/happypoulp/redux-tutorial

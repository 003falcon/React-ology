If uncaught reference error is thrown or React is not defined check for
1.package.json
2.package-lock.json
3.vite.config.js
4.node_modules 
files to be present.

Setting state in the to-be rendered html causes infinite renders.
Instead save the setState code in a function and call it's name without ()



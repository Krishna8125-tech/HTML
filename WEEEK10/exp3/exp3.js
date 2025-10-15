const fs = require('fs');

const content = "html,mongoDB,nodeJS,css,javascript,expressJS,reactJs ,Typescript";
fs.writeFileSync('src.txt', content);

console.log('src.txt has been created and content has been added.');

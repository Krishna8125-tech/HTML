const url=require("url");
const address='https://www.example.com/products?category=books&price=low';
const parsedurl=url.parse(address,true);

console.log('host :',parsedurl.host);
console.log('pathname :',parsedurl.pathname);
console.log('Query paremeter :',parsedurl.query);
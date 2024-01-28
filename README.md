# JSrepo
Place HTML, JS, CSS projects here


#Assignment answers
a) npm is a package manager for the JavaScript programming language (npm is the world's largest software registry.)
b) SPA is a web app implementation that loads only a single web document and then updates the body content of that single document via JavaScript APIs.
c) The event loop allows JavaScript to handle thousands and thousands of requests with just a single thread. The event loop is an architectural design pattern that allows code to run asynchronously on the javascript engines. It makes it possible for code to execute blocking instructions first and execute asynchronous functions when available.
d) The export default syntax allows you to export a single value from a module as the default export. The export syntax with named exports allows you to export multiple values from a module using named exports. When another module imports the module that uses named exports, the imported values will be an object with the exported values as properties.
e) The only reason behind the fact that it uses className over class is that the class is a reserved keyword in JavaScript and since we use JSX in React which itself is the extension of JavaScript we have to stick to className.
f) set counter function will be called immediately when the component renders, instead of waiting for the button click event. This will lead to unexpected behaviour and likely an infinite loop as setCounter updates the state and triggers a re-render.
g) Destructuring in JavaScript, allows you to extract values from objects or arrays and assign them to variables in a more concise and readable way. (typically done using curly braces {})
h) React.js introduced JSX, a syntax extension that allows developers to write HTML-like code in JavaScript files. This makes it easier to write and maintain code, especially for developers who are more familiar with HTML than with JavaScript. (also JSX elements are transformed into React.createElement() calls.)
i) Use of the async keyword with a function to represent that the function is asynchronous. The await keyword is used inside the async function to wait for the asynchronous operation.

// async function example

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f(); 

//Output is Async function

j) A promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. A promise starts in a pending state. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

let promise = new Promise(function(resolve, reject){
     //do something
});

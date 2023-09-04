
let str = "Hello Js";
console.log(btoa(str));
console.log(atob("SGVsbG8gSnM="));

let nihao = "你好";
function b64Encode(str) {
    return btoa(encodeURIComponent(str));
}


function b64Decode(str) {
    return decodeURIComponent(atob(str));
}

console.log(b64Encode(nihao));
console.log(b64Decode("JUU0JUJEJUEwJUU1JUE1JUJE"));
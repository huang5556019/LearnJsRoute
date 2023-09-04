var obj = {
    foo: "Hello",
    bar: "World",
};
console.log(obj);
console.log(obj.foo);
console.log(obj["foo"]);
console.log(Object.keys(obj));

for (const objKey in obj) {
    console.log("key:" + objKey + " value:" + obj[objKey]);
}
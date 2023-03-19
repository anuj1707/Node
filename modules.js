const {people,ages} = require('./people');  // name of attributes is same as that attribute which we have exported (people and ages)

console.log(people,ages);

const os = require('os'); //inbuilt
console.log(os.platform(),os.homedir());
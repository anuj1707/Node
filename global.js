//global object ... as we know that in browser js we have window as our global obj but in node we have global as our global object


//console.log(global);

setTimeout(() => {
console.log('in the timeout');
//clearInterval(int); // stops the interval fn below after 3 sec
},3000); // 3000 ms == 3 sec

const  int = setInterval(() => {
console.log('in the interval');
},1000);//keep repeating in every 1 sec

console.log(__dirname);
console.log(__filename);
function sum (a,b=2){
    return a+b ;
}

let x = sum(5) 

console.log(`${x} is ${x}`);

const test = function myFun(a,b){
    return a+b ;
}

//console.log(test(10,5));
console.log(test(1,4));

let a = 5 ;

for (let index = 6; index < 11 ; index++) {
    a = index ;
    
}
console.log(a);
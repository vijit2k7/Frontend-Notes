// function multiply(a,b)
// {
//     return a*b;
// }

// console.log(multiply(2,4));

// Q. Whats the difference between undefined and not-defined?

function test(a,b){
    console.log(b);
    return a+b;
};
console.log(test(5,10));

// ES6---> EcmaScript()
  
let c = (a,b) => {
    return a+b;
};

// Q. create a function 2 arguments a,b==> a^b;

// function power(a,b)
// {
//     return Math.pow(a,b);
// }

// let power=(a,b)=>{
//     return Math.pow(a,b);
// }

let power = (a,b)=> Math.pow(a,b);
console.log(power(2,5))

// function funcInsidefunc(c)
// {
//     let a=15;
//     let b=30;
//     console.log(c(a,b));
// }
// funcInsidefunc(c);





// let double = function(num) {
//     return num * 2;
//  }

//  let test = double(3);

// JavaScript Hoisting

/*let x = 20,
  y = 10;

let result = add(x, y);
console.log(result);

function add(a, b) {
  return a + b;
}*/


// let x = 20,
//     y = 10;

// let result = add(x,y);
// console.log(result);

// var add = function(x, y) {
// return x + y;
// }

// Q. Given array arr and target t?Find the target inside the array?

// function findTarget(arr,target)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]==target)
//             return i;
//     }
//     return -1;
// }

// console.log(findTarget([1,3,2,5,7],5));

// Q. Given an array and a target?Find if the target exists as a pair in the array?s
let arr=[2,3,5,11,4],target=7 

// 1st approach----> O(n*n); 
// 2nd approach-----> O(n*logn); 
// 3rd approach----->O(n); 



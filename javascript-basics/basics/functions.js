// function multiply(a,b)
// {
//     return a*b;
// }

// console.log(multiply(2,4));

// Q. Whats the difference between undefined and not-defined?
let a=6;
function test(a,b){
    console.log(b);
    return a+b;
};
// console.log(test(5,10));

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
// console.log(power(2,5))

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
let arr=[2,3,5,11,4],target=8

// 1st approach----> O(n*n); 
// 2nd approach-----> O(n*logn); 
// 3rd approach----->O(n); 

function isTarget(arr,target)
{
  for(let i=0;i<arr.length;i++)
  {
    for(let j=i+1;j<arr.length;j++)
    {
      if(arr[i]+arr[j]==target)
        return true;
    }
  }
  return false;
}

// console.log(isTarget(arr,target));


// DS ALGO--->

// 1.Brute Force---> O(n*n) O(n*n*n) O(2^n) 1000*1000=10000000
// 2.Think sorting with space O(nlogn) + space O(n)
// 2.Think sorting----> O(nlogn) O(1)
// 3.Sorting and then applying searching binary O(nlogn)
// 4.Best method --- arr,hashmap,hashset,string--->Space complexity-->O(n)
//   Time complexity-->O(n)--->O(1)

// [2,3,4,5,11]
// i=0,j=4

// i=0,j=3 7<8
// i=1,j=3 8==8

// let map={
//   'Vijit':20,
//   'Ayush':20,
//   'Paras':40
// };
// for(let i in map){
//   console.log(i,map[i]);
// }

// let word=true;

// for(let i=0;i<5;i++)
// {
//   if(word)
//     {
//       word=!word;
//       console.log(i); 
//     }
// }
// [2,3,5,11,4] target=7
// let map={
// }


// let map={};
// console.log(map[5]);
// if(map[5])
// {
//   console.log('Hello');
// }
// [2,3,11,5,4] target=7 {5:0,4:1,-4:2,}

function isTarget2(arr,target)
{
  let map={};
  for(let i=0;i<arr.length;i++)
  {

    if(map[arr[i]]) 
      return true;
    map[target-arr[i]]=i; 
  }
  return false;
}



console.log(isTarget2(arr,target))









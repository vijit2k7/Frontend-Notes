// let x = [1,2,3];
// let y = [...x];
// x.unshift(5);
// console.log(y);

function takeMultipleNumbersAndAdd (...arguments){
    console.log(arguments);
    var sum = 0;
    for(let i=0;i<arguments.length; i++) {
        sum += arguments[i];
        console.log(sum);
    }
    return sum;
}

let arr=[1,2,3,4,5];
console.log(takeMultipleNumbersAndAdd(...arr));
// let x = [1,2,3];
// let y = [4, 5,6];
// console.log([...x,...y]); 

//shallow copy---->copying only the reference ie  the address of the array or object
// deep copy--->create a new address and copy all elements in that address.


//Objects

/*let obj={
    key1:'value1',
    3:84,
    1:56,
    2:'value3'
}


for(let i in obj)
{
    console.log('key is: ',i,'value is: ',obj[i])
}*/



const first ={
    name: "john"
};
const second ={age: 30};
const coord ={...first,...second};
// console.log(coord);

let obja={ name: "john"}
let objb={...obja};
objb['age']=28;
// obja['height']='180cm';
// console.log(obja);

// let a=[1,2,3];

// let b=[...a];

/*let data={
    'customer':{
        'age':26,
        'address':{
            'primary':'hsgdahgd',
            'secondary':'ajhdgajdg'
        }
    }
}
console.log(data.customer.age)*/

/*let country =["USA","CANADA","GERMANY","india"];
let [a,...b] = country;


console.log(b);   
// console.log(other); */ 

/*function sum(x,y,z) {
    return x + y + z;
  }
  
const numbers =[1,2,3];

console.log(sum(...numbers));*/

/*function sum(x,y,z) {
    let sum =  x + y + z;
    return sum;
  }
  
  console.log(sum(5,5,5,5));*/
  
  /*function myFunction(...arguments) {
      console.log(arguments);
    // for (var i in arguments) {
    //   console.log(arguments[i]);
    // }
  
  }
  
  var params =[10,15]
  console.log(myFunction(5,...params)); */  // 5 10 15

  let arr1=[1,2,3]
  console.log(...arr1);

  let arr2=[...arr1];
  console.log(arr2);















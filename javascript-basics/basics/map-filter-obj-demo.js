
// MAP

/*const arr1=[6,2,3,4,5];

console.log(arr1.map((item)=>{
    if(item%2==0)
        return item*2;
    else
        return item;
}));*/



//FILTER

/*const arr2=[15,24,-2,45,50];

let moreThan40 =arr2.filter((item)=>{
    return item*2;
});

// 0 false undefined null ----?false in javascript
console.log(moreThan40);*/


/*const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
   ];

const moreThan90 = students.filter(item=>item.grade>=90).map(item=>item.name).filter(item=>item==='Katie');

console.log(moreThan90);*/


//Reduce

/*let arr3=[2,3,4,5,1];

let sum=0;
for(let i=0;i<arr3.length;i++)
{
    sum+=arr3[i];
}

let arr4=arr3.reduce((accumulator,currentValue)=>{
    accumulator+=currentValue;
    return accumulator;
},0);


// maximum of the array using reduce and minimum

console.log(arr3.reduce((acc,curr)=>{
    if(curr<acc)
        acc=curr;
    return acc;
},arr[0]));*/

   







// some extra questions

const users=[
    {fname:'vijit',lname:'mishra',weight:85},
    {fname:'saurav',lname:'patel',weight:65},
    {fname:'luke',lname:'cage',weight:85},
    {fname:'logan',lname:'paul',weight:25},
]



//Q1.Calculate fullname apply map,filter and reduce array of fullnames
let fullnames=users.map(item=>item.fname+' '+item.lname);
//console.log(fullnames);

//Q2. fullnames of people whose weight<70;
let fullnames70=users.filter(item=>item.weight<70).map(item=>item.fname+' '+item.lname);
//console.log(fullnames70);

//Q3. Create an object {85:2,65:1,25:1} initialValue 

let map={};

for(let i=0;i<users.length;i++)
{
    if(!map[users[i].weight])
        map[users[i].weight]=0;
    map[users[i].weight]+=1;
}
// console.log(map);

let final=users.reduce((acc,curr)=>{
    if(!acc[curr.weight])
        acc[curr.weight]=0;
    acc[curr.weight]+=1;
    return acc;
},{});

//console.log(final);













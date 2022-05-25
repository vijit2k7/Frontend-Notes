// some extra questions

const users=[
    {fname:'vijit',lname:'mishra',weight:85},
    {fname:'vijit',lname:'mishra',weight:65},
    {fname:'vijit',lname:'mishra',weight:85},
    {fname:'vijit',lname:'mishra',weight:25},
]

//Calculate fullname


//{85:2,65:1,25:1}

let answer=users.reduce((acc,curr)=>{

    if(!acc[curr.weight])
        acc[curr.weight]=0;
    acc[curr.weight]+=1;
    return acc;
},{})

console.log('hello',answer);
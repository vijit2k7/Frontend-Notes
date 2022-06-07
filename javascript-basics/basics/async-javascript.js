//CALLBACKS DEMO

const customers=[
    {'name':'Cust 1','value':'This is Cust 1'},
    {'name':'Cust 2','value':'This is Cust 2'}
]; //database
//getCustomer api
function showCustomers()
{
   setTimeout(()=>{
        console.log('showing all customers');
        let ul=document.createElement('ul');
        customers.forEach((cust)=>{
            let li=document.createElement('li');
            li.innerText=cust.name+ ' '+cust.value;
            ul.append(li);
        })
        document.body.append(ul);
   },1000);
}
//postCustomer api


function postCustomer(newCustomer,callback)
{
    setTimeout(()=>{
        console.log('post customer called',customers);
        customers.push(newCustomer);
        callback();
    },2000);
}
const newCustomer={'name':'Cust 3','value':'This is cust 3'};
// console.log('before');
// postCustomer(newCustomer,showCustomers);


//PROMISES

// var promise1=new Promise((resolve,reject)=>{
//     reject({'name':'Cust4','value':'This is cust4'});
// });
// promise1.then((res)=>{
//     console.log('Response is',res);
// }).catch((err)=>{
//     console.log('Error is',err);
// })
function showCustomers()
{
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(customers);
            let ul=document.createElement('ul');
            customers.forEach((cust)=>{
                let li=document.createElement('li');
                li.innerText=cust.name+ ' '+cust.value;
                ul.append(li);
            });
            document.body.append(ul);
       },1000);
    });
    return promise;
}
function postCustomer(newCustomer)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            customers.push(newCustomer);
            resolve('Customer saved in database');
        },2000);
    })
}

const showCustPromise=showCustomers();

showCustPromise.then((res)=>{
    console.log('show promise response',res);
});

postCustomer(newCustomer).then((res)=>{
    console.log(res);
    showCustomers();
    // showCustPromise.then((res)=>{
    //     console.log('show promise response inside post customer',res);
    // })
});

//Customer wants to change his email address
// {
//     'name':'',
//     'email':'',
//     'mob':''
// }

//Promise chanining in real world

// fetchedCustProfile.then((custData)=>{
//     let mob=custData.mob;
//     let pass=password;
//     login(mob,password).then((loginData)=>{
//         changeEmail(mob,newEmail).then((data)=>{
//             console.log('Email change successfully');
//         })

//     }).catch((err)=>console.log('Phone no or password is incorrect'))
// })


//Promise.all and Promise.race

let promiseA=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise A called');
    },5000)
});
let promiseB = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise B called');
    },6000)
});
let promiseC = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise C called');
    },7000)
});

Promise.all([promiseA,promiseB,promiseC]).then((res)=>{
    console.log('All promise resolved',res);
});

Promise.race([promiseA,promiseB,promiseC]).then((res)=>{
    console.log('Racing',res);
})

// postCustomer(newCustomer).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// postCustomer({'name':'Cust 3','value':'This is Cust 3'}).then((res)=>{
//     console.log('res is ',res);
//     showCustomers();
// }).catch((err)=>console.log(error));

// ASYNC AND AWAIT

//fetch
function fetchUserId1()
{
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
            res=res.json();
            return res;
        }).then((data)=>{
            resolve(data);
        });
    })   
}

// fetchUserId1().then((finalData)=>{
//     console.log('final data is',finalData);
// })

async function fetchUserId2()
{
    try{
        const finalData=await fetch('https://jsonplaceholder.typicode.com/todo').then(res=>res.json());
        console.log('finaldata userid2',finalData);
    }catch(e)
    {
        console.log('exception is',e)
    }

}

// fetchUserId2();

function* generate() {
    yield 1;
    yield 2;
    return 3;
  }
  // "generator function" creates "generator object"
let generator = generate();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// async function postCustomer(newCustomer)
// {
//    const data = await fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>res.json())
//    console.log('data is',data);

// }

// postCustomer(newCustomer);


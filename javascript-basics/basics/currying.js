
function multiply(a)
{
   return function(b){
        return function(c){
            return a*b*c;
        }
    }
}


multiply(2)(4)(5);

// debouncing and throttling (performance--->)

let map={
    'name':'Vijit'
}

// let customers={
//     data:{
//         profile:{
//             name:'Vijit',
//             age:25
//         },
//         address:{
//             primary:'adas',
//             secondary:'asggg'
//         }
//     }
// }

// let profile=customers.data.profile;
// let address=customers.data.address;
// console.log(profile.name,' ',address.primary);

// for(customer in customers)
// {
//     console.log(customers[customer]);
//     let data=customers[customer];
//     for(key in data)
//     {
//         let m=data[key]
//         for(k in m)
//             console.log(m[k]);
//     }
// }

// flattening v imp interview question

//FAANG Airtel 

// 5-6




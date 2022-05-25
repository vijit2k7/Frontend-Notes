// const message = function(a) {  

//     console.log("This message is shown after 3 seconds",a);

// }

// setTimeout(()=>{console.log('hello')},2000);


// document.querySelector("#callback-btn")
//    .addEventListener("click", function() {    
//       console.log("User has clicked on the button!");
// });

// var arr=[1,2,3]

// var [m,n]=arr;

// console.log(m,n,k);

// var obj1={
//     'Vijit':28,
//     'Naman':30
// }

// var {Vijit,age}=obj1;
// var a=obj1['Vijit']
// var b=obj1['Naman']
// console.log(Vijit);

// var arr=[1,2,3,4,5]

// var [a,num]=[1,...arr]

/*function mul(a)
{
    function inner(b)
    {
        function innermost(c)
        {
           return a*b*c; 
        }
        return innermost;
    }
    return inner;   
}

console.log(mul(3)(5)(7));*/

/*console.log('before');
setTimeout(callback,2000);

function callback()
{
   console.log('callback executed');
}

console.log('after');*/

//Interview question

console.log('before');
var a=20;
function b()
{
   console.log(a);
}

setTimeout(callback,2000);
setTimeout(callback,2000);

function callback()
{
   let m=40;
   console.log('callback executed',m);
}
b();

console.log('afterdfsdf');

//before callback after

























// console.log('before')
// let a=50; 
// setTimeout(()=>{
//     let b=a;
//     console.log('timeout executed',b);
// },3000);

// console.log('after');

//callback function---->makes javascript asynchronous.

// setTimeout(()=>{},2000)

// function a()
// {
//     var k=50;
//     function b()
//     {
//         console.log('b called');
//     }
//     return b;  
// }

// var m=a()();


//How we accessed an inside function in outside scope.



/***** CLOSURE START ********************************/


// EXAMPLE-1
/*function a()
{
    let x=100;
    function b()
    {
        console.log(x);
        return x;
    }
    return b; // This doesnt only returns the function but the complete closure.
}
//This b function remembers its lexical scope and hence value of x is preserved.
var m=a();
m();*/




//EXAMPLE-2
/*function a()
{
    var x=100;
    function b()
    {
        return x;
    }
    var x=200;
    return b;
}
var m=a();
console.log(m());*/



//EXAMPLE-3
function a()
{
    var x=100;
    function b()
    {
        var y=200;
        function c()
        {
            console.log(x,y);
            return x+y;
        }
        return c;
    }
    return b;
}

// console.log('hewllo',a()()());
 



//Data-hiding

/*function dataHiding()
{
    let x=1;
    function multiply()
    {
        console.log(x);
        x=x*2;
    }
    return multiply;
}
var mult=dataHiding();
console.log(x);*/

/*function a()
{
   let a=20;
   function b()
   {
      let c=10;
      return a+c;
   }
   return b;
}

var callLater=a();
console.log(callLater()());*/

for(var i=0;i<5;i++)
{
    setTimeout(callback,1000);
    function callback()
        {
            console.log(i);
        }
}


//10 10 10 10 10 10 10 10 





// EXAMPLE-1
/*function a()
{
    var x=100;
    !function b()
    {
        return x;
    }
    return b; // This doesnt only returns the function but the complete closure.
}
//This b function remembers its lexical scope and hence value of x is preserved.
var m=a();
console.log(m());*/



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
/*function a()
{
    var x=100;
    function b()
    {
        var y=200;
        function c()
        {
            console.log(x,y);
        }
        c();
    }
    b();
}
a();*/



//Data-hiding

// function dataHiding()
// {
//     let x=1;
//     function multiply()
//     {
//         console.log(x);
//         x=x*2;
//     }
//     return multiply;
// }
// dataHiding();
// console.log(x);
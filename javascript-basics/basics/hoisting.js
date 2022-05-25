
// var a=5;
// console.log(a,b);
// hello();
// var b=9;

// function hello()
// {
//    var c=5;
//    console.log(c); 
// }

// hoisting means pushing the code to top;
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the 
// top of their scope, prior to execution of the code.

// var let and const

// var a=5;
// let b=6;

// var----> functional scope
// let,const---->block scope

// var a=100

// if(true)
// {
//     var b=50;
//     hello();
//     console.log(a,b);
// }

// function hello()
// {
//    var b=100; 
// }
// console.log(a,b);
// var a=50;
// let a=50;
// console.log(a);

/*let a=100;

function hello()
{
    var b=50;
    if(true)
    {
        let c=150;
        var d=200;
        // console.log(a,b,d);
    }
    if(true)
    {
        console.log(a,b,m);
    }
}


if(true)
{
    var m=55;
}

hello();*/

// let a=50;
// var b=100;
// const c=200;
// console.log(a,b,c);
// a=75;
// b=130;
// c=300;
// console.log(a,b,c);

// const>let>var

//Hoisting happens for all the cases

/*console.log(a);
let a=100;
function hello3()
{
    if(true)
    {
        let a=25;
        console.log(a);
    }
    console.log(a);
}
hello3();
console.log(a);*/

// var a=100;

// {
//     let a=50;
// }

// console.log(a);

// let number = 10;

// function displayDouble() {
//   //a new variable is defined with the same name as variable on line 1 - outer scope
//   let number = 3;

//   number *= 2; //6
//   console.log(number); 6
// }

// displayDouble();
// console.log(number); //10

console.log(greet,hello);

function hello()
{

}
var greet = () => {
    console.log("Welcome to Javascript!");
    return 50;
};

console.log(greet());

function a(b)
{
    console.log(b());
    console.log('Inside fucntion a');
}
















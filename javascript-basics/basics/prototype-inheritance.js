let arr=['hello','world'];

let obj={
    name:'Vijit',
    age: 28,
    getData: function(){
        console.log(this.name+' '+this.age);
    }
}


// function Person(name)
// {
//     this.name=name;
// }
// Person.prototype.title='Hello customer';
// let person1=new Person('Vijit');
// let person2=Person('Vijit');



// console.log(person1.title);

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let admin = new Person();
let guest = new Person();

// adding new property to constructor function
Person.prototype.passwordFunc = function(pass)
{
    if(pass=='123')
        return true;
    else 
        return false;
};

// console.log(guest.passwordFunc(234)); // Male
// console.log(person2.gender); // Male


// let person3=new Person();
// console.log(person3.gender);


let animal = {
    eats: true
   };
   
   
let rabbit = {
    jumps: true,
    eats: false,
    hello :  function ()
    {
        console.log(this.jumps,this.eats);
    }
};
   
rabbit.__proto__ = animal; 

// console.log(rabbit);

let animal2 = {
    eats: true,
    walk() {
     alert("Animal walk");
   } 
};
   let rabbit2 = {
    jumps: true, 
    __proto__: animal2 
   };
   
   //rabbit2.walk(); // Animal walk


/* arr.__proto__  Array.prototype
arr.__proto__.__proto__ and Object.prototype
arr.__proto__.__proto__.__proto__ = null(End of chain)
This is prototype chaining*/

/*fun.__proto__ and Function.prototype
fun.__proto__.__proto__ is Object.prototype
*/

//Questions on Prototype:

// Q. Array  you have to modify the array and create a function which doubles the array?

let arr3=[1,2,3,4,5]


Array.prototype.double=function double()
    {
        return this.map(i=>i*2);

    }

// arr3.double;

let arr4=[5,6,7,8];
console.log(arr3.double());
console.log(arr4.double());


const str = 'JavaScript is amazing';

// Default start index is 0
// console.log(str.slice());

// console.logstr.charAt(5)

// You are given a string that string is divided into words-->seperated by space,
// create another string which should be sepearted by a comma.

let data='Rajiv Chowk New Delhi'
//console.log(data.split(' ').join(',')); //tokenisation


// Objects in Javascript

/*const person = {
    name: 'John',
    greet: function() { console.log('hello'); }
};

person.user=27;

person['50']=180;
console.log(person);*/

const person = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this); }
};


// person.greet();

const person1 = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};


//person1.greet();


function Person () {
    this.name = 'John'
    this.age = 23
    this.greet=function()
    {
        console.log('greetings');
    }
}

// create an object
const person3 = new Person();
const person4 = new Person();
person3.height=180;
// console.log(person4.greet());


//this=constructor function object and it wont have access to local variables
function Person (person_name, person_age, person_gender) {

    // assigning  parameter values to the calling object
     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name + ' ' + this.person_name);
     }
 }

 const person5 = new Person('Vijit',45,'Male');
 const person6 = new Person('Vijit',45,'Male');
 console.log(person5.person_gender);

 let obj={};
 obj.hello='Hello';
 person5.height=190;
 console.log(obj,person5);
 console.log(person6.height);











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

person1.greet();


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
console.log(person4.greet());







let arr=['hello','world'];

let obj={
    name:'Vijit',
    age: 28,
    getData: function(){
        console.log(this.name+' '+this.age);
    }
}

/* arr.__proto__  Array.prototype
arr.__proto__.__proto__ and Object.prototype
arr.__proto__.__proto__.__proto__ = null(End of chain)
This is prototype chaining*/

/*fun.__proto__ and Function.prototype
fun.__proto__.__proto__ is Object.prototype
*/

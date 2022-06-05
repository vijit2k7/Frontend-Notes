/* DOM TRAVERSAL COMPLETE*/

//function colorchange
function colorChange(el)
{
    el.style.backgroundColor='gray';
}
const grandparent=document.querySelector('#grand-parent');
// colorChange(grandparent);

/*1. Selecting element getElementById,querySelector*/
// const grandparent=document.getElementById('grand-parent');
// colorChange(grandparent);



/*2. By using classnames*/
const parents=Array.from(document.getElementsByClassName('parent'));
// parents.forEach(colorChange);




/*3. QuerySelector and querySelectorAll*/
const grandparent2=document.querySelector('#grand-parent');
// colorChange(grandparent2);
const parents2=Array.from(document.querySelectorAll('.parent'));
// parents2.forEach(colorChange)

//examples with class name and queryselectorAll


/*4. Selecting Children*/
parent1=document.querySelector('#parent1')
const children=Array.from(parent1.children);
console.log(children);
colorChange(children[1]);

//Change the color of the first child parent 1



/* 5. Selecting any descendents*/
// Note: With querySelector you can select any children at any point
 const children2=Array.from(document.querySelectorAll('.child'));
// children.forEach(colorChange);

// const childOne=grandparent2.querySelector('.child')


/* 6. Moving up in the DOM tree(Selecting parents and grandparents from children)*/
const childOne=document.querySelector('.child');
const parent11=childOne.parentElement;
console.log(parent11);
// colorChange(parent11);

// traverse from child to grandparent using closest.

const grandparent3=childOne.closest('.grand-parent');
console.log(grandparent3);
// colorChange(grandparent3)

const grandparents=Array.from(document.querySelectorAll('.grand-parent'));
// grandparents.forEach(colorChange);



/*7. Selecting Sibling elements(using nextElementSibling for forward,
    previousElementSibling move backwards)*/

 const siblingOne=childOne.nextElementSibling; 
 console.log(siblingOne);
 colorChange(siblingOne);

 const parentTwo=parent11.nextElementSibling;
 colorChange(parentTwo);








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
const parents3=Array.from(grandparent2.children);
console.log(parents3);
 parents3.forEach(colorChange);

//Change the color of the first child parent 1



/* 5. Selecting any descendents*/
// Note: With querySelector you can select any children at any point

 const children=Array.from(document.querySelectorAll('.child'));
// children.forEach(colorChange);

// const childOne=grandparent2.querySelector('.child')


/* 6. Moving up in the DOM tree(Selecting parents and grandparents from children)*/
const childOne=document.querySelector('.child');
// const parent=childOne.parentElement;
// colorChange(parent);

// traverse from child to grandparent using closest.



/*7. Selecting Sibling elements(using nextElementSibling for forward,
    previousElementSibling move backwards)*/


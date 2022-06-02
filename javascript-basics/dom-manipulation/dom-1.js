
function goTo(value)
{
    if(value=='traversal')
        location.href=location.origin+'/javascript-basics/dom-manipulation/dom-traversal.html' 
    else
        location.href=location.origin+'/flex-grid/layout-assignment/index.html' 
}

// const divTest=document.getElementById('testing');
// divTest.innerText='Dom Manipulation';
// divTest.style.color='red';


/*DOM MANIPULATION-------------*/

/*1.Adding element(append and appendchild)*/ 

// Note: AppendChild only allows appending tags like div etc and 
//we cant append multiple things.




const divTest=document.getElementById('testing');

// const newElement=document.createElement('div');
// newElement.innerText='Hello World';
// newElement.style.fontSize='30px';

// document.body.append(document.getElementById('testing'));

//Creating HTML in javascript
/*const newNode=document.createElement('div');
newNode.innerText='Hello World new element here!'
newNode.setAttribute('id','testing2')
document.body.append(newNode);

document.getElementById('testing2').innerText='New Element';*/


/*2. Creating a new element(createElement)*/

    // Put text using innerText and textContent(using 2 spans and change 1 span to display:none).


/*3. Modifying HTML elements(innerHTML)*/
// Note: innerHTML is used to render HTML inside a div

const newElement2=document.createElement('p');
newElement2.innerHTML='<strong id="strong">adasdasd</strong>';
document.body.append(newElement2);

/*4. Removing elements from a document (element.remove())*/
// Another way div.removeChild(span)
const strongElement=document.getElementById('strong');
// newElement2.removeChild(strongElement);
strongElement.remove();


/*5. getAttribute and setAttribute and removeAttribute*/
// element.setAttribute('id','abcd');
//element.removeAttribute('id');
divTest.setAttribute('class','test');
// divTest.removeAttribute('class');

/*6. Modifying classes(add and remove classes)*/

// const div=document.querySelector('div');
// div.classList.add('new-class');
divTest.classList.add('new-test');

// /*7. Directly modifying the style property*/
// div.style.backgroundColor='red';

divTest.style.backgroundColor='green';

// console.log(document.querySelector('.test'));
console.log(document.querySelectorAll('#testing'));
console.log(document.getElementById('testing'));

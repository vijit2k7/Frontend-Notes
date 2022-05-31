// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log( document.body.childNodes[i]); // Text, DIV, Text, UL, ..., SCRIPT
//   }

// console.log(document.body);

// change the background color to red
// document.body.style.background = "red";

// change it back after 1 second


// setTimeout(() => document.body.style.background = "", 3000);
let elements=document.getElementsByTagName('h1');
//  console.log(document.getElementsByTagName('h1'));

for(let i=0;i<elements.length;i++)
{
    elements[i].textContent='This element is Number'+i;
}

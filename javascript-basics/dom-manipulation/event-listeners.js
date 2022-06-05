// <<<<<<< HEAD
// const input1=document.querySelector('#input1');
// const input2=document.querySelector('#input2');
// let val1=0,val2=0;
// function getValue(val,id)
// {
//     if(id=='input1')
//         val1=val;
//     else
//         val2=val;
// }
// function onClick()
// {
//     console.log('button clicked',val1,val2);
// }
// =======


const grandparent=document.querySelector('.grand-parent-1');
const parent=document.querySelector('.parent-1');
const childOne=document.querySelector('.child-1');
const childTwo=document.querySelector('.child-2');
// let toggleParent=false;

//Event Bubbling---> event propogates from bottom to top
//Event Capturing/Trickling---> event propogates from top to bottom

//Note: VImp:Any event first trickles/capture and then bubbles (Trickles down then bubble out).

grandparent.addEventListener('click',(e)=>{
    console.log('grandparent clicked');
});  


parent.addEventListener('click',(e)=>{
    console.log('parent clicked');
    e.stopPropagation();
});


childOne.addEventListener('click',(e)=>{
    console.log('child One clicked');
});


document.addEventListener('click',(e)=>{
    console.log('document clicked');
});


// 3 events here---> 1 capturing 2 are bubbling

// capturing---> grandparent--->parent--->parent--->grandparent

// Grandparent clicked--->clicked;

// document--->grandparent--->document

//  document--->grandparent---->parent--->child--->child--->parent---->grandparent--->document

//  grandparent clicked
//  parent clicked
//  child clicked
//  document clicked

//1.Identify the click and then identify event propagation
//2.Seperate events into bubbling and capturing
//3. Print the events according to the propogation.

//document
//grandparent
//child
//parent


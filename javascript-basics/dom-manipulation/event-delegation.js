
const ul=document.querySelector('#list1');

ul.addEventListener('click',(e)=>{
    console.log('event triggered',e.target);
    e.target.style.backgroundColor='red';
});
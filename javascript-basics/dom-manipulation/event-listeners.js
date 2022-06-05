const input1=document.querySelector('#input1');
const input2=document.querySelector('#input2');
let val1=0,val2=0;
function getValue(val,id)
{
    if(id=='input1')
        val1=val;
    else
        val2=val;
}
function onClick()
{
    console.log('button clicked',val1,val2);
}
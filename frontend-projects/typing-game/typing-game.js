
//Populating the inner quotes
var index=0;//index for timer
var isContainerClicked=false;
const timer=document.querySelector('#timer');
const wpm=document.querySelector('#wpm');
const container=document.querySelector('#container');
var correctStrokes=0;
var intervalId=null;
let content="";

//creating a click outside
document.body.onclick = function(e){
    console.log('document clicked');
    clearInterval(intervalId);
    timer.innerText='0';
    isContainerClicked=false;

    //removing classes
    let spans=Array.from(container.children);
    spans.forEach((span)=>{
        span.classList.remove('incorrect');
        span.classList.remove('correct');
    });
    index=0;
}    
async function fetchData()
{
    const data=await fetch('http://api.quotable.io/random').then(res=>res.json());
    console.log(data);

    data.content.split('').forEach((char)=>
    {
            const span=document.createElement('span');
            span.innerText=char;
            container.append(span);
    });
    index=0;
    return data.content;
}

function runGame()
{
    fetchData().then((res)=>{
        console.log(res);
        let spans=Array.from(container.children);
    
        document.body.onkeydown = function(e){
            console.log('jjjj',e.key,isContainerClicked);
            if(index==spans.length)
            {
                container.innerHTML='';
                runGame();
            }
            if(isContainerClicked)
            {
                if(e.key!='CapsLock')
                {
                    if(spans[index].innerText==e.key)
                        {
                            spans[index].classList.add('correct');
                            correctStrokes+=1;
                        }
                    else
                        spans[index].classList.add('incorrect');
                    
                    index+=1;
                    calculateWpm();
                }
            }
        };
    });
}
runGame();

function clickContainer(event){
    console.log('container clicked',event);
    isContainerClicked=true;
    // let startTime=new Date();
    startTimer(startTimer);
    event.stopPropagation();
}

function startTimer(time)
{
    intervalId = setInterval(() => {
        timer.innerText=(parseInt(timer.innerText)+1).toString();
    }, 1000);
    console.log('interval id is',intervalId);

}
console.log('hello',setTimeout);

function calculateWpm()
{
    wpm.innerText=Math.round(parseFloat(correctStrokes) / 5.0/(parseFloat(timer.innerText) / 60.0));
}


//Lets find out features and lets priorities.
//1.Fetch api to get the quotes.
//2.create the event listeners(a.body onclick) (b.quote container--->onclick
    //c. on keypress record the letters typed.
//1. Timer feature
//2. Words per min
//3.
//4. container populate that quote.
//5. 
//6. color the characters by matching the strings incorrect and correct.
//7. create words per min container
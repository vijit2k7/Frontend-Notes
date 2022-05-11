function chooseFrame(value)
{
    console.log('choose frame called',value);
    if(value=='flex')
        {
            document.getElementById('grid').style.display='none';
            document.getElementById('flex').style.display='block';
        }
    else if(value=='grid')
        {
            document.getElementById('flex').style.display='none';
            document.getElementById('grid').style.display='block';
        }
    else if(value=='flex-demo')
        location.href=location.origin+'/flex-grid/flex.html'
    else if(value=='grid-demo')
        location.href=location.origin+'/flex-grid/grid.html' 
    else
        location.href=location.origin+'/flex-grid/layout-assignment/index.html' 
}
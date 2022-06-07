var flag=0;
function calcTotal()
{
    let tbody=document.querySelector('tbody');
    let prices = document.querySelectorAll('[data-ns-test=price]');
    if(flag==1)
    {
       tbody.children[tbody.children.length-1].remove();
    }
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += parseInt(prices[i].textContent);
    } 
    let lastRow=document.createElement('tr');
    lastRow.innerHTML='<td>Grand Total </td><td data-ns-test="grandTotal">'+sum+'</td>';
    tbody.append(lastRow);
    flag=1;
}
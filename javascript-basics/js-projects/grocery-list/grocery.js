function calcTotal() {
    let sum=0;
    const prices=document.querySelectorAll('[data-ns-test]')
    for(let i=0;i<prices.length;i++)
    {
        sum+=parseInt(prices[i].innerText);
    }
    const existingRow=document.querySelector('#grandTotal')
    if(existingRow)
    {
        existingRow.remove();
    }
    const row=document.createElement('tr');
    row.innerHTML='<td>Grand Total </td><td data-ns-test="grandTotal">'+sum+'</td>'
    row.setAttribute('id','grandTotal');
    const table=document.querySelector('table');
    table.append(row);
}
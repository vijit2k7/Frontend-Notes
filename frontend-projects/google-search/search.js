const billItems = [{
    id: 1,
    itemName: "Bread",
    price: 20,
  }, {
    id: 2,
    itemName: "Butter",
    price: 50
  }, {
    id: 3,
    itemName: "Tomatoes",
    price: 30
  }, {
    id: 4,
    itemName: "Onion",
    price: 40
  }, {
    id: 5,
    itemName: "Pomegranate",
    price: 60
  }, {
    id: 6,
    itemName: "Apple",
    price: 40
  }, {
    id: 7,
    itemName: "Grapes",
    price: 30
  }, {
    id: 8,
    itemName: "Mango",
    price: 100
  }];
 	const table=document.querySelector('table');
	const length=billItems.length;
	function updateHeader()
	{

		let thead=document.createElement('thead');
		let row=document.createElement('tr');
		thead.append(row);
		for(let j in billItems[0])
		{
			let td=document.createElement('td');
			td.innerText=j;
			row.append(td);
		}
		table.append(thead);
	}
	updateHeader();
	function updateTable(arr)
	{
		let thead=document.querySelector('thead');
		if(arr.length==0)
		{
			table.innerHTML='<div>No items found!</div>'
			return;
		}
		if(!thead);
		{
			table.innerHTML='';
			updateHeader();
		}
		let tbody=document.createElement('tbody');
		table.append(tbody);
		
		for(let i=0;i<arr.length;i++) 
		{
			let row=document.createElement('tr');
			for(let j in arr[i])
			{
				let column=document.createElement('td');
				column.innerText=arr[i][j];
				row.append(column);
			}
			tbody.append(row);
		}
	}
	
updateTable(billItems);
	
	
	function update(e)
	{
		console.log(e.value);
		let arr=[];
		for(let i=0;i<length;i++)
		{
			if(billItems[i].itemName.toLowerCase().includes(e.value.toLowerCase()))
				arr.push(billItems[i]);
		}
		updateTable(arr);
	}

// 1.create input and get values of search result
// 2. create header 
// 3.create table body
// 4.update table according to input 

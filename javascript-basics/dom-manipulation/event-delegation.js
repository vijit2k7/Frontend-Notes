// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {

	// if(e.target && e.target.nodeName == "LI") {
	// 	// List item found!  Output the ID!
	// 	console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	// }
    document.location.href='/'+e.target.id
    
});


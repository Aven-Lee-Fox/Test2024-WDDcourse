

function random(){
	
	let r = Math.floor(Math.random()*10);
	//.floor() to round down to whole number
	// range is 0 up to but not including 10
	
	let page = document.getElementById("demo");
	
	page.innerHTML = r;
	
	page.style.backgroundColor = "olive";
	
	page.style.color = "white";
}
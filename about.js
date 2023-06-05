console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert("The Form has been submitted successfully!")
}

function handleImage(evt) {

	evt.preventDefault();
	window.alert("Great Choice")
}

function mouseOver(evt) {
	//evt.preventDefault();
	evt.onmouseover("Hey, Thanks for Visiting!");
}

/* Part2 Add an event listener that listens for a mouseover event. When the user mouses over the picture on the page (cat or rubber duck) the page should alert give the user a compliment.*/

const img = document.querySelector('#imageid');

img.addEventListener('click', handleImage);

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const div = document.querySelector('#mouseOver');

div.addEventListener('hover', mouseOver);
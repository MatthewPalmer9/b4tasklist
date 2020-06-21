const meatPrepList = [
	'Pepperoni',
	'Ham',
	'Sausage',
	'Beef',
	'Philly Steak',
	'Salami',
	'Bacon',
	'Chicken',
	'Wings (Bone-in)'
];

const veggiePrepList = [
	'Green Peppers',
	'Onions',
	'Spinach'
];

const cheesePrepList = [
	'Pizza Cheese (Racked)',
	'Asiago Blend Cheese',
	'Feta Cheese',
	'Provolone (Sliced)',
	'Provolone (Shredded)',
	'American Cheese',
	'Mixed Cheese',
	'Cheddar Cheese'
];

const bottlePrepList = [
	'Alfredo Sauce',
	'Garlic Parm Sauce',
	'BBQ Sauce',
	'Hot Sauce',
	'Cinna Magic',
	'Mango Habanero',
	'Ranch Sauce',
	'Garlic Sauce'	
];

const sidePrepList = [
	'Pans', 
	'Twists',
	'Bites',
	'Boneless Chicken',
	'Specialty Chicken',
	'MCB',
	'Lava Cakes',
	'Sandwiches'
];

const doughProofingList = [
	'LG Dough',
	'MD Dough',
	'Pan Dough',
	'SM Dough'
];


document.addEventListener("DOMContentLoaded", function(){
	meatPrepList.forEach(function(meat){
		document.getElementById("meat-task-list").innerHTML += `<p><li class="meat-style">${meat}</li> - <button id="done">Finished?</button></p><br>`;
	});

	veggiePrepList.forEach(function(veg){
		document.getElementById("veg-task-list").innerHTML += `<p><li class="veg-style">${veg}</li> - <button id="done">Finished?</button></p><br>`;
	});

	cheesePrepList.forEach(function(cheese){
		document.getElementById("cheese-task-list").innerHTML += `<p><li class="cheese-style">${cheese}</li> - <button id="done">Finished?</button></p><br>`;
	});

	bottlePrepList.forEach(function(bottle){
		document.getElementById("bottle-task-list").innerHTML += `<p><li class="bottle-style">${bottle}</li> - <button id="done">Finished?</button></p><br>`;
	});

	sidePrepList.forEach(function(side){
		document.getElementById("side-task-list").innerHTML += `<p><li class="side-style">${side}</li> - <button id="done">Finished?</button></p><br>`;
	});

	doughProofingList.forEach(function(dough){
		document.getElementById("dough-task-list").innerHTML += `<p><li class="side-style">${dough}</li> - <button id="done">Finished?</button></p><br>`;
	});

	// Buttons functions below
	
	document.querySelectorAll('#done').forEach(item => {
    		item.addEventListener('click', function(e){
			if(e.target.innerHTML == "Finished?"){
				e.target.innerHTML = "Done!";
				e.target.id = "finished";
			} else if (e.target.innerHTML == "Done!"){
				e.target.innerHTML = "Finished?";
				e.target.id = "done";
			} else {
			}
		})
	})
});
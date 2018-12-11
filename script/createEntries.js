let elementsLeft = new Array();
let elementsRight = new Array();

window.addEventListener("load", () => {
	let rightWindow = document.getElementById("right-wrapper");
	let leftWindow = document.getElementById("left-wrapper");
	let namesLeft = [
		"Brad Adella",
		"Alice Norris",
		"Glanville Alita",
		"Bertina Renita",
		"Frankie Bert",
		"Kieron Sonnie",
		"Jenni Wilt",
		"Vincent Jeannine",
		"Marty Allyn",
		"Calista Lindsey"
	];
	
	let namesRight = [
		"Rosanna Laurence",
		"Emely Cleve",
		"Anissa Cailin",
		"Ryana Kam",
		"Robina Susan",
		"Clark Winston",
		"Irvine Angelle",
		"Gisselle Harvey",
		"Lambert Philomena",
		"Liliana Siena"
	];
	
	for(let i = 0; i < namesLeft.length; i++) {
		elementsLeft[i] = document.createElement("div");
		elementsLeft[i].classList.add("entry");
		elementsLeft[i].textContent = namesLeft[i];
		elementsLeft[i].onclick = clickManagerLeft;
		leftWindow.appendChild(elementsLeft[i]);
	}
	
	for(let i = 0; i < namesRight.length; i++) {
		elementsRight[i] = document.createElement("div");
		elementsRight[i].classList.add("entry");
		elementsRight[i].textContent = namesRight[i];
		elementsRight[i].onclick = clickManagerRight;
		rightWindow.appendChild(elementsRight[i]);
	}
});
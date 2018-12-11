let elementsLeft = new Array();
let elementsRight = new Array();

window.addEventListener("load", () => {
	let rightWindow = document.getElementById("right-wrapper");
	let leftWindow = document.getElementById("left-wrapper");
	let randomLeft = Math.floor(Math.random() * 10);
	let randomRight = Math.floor(Math.random() * 10);
	
	for(let i = 0; i < randomLeft; i++) {
		elementsLeft[i] = document.createElement("div");
		elementsLeft[i].classList.add("entry");
		elementsLeft[i].textContent = i;
		elementsLeft[i].onclick = clickManagerLeft;
		leftWindow.appendChild(elementsLeft[i]);
	}
	
	for(let i = 0; i < randomRight; i++) {
		elementsRight[i] = document.createElement("div");
		elementsRight[i].classList.add("entry");
		elementsRight[i].textContent = i;
		elementsRight[i].onclick = clickManagerRight;
		rightWindow.appendChild(elementsRight[i]);
	}
});
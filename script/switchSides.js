window.onload = () => {
	document.getElementById("left").addEventListener("click", () => {
		let rightWindow = document.getElementById("right-wrapper");
		let leftWindow = document.getElementById("left-wrapper");
		
		moveElements(rightWindow, leftWindow)
	});
	
	document.getElementById("right").addEventListener("click", () => {
		let rightWindow = document.getElementById("right-wrapper");
		let leftWindow = document.getElementById("left-wrapper");
		
		moveElements(leftWindow, rightWindow)
	});
}

function moveElements(sourceWindow, destinationWindow) {
	let sourceElements = sourceWindow.children;
	let currentElement = 0;
	while(currentElement < sourceElements.length) {
		let c = sourceElements[currentElement];
		if (c.classList.contains("selected")) {
			destinationWindow.appendChild(c);
			c.classList.toggle("selected");
		} else {
			currentElement++;
		}
	}
}

function clickManagerLeft() {
	this.classList.toggle("selected");
}

function clickManagerRight() {
	this.classList.toggle("selected");
}
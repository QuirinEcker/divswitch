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
		let x = c.children[0];
		let y = x.children[0];
		if (y.classList.contains("selected")) {
			destinationWindow.appendChild(c);
			y.classList.toggle("selected");
		} else {
			currentElement++;
		}
	}
}

function clickManager() {
	this.classList.toggle("selected");
	this.children[1].style.width = "100%";
}

window.onload = () => {
	document.getElementById("left").addEventListener("click", () => {
		let sourceWindow = document.getElementById("right-wrapper");
		let destinationWindow = document.getElementById("left-wrapper");

//		let selectedElements = document.getElementsByClassName("selected");
//		while(selectedElements.length > 0) {
//			selectedElements[0].classList.toggle("selected");
//			destinationWindow.appendChild(selectedElements[0]);
//		}
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
	});
	
	document.getElementById("right").addEventListener("click", () => {
		let rightWindow = document.getElementById("right-wrapper");
		let leftWindow = document.getElementById("left-wrapper");
		
		
	});
}

function clickManagerLeft() {
	this.classList.toggle("selected");
}

function clickManagerRight() {
	this.classList.toggle("selected");
}
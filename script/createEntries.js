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

	for(let i = 0; i < namesLeft.length; i++) {
		let element = document.createElement("div");
		let hoverWrapper = document.createElement("div")
		let entryWrapper = document.createElement("div")

		hoverWrapper.classList.add("entry-hover");
		entryWrapper.classList.add("entry-wrapper");

		entryWrapper.appendChild(hoverWrapper);
		hoverWrapper.appendChild(element);
		element.classList.add("entry");
		element.textContent = namesLeft[i];
		element.addEventListener("click", clickManager);
		leftWindow.appendChild(entryWrapper);
	}
});

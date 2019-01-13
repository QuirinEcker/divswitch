function clicker() {
	alert(this);
	//this.children[1].style.width = "20%";
}

window.addEventListener("load", () => {
	document.getElementById("test").addEventListener("click", () => {
		this.style.backgroundColor = "black";
	});
})

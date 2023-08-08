const controls = document.querySelectorAll(".controls input");

function handleChange() {
	const suffix = this.dataset.sizing || "";

	console.log("Novo valor", this.value);
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	);
}

controls.forEach((item) => {
	item.addEventListener("mousemove", handleChange);
});
controls.forEach((item) => {
	item.addEventListener("change", handleChange);
});

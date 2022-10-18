const box = document.getElementById("box");

const height = box.clientHeight;
const width = box.clientWidth;

box.addEventListener("mousemove", (e) => {
	const xVal = e.layerX;
	const yVal = e.layerY;

	const yRotation = 12 * ((xVal - width / 2) / width);
	const xRotation = -12 * ((yVal - height / 2) / height);

	const string = `perspective(500px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
	box.style.transform = string;
});

box.addEventListener("mouseout", function () {
	box.style.transform = `perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)`;
});

box.addEventListener("mousedown", (e) => {
	box.style.transform = `perspective(500px) scale(0.9) rotateX(0deg) rotateY(0deg)`;
});

box.addEventListener("mouseup", (e) => {
	box.style.transform = `perspective(500px) scale(1.05) rotateX(0deg) rotateY(0deg)`;
});

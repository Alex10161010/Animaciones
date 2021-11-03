const logo = document.querySelectorAll('#logotipo path');
console.log(logo);

logo.forEach((element) => {
	console.log(element.getTotalLength());
});

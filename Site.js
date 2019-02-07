const buttonActions = [
	{
		id: "button_16262949",
		message: "I am excited for INF354 because we will be learning about unit testing and continuous integration techniques.",
	},
	{
		id: "button_u14241936",
		message: "",
	},
];
	
buttonActions.forEach(button => {
	const buttonEl = document.getElementById(button.id);
	buttonEl.addEventListener("click", function() {
		alert(button.message);
	});
});
// TIC-TAC-TOE

let button = document.querySelector('.main-block');
let cntClick = 0;

button.addEventListener('click', el => {
	if (el.target.className == "info" && !el.target.innerHTML && cntClick <= 9)
	{
		if (cntClick % 2)
			el.target.innerHTML = 'X';
		else
			el.target.innerHTML = 'O';
		cntClick++;
		checkParams(el);
	}
});

function checkParams(el){
	let panels = document.querySelectorAll('.info');
	let matrix = [[], [], []];
	// let matrix = [
	// 	[0,1,2],
	// 	[3,4,5],
	// 	[6,7,8],
	// 	[0,3,6],
	// 	[1,4,7],
	// 	[2,5,8],
	// 	[0,4,8],
	// 	[2,4,6],
	// ];

	for (let i = 0; i < 3; i++)
		matrix[0].push(panels[i].innerHTML);
	for (let i = 3; i < 6; i++)
		matrix[1].push(panels[i].innerHTML);
	for (let i = 6; i < 9; i++)
		matrix[2].push(panels[i].innerHTML);
	
	if (matrix[0].toString() == 'O,O,O' || matrix[1].toString() == 'O,O,O' || matrix[2].toString() == 'O,O,O')
		console.log("O -- WINS -- O");
	if (matrix[0].toString() == 'X,X,X' || matrix[1].toString() == 'X,X,X' || matrix[2].toString() == 'X,X,X')
		console.log("X -- WINS -- X");

	if (matrix[0][0] == 'O' && matrix[1][0] == 'O' && matrix[2][0] == 'O')
		console.log("O -- WINS -- O");
	if (matrix[0][1] == 'O' && matrix[1][1] == 'O' && matrix[2][1] == 'O')
		console.log("O -- WINS -- O");
	if (matrix[0][2] == 'O' && matrix[1][2] == 'O' && matrix[2][2] == 'O')
		console.log("O -- WINS -- O");

	if (matrix[0][0] == 'X' && matrix[1][0] == 'X' && matrix[2][0] == 'X')
		console.log("X -- WINS -- X");
	if (matrix[0][1] == 'X' && matrix[1][1] == 'X' && matrix[2][1] == 'X')
		console.log("X -- WINS -- X");
	if (matrix[0][2] == 'X' && matrix[1][2] == 'X' && matrix[2][2] == 'X')
		console.log("X -- WINS -- X");
	
}
// TIC-TAC-TOE

let button = document.querySelector('.main-block');
let cntClick = 0;
let flag = 0;

button.addEventListener('click', el => {
	if (el.target.className == "info" && !el.target.innerHTML && flag === 0)
	{
		if (cntClick % 2)
			el.target.innerHTML = 'X';
		else
			el.target.innerHTML = 'O';
		cntClick++;
		if (checkParams(el) == 1)
			console.log("O - Wins")
		else if (checkParams(el) == 2)
			console.log("X - Wins")
	}
});

function checkParams(el){
	let panels = document.querySelectorAll('.info');
	let matrix = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],
	];
	
	for(i = 0; i < matrix.length; i++){
		if (panels[matrix[i][0]].innerHTML == 'O' && panels[matrix[i][1]].innerHTML == 'O' && panels[matrix[i][2]].innerHTML == 'O')
		{
			flag = 1;
			return 1;
		}
		else if (panels[matrix[i][0]].innerHTML == 'X' && panels[matrix[i][1]].innerHTML == 'X' && panels[matrix[i][2]].innerHTML == 'X')
		{
			flag = 1;
			return 2;
		}
	}
	return 0;
}
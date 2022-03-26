setInterval(ftFunc, 1000);

var cnt = 0;
var timer = document.getElementById("timer");

function ftFunc()
{
	timer.innerHTML = cnt++;
}

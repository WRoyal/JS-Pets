var sec = 0;
var minute = 0;
var hour = 0

var timer = document.getElementById("timer");

function timeWrite()
{
	if (sec === 60)
	{
		sec = 0;
		minute++;
	}
	if (minute === 60)
	{
		minute = 0;
		hour++;
	}
	timer.innerHTML = hour + ":" + minute + ":" + sec;
}

function buttonClick()
{
	setInterval(() => {	//	seconds counter
		sec++;
	}, 1000);
	setInterval(timeWrite, 1000);
}

timeWrite();
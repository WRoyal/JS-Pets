let second = 00,
		minute = 00,
		hour = 00,
		flag = 0,
		interval;

let img1 = "url('src/mountain.jpg')";
let img2 = "url('src/mountain2.jpg')";
let img3 = "url('src/sunset.jpg')";
let img4 = "url('src/clouds.jpg')";

const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const stopButton = document.querySelector("#stop");
const bodyVar = document.querySelector('body');
const changeImage = document.querySelector("#change_image");

var sec = document.getElementById("seconds");
var min = document.getElementById("minutes");
var hrs = document.getElementById("hours");

function writeNull()
{
	if (second <= 9)
		sec.innerHTML = "0" + second;
	else
		sec.innerHTML = second;
	if (minute <= 9)
		min.innerHTML = "0" + minute;
	else
		min.innerHTML = minute;
	if (hour <= 9)
		hrs.innerHTML = "0" + hour;
	else
		hrs.innerHTML = hour;
}

function timeCounter()
{
	second++;
	if (second >= 99)
	{
		second = 0;
		minute++;
	}
	if (minute >= 60)
	{
		minute = 0;
		hour++;
	}
	writeNull();
}

// Listeners

startButton.addEventListener('click', () => {
		clearInterval(interval);
		interval = setInterval(timeCounter, 10);
});

pauseButton.addEventListener('click', () => {
	clearInterval(interval);
	// document.body.style("background-image: url('../src/mountain2.jpg')");
	// alert(document.body.style.backgroundImage);
});

stopButton.addEventListener('click', () => {
	second = 0;
	minute = 0;
	hour = 0;
	writeNull();
	clearInterval(interval);
	// bodyVar.style.backgroundImage = "url('src/mountain2.jpg')";
	// document.body.style.backgroundImage
	// alert(document.body.style.backgroundImage);
});

changeImage.addEventListener('click', () => {
	flag++;
	if (flag === 1)
		bodyVar.style.backgroundImage = img2;
	if (flag === 2)
		bodyVar.style.backgroundImage = img3;
	if (flag === 3)
		bodyVar.style.backgroundImage = img4;
	if (flag === 4)
	{
		bodyVar.style.backgroundImage = img1;
		flag = 0;
	}
	// bodyVar.style.backgroundImage = "url('src/mountain2.jpg')";
});
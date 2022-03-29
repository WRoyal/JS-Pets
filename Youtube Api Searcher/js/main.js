let searchButton = document.querySelector('.search-button'),
		searchLine = document.querySelector('.search-line'),
		resultsLine = document.querySelector('.results-line'),
		videoList = document.querySelector('.video-list');

let videoBlocks = [];
let keyWord;

searchButton.addEventListener('click', () => {
	if (searchLine.value == '')
		return;
	resultsLine.innerHTML = "Результат поиска по запросу: " + searchLine.value;

	// searchLine.value = null;
	// gapi.load('client', startInit);		// API INIT
	gapi.load('client', startInit);
	// startInit();
	// displayBlock();
	// console.log(youtubeList);
});

let youtubeList;
// keyWord = searchLine.value;
function startInit() {
	// 2. Initialize the JavaScript client library.
	keyWord = searchLine.value;
	gapi.client.init({
			'apiKey': 'AIzaSyAWXgQPNse5oLeYXE74cHBPRN3Vky1BJ7w',
	}).then(function() {
			return gapi.client.request({
					'path': `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=1&q=${keyWord}`
			})
	}).then(function(response) {
		// title - название видео
		// channelTitle - название канала
		// publishedAt - дата публикации
		youtubeList = response.result;
		displayBlock(youtubeList);
			// console.log(response.result);
			}, function(reason) {
					console.log('Error: ' + reason.result.error.message);
			});
}

function displayBlock(youtubeList)
{
	// videoBlocks.forEach((item, i) => {
		// youtubeList.forEach((item, i) => {
		// if (youtubeList.items[0].id.videoId === null)
		// 	return;
		for (let i = 0; i < 1; i++)
		{
			let block = `
			<li>
				<button class="accordion">${youtubeList.items[i].snippet.title}</button>
				<div class="panel"><p>asdf</p>
					<iframe width="560" height="315" 
						src="https://www.youtube.com/embed/${youtubeList.items[i].id.videoId}"
						title="YouTube video player" frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
						</iframe>
				</div>
			</li>
			`;
			videoList.innerHTML += block;
			console.log(youtubeList.items[i]);
		}
	// })
}

// gapi.load('client', startInit);
// ${youtubeList.items[0].snippet.title};
// ${youtubeList.items[0].snippet.channelTitle};
// ${youtubeList.items[0].snippet.publishedAt};
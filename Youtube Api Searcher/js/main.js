let searchButton = document.querySelector('.search-button'),
		searchLine = document.querySelector('.search-line'),
		resultsLine = document.querySelector('.results-line'),
		videoList = document.querySelector('.video-list');

let keyWord, youtubeList;
let viewsMas = [];

searchButton.addEventListener('click', () => {
	if (searchLine.value == '')
		return;
	resultsLine.innerHTML	= "Результат поиска по запросу: " + strCut(searchLine.value, 20);
	gapi.load('client', startInit);
});

function displayBlock(youtubeList)
{
		videoList.innerHTML = '';

		for (let i = 0; i < 10; i++)
		{
			let name = strCut(youtubeList.items[i].snippet.title, 45);
			let time = getFullTime(youtubeList.items[i].snippet.publishedAt.substring(0, 10));
			let block = `
			<li class="video-list-block" style="list-style-type: none;">
					<label class="video-info-block" for="vid_${i}">
						<p class="video-name">${name}</p>
						<div class="video-info">
							<p class="video-info-line">${youtubeList.items[i].snippet.channelTitle}</p>
							<p class="video-info-line">${time}</p>
						</div>
					</label>
					<input class="video-input" type="checkbox" name="button" id="vid_${i}">
					<div class="slider">
						<iframe width="700" height="400" 
							src="https://www.youtube.com/embed/${youtubeList.items[i].id.videoId}" 
							title="YouTube video player" frameborder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
							picture-in-picture" allowfullscreen></iframe>
					</div>
				</li>
			`;
			videoList.innerHTML += block;
			// console.log(youtubeList.items[i]);
		}
}
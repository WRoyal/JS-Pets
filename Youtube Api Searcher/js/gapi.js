function startInit() {
	keyWord = searchLine.value;
	gapi.client.init({
			'apiKey': 'AIzaSyCBWSzipJMPNyZEuT0oDaemUg2C-hV3UCg',
	}).then(function() {
			return gapi.client.request({
					'path': `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=10&q=${keyWord}`
			})
	}).then(function(response) {
		youtubeList = response.result;
		viewRequest(youtubeList);
			}, function(reason) {
					console.log('Error: ' + reason.result.error.message);
			});
}


function viewRequest() {
	gapi.client.init({
			'apiKey': 'AIzaSyCBWSzipJMPNyZEuT0oDaemUg2C-hV3UCg',
	}).then(function() {
			return gapi.client.request({
					'path': `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${youtubeList.items[0].id.videoId}&id=${youtubeList.items[1].id.videoId}&id=${youtubeList.items[2].id.videoId}&id=${youtubeList.items[3].id.videoId}&id=${youtubeList.items[4].id.videoId}&id=${youtubeList.items[5].id.videoId}&id=${youtubeList.items[6].id.videoId}&id=${youtubeList.items[7].id.videoId}&id=${youtubeList.items[8].id.videoId}&id=${youtubeList.items[9].id.videoId}&maxResults=10`
			})
	}).then(function(response) {
		viewsMas = response.result;
		sortVideoViews(youtubeList, viewsMas);
			}, function(reason) {
					console.log('Error: ' + reason.result.error.message);
			});
}



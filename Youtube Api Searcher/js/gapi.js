function startInit() {
	keyWord = searchLine.value;
	gapi.client.init({
			'apiKey': 'AIzaSyAWXgQPNse5oLeYXE74cHBPRN3Vky1BJ7w',
	}).then(function() {
			return gapi.client.request({
					'path': `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=10&q=${keyWord}`
			})
	}).then(function(response) {
		youtubeList = response.result;
		displayBlock(youtubeList);
			}, function(reason) {
					console.log('Error: ' + reason.result.error.message);
			});
}
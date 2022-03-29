
// let youtubeList;
// // keyWord = searchLine.value;
// function startInit() {
// 	// 2. Initialize the JavaScript client library.
// 	keyWord = searchLine.value;
// 	gapi.client.init({
// 			'apiKey': 'AIzaSyDWfh9RoJJV2VSZv3RXlsQh9yeJr1-p4CA',
// 	}).then(function() {
// 			return gapi.client.request({
// 					'path': `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=10&q=${keyWord}`
// 			})
// 	}).then(function(response) {
// 		// title - название видео
// 		// channelTitle - название канала
// 		// publishedAt - дата публикации
// 			youtubeList = response.result;
// 			}, function(reason) {
// 					console.log('Error: ' + reason.result.error.message);
// 			});
// };
// gapi.load('client', startInit);
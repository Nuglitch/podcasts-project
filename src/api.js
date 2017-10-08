export const fetchPodcastsListAPI = () => {
	const URL =
		'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
	return fetch(URL, { method: 'GET', mode: 'cors' }).then(response =>
		Promise.all([response, response.json()])
	);
};

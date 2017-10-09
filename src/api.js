export const fetchPodcastsListAPI = () => {
	const URL =
		'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
	return fetch(URL, { method: 'GET', mode: 'cors' }).then(response =>
		Promise.all([response, response.json()])
	);
};

export const fetchPodcastAPI = (id) => {
	const URL =
	`https://itunes.apple.com/lookup?id=${id}`;
	return fetch(URL, { method: 'GET' }).then(response =>
		Promise.all([response, response.json()])
	);
};

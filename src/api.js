import { PROXY_CORS } from 'consts';

export const fetchPodcastsListAPI = () => {
	const URL =
		'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
	return fetch(URL, { method: 'GET' }).then(response =>
		Promise.all([response, response.json()])
	);
};

export const fetchPodcastEpisodes = url => {
	return fetch(`${PROXY_CORS}${url}`, {
		method: 'GET'
	}).then(response =>
		Promise.all([
			response,
			response
				.text()
				.then(str =>
					new window.DOMParser().parseFromString(str, 'text/xml')
				)
		])
	);
};

export const fetchPodcastEpisodesFromId = id => {
	const URL = `https://itunes.apple.com/lookup?id=${id}`;
	return fetch(URL, { method: 'GET' }).then(response => {
		if (response.status === 200) {
			return response.json().then(json => {
				const episodesUrl = json.results[0].feedUrl;
				return fetchPodcastEpisodes(episodesUrl);
			})
		}
		throw new Error('Response status is not 200');
	}
);
};

const PodcastDetail = {
	getParsedData: data => {
		const p = data.results[0];
		return {
			name: p.trackName,
			img: p.artworkUrl600,
			author: p.artistName,
			feedUrl: p.feedUrl
		};
	}
};

export default PodcastDetail;

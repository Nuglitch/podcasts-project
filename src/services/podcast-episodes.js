const getParsedDate = (date) => {
	const _date = new Date(date);
	// Year part from the timestamp
	const year = _date.getFullYear();
	// Month part from the timestamp
	const month = `0${_date.getMonth()}`.substr(-2);
	// Day part from the timestamp
	const day = `0${_date.getDay()}`.substr(-2);
	return `${day}-${month}-${year}`;
}

const PodcastEpisodes = {
	getParsedData: data => {
		const namespace = data
			.getElementsByTagName('rss')[0]
			.getAttribute('xmlns:itunes');
		const items = data.querySelectorAll('item');
		let result = [];
		items.forEach(item => {
			result.push({
				title: item.getElementsByTagName('title')[0].innerHTML,
				description: item.getElementsByTagName('description')[0]
					.innerHTML,
				pubDate: getParsedDate(item.getElementsByTagName('pubDate')[0].innerHTML),
				duration: item.getElementsByTagNameNS(namespace, 'duration')[0]
					.innerHTML,
				enclosure: item
					.getElementsByTagName('enclosure')[0]
					.getAttribute('url'),
				id: item.getElementsByTagName('guid')[0].innerHTML,
			});
		});
		return result;
	}
};

export default PodcastEpisodes;

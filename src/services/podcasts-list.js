const PodcastsList = {
	getParsedData: data => {
		const { entry } = data.feed;
		let podcasts = [];
		return entry.map(p => {
			return {
				name: p['im:name'].label,
				img: p['im:image'][0].label,
				author: p['im:artist'].label,
				id: p.id.attributes['im:id']
			};
		});
	},

	filterByText: (data, text) => {
		return data.filter(element => {
			return (
				element['name'].search(new RegExp(text, 'i')) != -1 ||
				element['author'].search(new RegExp(text, 'i')) != -1
			);
		});
	}
};

export default PodcastsList;

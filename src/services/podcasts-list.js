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

	filterByText: (data, text, props) => {
		const _text = text.trim();
		return data.filter(element => {
			for (let i = 0; i < props.length; i++) {
				const found =
					element[props[i]].search(new RegExp(_text, 'i')) != -1;
				if (found) return true;
			}
			return false;
		});
	}
};

export default PodcastsList;

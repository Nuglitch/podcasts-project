const PodcastsList = {
	getParsedData: data => {
		const { entry } = data.feed;
		return entry.map(p => {
			return {
				name: p['im:name'].label,
				img: p['im:image'][2].label,
				author: p['im:artist'].label,
				id: p.id.attributes['im:id'],
				summary: (p.summary) ? p.summary.label || '' : ''
			};
		});
	},

	filterByText: (data, text, props) => {
		const _text = text.trim();
		return data.filter(element => {
			for (let i = 0; i < props.length; i++) {
				const found =
					element[props[i]].search(new RegExp(_text, 'i')) !== -1;
				if (found) return true;
			}
			return false;
		});
	},

	load: (data, propName, value) => {
		if (!data || !data.length) {
			return false;
		}
		return data.find(e => (
			e[propName] === value
		));
		// for (let i = 0; i < data.length; i++) {
		// 	if (data[i][propName] === value) {
		// 		return data[i];
		// 	}
		// }
		// return false;
	}
};

export default PodcastsList;

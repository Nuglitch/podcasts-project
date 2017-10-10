const _getElementsByTagName = (xml, tagName, nameSpace) => {
	let tagItem = xml.getElementsByTagName(tagName);
	if (!tagItem[0] && nameSpace) {
		tagItem = xml.getElementsByTagNameNS(nameSpace, tagName);
	}
	return tagItem[0];
};

const _getValueByTagName = (xml, tagName, nameSpace) => {
	const element = _getElementsByTagName(xml, tagName, nameSpace);
	if (!element) {
		return '';
	}
	return element.innerHTML.replace("<![CDATA[", "").replace("]]>", "");
};

const _getParsedDate = date => {
	const _date = new Date(date);
	// Year part from the timestamp
	const year = _date.getFullYear();
	// Month part from the timestamp
	const month = `0${_date.getMonth()}`.substr(-2);
	// Day part from the timestamp
	const day = `0${_date.getDay()}`.substr(-2);
	return `${day}-${month}-${year}`;
};

const _getParsedId = id => {
	const splitId = id.split('.com/');
	if (!splitId[1]) {
		return id; //not url id
	}
	return splitId[1].replace('/', '-');
};

const _getParsedDuration = duration => {
	if (duration.includes(':')) {
		return duration; //already with correct format
	}
	const sec_num = parseInt(duration, 10);
    const hours   = Math.floor(sec_num / 3600);
    const minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    const seconds = sec_num - (hours * 3600) - (minutes * 60);

    return `0${hours}`.substr(-2) + ':' + `0${minutes}`.substr(-2) + ':' + `0${seconds}`.substr(-2);
}

const DataManager = {
	getPodcastsListData: data => {
		const { entry } = data.feed;
		return entry.map(p => {
			return {
				name: p['im:name'].label,
				img: p['im:image'][2].label,
				author: p['im:artist'].label,
				id: p.id.attributes['im:id'],
				summary: p.summary ? p.summary.label || '' : ''
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

	getItemByProp: (data, propName, value) => {
		if (!data || !data.length) {
			return false;
		}
		return data.find(e => e[propName] === value);
	},

	getPodcastEpisodeData: data => {
		let nameSpace = _getElementsByTagName(data, 'rss');
		nameSpace = nameSpace ? nameSpace.getAttribute('xmlns:itunes') : false;

		const items = data.querySelectorAll('item');
		let result = [];
		items.forEach(item => {
			const enclosureElem = _getElementsByTagName(item, 'enclosure', nameSpace);
			result.push({
				title: _getValueByTagName(item, 'title', nameSpace),
				description: _getValueByTagName(item, 'description', nameSpace),
				pubDate: _getParsedDate(
					_getValueByTagName(item, 'pubDate', nameSpace)
				),
				duration: _getParsedDuration(_getValueByTagName(item, 'duration', nameSpace)),
				enclosure: enclosureElem ? enclosureElem.getAttribute('url') : '',
				id: _getParsedId(_getValueByTagName(item, 'guid', nameSpace))
			});
		});
		return result;
	}
};


export default DataManager;

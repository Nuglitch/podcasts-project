const LocalStorage = {
	save: (key, jsonData, expirationMin) => {
		if (!localStorage) {
			return false;
		}
		const expirationMS = expirationMin * 60 * 1000;
		const record = {
			value: JSON.stringify(jsonData),
			timestamp: new Date().getTime() + expirationMS
		};
		localStorage.setItem(key, JSON.stringify(record));
		return jsonData;
	},
	load: key => {
		if (!localStorage) {
			return false;
		}
		let record = localStorage.getItem(key);
		if (!record) {
			return false;
		}
		record = JSON.parse(record);
		if (!record) {
			return false;
		}
		return (
			new Date().getTime() < record.timestamp && JSON.parse(record.value)
		);
	}
};

export default LocalStorage;

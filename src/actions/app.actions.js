import types from './types';

export const startLoading = () => {
	return {
		type: types.START_LOADING
	};
};

export const finishLoading = () => {
	return {
		type: types.FINISH_LOADING
	};
};

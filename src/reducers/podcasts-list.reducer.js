import types from 'actions/types';

export const podcastsListReducer = (
	state = { podcasts: [], filter: '' },
	action
) => {
	switch (action.type) {
		case types.FETCH_PODCASTS_REQUEST:
			return { ...state, podcasts: [] };
		case types.FETCH_PODCASTS_SUCCESS:
			return { ...state, podcasts: action.payload };
		case types.FETCH_PODCASTS_ERROR:
			return { ...state };
		case types.SET_LIST_FILTER:
			return { ...state, filter: action.payload };
	}
	return state;
};

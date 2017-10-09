import types from 'actions/types';

export const podcastDetailReducer = (
	state = { podcast: {} },
	action
) => {
	switch (action.type) {
		case types.FETCH_PODCAST_DETAIL_REQUEST:
			return { ...state, podcast: {} };
		case types.FETCH_PODCAST_DETAIL_SUCCESS:
			return { ...state, podcast: action.payload };
		case types.FETCH_PODCAST_DETAIL_ERROR:
			return { ...state };
	}
	return state;
};

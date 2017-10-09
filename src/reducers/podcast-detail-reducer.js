import types from 'actions/types';

export const podcastDetailReducer = (
	state = { podcastEpisodes: [] },
	action
) => {
	switch (action.type) {
		case types.FETCH_PODCAST_DETAIL_REQUEST:
			return { ...state, podcastEpisodes: [] };
		case types.FETCH_PODCAST_DETAIL_SUCCESS:
			return { ...state, podcastEpisodes: action.payload };
		case types.FETCH_PODCAST_DETAIL_ERROR:
			return { ...state };
	}
	return state;
};

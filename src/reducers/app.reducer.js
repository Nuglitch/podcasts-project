import types from 'actions/types';

export const appReducer = (
	state = { loading: false },
	action
) => {
	switch (action.type) {
		case types.START_LOADING:
			return { ...state, loading: true };
		case types.FINISH_LOADING:
			return { ...state, loading: false };
	}
	return state;
};

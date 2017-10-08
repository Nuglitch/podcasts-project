import types from './types';
import { fetchPodcastsListAPI } from 'api';
import PodcastsList from 'services/podcasts-list';
import LocalStorage from 'services/local-storage';
import * as consts from 'consts';

export const fetchPodcastsList = () => {
	return dispatch => {
		let podcasts = LocalStorage.load(consts.PODCASTS_KEY_STORAGE);
		if (podcasts) {
			dispatch(fetchPodcastsListSuccess(podcasts));
		} else {
			dispatch(fetchPodcastsListRequest());
			return fetchPodcastsListAPI().then(([response, json]) => {
				if (response.status === 200) {
					podcasts = PodcastsList.getParsedData(json);
					LocalStorage.save(
						consts.PODCASTS_KEY_STORAGE,
						podcasts,
						24 * 60
					); //1 day
					dispatch(fetchPodcastsListSuccess(podcasts));
				} else {
					dispatch(fetchPodcastsListError());
				}
			});
		}
	};
};

const fetchPodcastsListRequest = () => {
	return {
		type: types.FETCH_PODCASTS_REQUEST
	};
};

const fetchPodcastsListSuccess = payload => {
	return {
		type: types.FETCH_PODCASTS_SUCCESS,
		payload
	};
};

const fetchPodcastsListError = () => {
	return {
		type: types.FETCH_PODCASTS_ERROR
	};
};

export const setListFilter = payload => {
	return {
		type: types.SET_LIST_FILTER,
		payload
	};
};

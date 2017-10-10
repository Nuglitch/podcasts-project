import types from './types';
import { fetchPodcastsListAPI } from 'api';
import DataManager from 'services/data-manager';
import LocalStorage from 'services/local-storage';
import * as consts from 'consts';

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

export const fetchPodcastsList = () => {
	return dispatch => {
		let podcasts = LocalStorage.load(consts.PODCASTS_KEY_STORAGE);
		if (podcasts) {
			return dispatch(fetchPodcastsListSuccess(podcasts));
		}
		dispatch(fetchPodcastsListRequest());
		return fetchPodcastsListAPI().then(([response, json]) => {
			if (response.status === 200) {
				podcasts = DataManager.getPodcastsListData(json);
				LocalStorage.save(
					consts.PODCASTS_KEY_STORAGE,
					podcasts,
					24 * 60 //1 day
				);
				dispatch(fetchPodcastsListSuccess(podcasts));
			} else {
				throw new Error('Response status is not 200');
			}
		}).catch(e => {
			console.log('Error', e);
			dispatch(fetchPodcastsListError());
		});
	};
};


export const setListFilter = payload => {
	return {
		type: types.SET_LIST_FILTER,
		payload
	};
};

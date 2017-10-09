import types from './types';
import { fetchPodcastAPI } from 'api';
import PodcastsDetail from 'services/podcast-detail';
import LocalStorage from 'services/local-storage';
import * as consts from 'consts';

const fetchPodcastsDetailRequest = () => {
	return {
		type: types.FETCH_PODCAST_DETAIL_REQUEST
	};
};

const fetchPodcastsDetailSuccess = payload => {
	return {
		type: types.FETCH_PODCAST_DETAIL_SUCCESS,
		payload
	};
};

const fetchPodcastsDetailError = () => {
	return {
		type: types.FETCH_PODCAST_DETAIL_ERROR
	};
};

export const fetchPodcastsDetail = (id) => {
	return dispatch => {
		let podcast = LocalStorage.load(`${consts.PODCAST_DETAIL_KEY_STORAGE}_${id}`);
		if (podcast) {
			return dispatch(fetchPodcastsDetailSuccess(podcast));
		}
		dispatch(fetchPodcastsDetailRequest());
		return fetchPodcastAPI(id).then(([response, json]) => {
			if (response.status === 200) {
				podcast = PodcastsDetail.getParsedData(json);
				LocalStorage.save(
					`${consts.PODCAST_DETAIL_KEY_STORAGE}_${id}`,
					podcast,
					24 * 60 //1 day
				);
				dispatch(fetchPodcastsDetailSuccess(podcast));
			} else {
				throw new Error('Response status is not 200');
			}
		}).catch(e => {
			console.log('Error', e);
			dispatch(fetchPodcastsDetailError());
		});
	};
};

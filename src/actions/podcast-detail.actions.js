import types from './types';
import { fetchPodcastEpisodesFromId } from 'api';
import DataManager from 'services/data-manager';
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

export const fetchPodcastsDetail = id => {
	return dispatch => {
		const podcastDetail = LocalStorage.load(
			`${consts.PODCAST_DETAIL_KEY_STORAGE}_${id}`
		);
		if (podcastDetail) {
			return dispatch(fetchPodcastsDetailSuccess(podcastDetail));
		}
		dispatch(fetchPodcastsDetailRequest());
		return fetchPodcastEpisodesFromId(id)
			.then(([response, xml]) => {
				if (response.status === 200) {
					const episodes = DataManager.getPodcastEpisodeData(xml);
					LocalStorage.save(
						`${consts.PODCAST_DETAIL_KEY_STORAGE}_${id}`,
						episodes,
						24 * 60 //1 day
					);
					dispatch(fetchPodcastsDetailSuccess(episodes));
				} else {
					throw new Error('Response status is not 200');
				}
			})
			.catch(e => {
				console.log('Error', e);
				dispatch(fetchPodcastsDetailError());
			});
	};
};

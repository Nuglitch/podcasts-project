import types from './types';
import { fetchPodcastEpisodesFromId } from 'api';
import DataManager from 'services/data-manager';
import LocalStorage from 'services/local-storage';
import * as consts from 'consts';
import { startLoading, finishLoading } from './app.actions';

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
		dispatch(startLoading());
		const podcastDetail = LocalStorage.load(
			`${consts.PODCAST_DETAIL_KEY_STORAGE}_${id}`
		);
		if (podcastDetail) {
			dispatch(finishLoading());
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
					dispatch(finishLoading());
					dispatch(fetchPodcastsDetailSuccess(episodes));
				} else {
					throw new Error('Response status is not 200');
				}
			})
			.catch(e => {
				console.log('Fetch error -> ', e);
				dispatch(finishLoading());
				dispatch(fetchPodcastsDetailError());
			});
	};
};

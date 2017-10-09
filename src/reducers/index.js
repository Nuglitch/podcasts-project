import { combineReducers } from 'redux';
import { podcastsListReducer } from './podcasts-list.reducer';
import { podcastDetailReducer } from './podcast-detail-reducer';

const rootReducer = combineReducers({
	podcastsListReducer,
	podcastDetailReducer
});

export default rootReducer;

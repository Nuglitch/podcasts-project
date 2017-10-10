import { combineReducers } from 'redux';
import { appReducer } from './app.reducer';
import { podcastsListReducer } from './podcasts-list.reducer';
import { podcastDetailReducer } from './podcast-detail-reducer';

const rootReducer = combineReducers({
	appReducer,
	podcastsListReducer,
	podcastDetailReducer
});

export default rootReducer;

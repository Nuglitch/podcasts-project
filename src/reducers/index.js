import { combineReducers } from 'redux';
import { podcastsListReducer } from './podcasts-list.reducers';

const rootReducer = combineReducers({
	podcastsListReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import store from './reducers';

const rootReducers = combineReducers({
    store: store
});

export default rootReducers;
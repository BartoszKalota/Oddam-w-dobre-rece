import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import fetchingOrganisationsReducer from './fetchingOrganisationsReducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  fetchingOrganisations: fetchingOrganisationsReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import fetchingOrganisationsReducer from './fetchingOrganisationsReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  fetchingOrganisations: fetchingOrganisationsReducer,
  form: reduxFormReducer
});

export default rootReducer;
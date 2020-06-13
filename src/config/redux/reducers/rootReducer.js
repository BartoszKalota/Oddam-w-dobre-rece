import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import fetchingOrganisationsReducer from './fetchingOrganisationsReducer';
import dialogSwitcherReducer from './dialogSwitcherReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  fetchingOrganisations: fetchingOrganisationsReducer,
  dialogSwitcher: dialogSwitcherReducer,
  form: reduxFormReducer
});

export default rootReducer;
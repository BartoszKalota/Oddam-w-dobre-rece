import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import fetchingOrganisationsReducer from './fetchingOrganisationsReducer';
import dialogSwitcherReducer from './dialogSwitcherReducer';
import fetchingUserReducer from './fetchingUserReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  fetchingOrganisations: fetchingOrganisationsReducer,
  dialogSwitcher: dialogSwitcherReducer,
  form: reduxFormReducer,
  user: fetchingUserReducer
});

export default rootReducer;
import { logoutDisplayed, closeDialog } from './dialogSwitcherAction';

export const FETCHING_USER_STARTED = 'FETCHING_USER_STARTED';
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';
export const FETCHING_USER_ERROR = 'FETCHING_USER_ERROR';
export const CLEAR_USER_ERROR = 'CLEAR_USER_ERROR';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

export const fetchingUserStarted = () => ({
  type: FETCHING_USER_STARTED
});
export const fetchingUserSuccess = (payload) => ({
  type: FETCHING_USER_SUCCESS,
  payload
});
export const fetchingUserError = (payload) => ({
  type: FETCHING_USER_ERROR,
  payload
});
export const clearUserError = () => ({
  type: CLEAR_USER_ERROR
});
export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS
});

export const loginUser = ({ email, password }) => (dispatch, getState, { getFirebase }) => {
  dispatch(fetchingUserStarted());
  const firebase = getFirebase();
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      const userEmail = firebase.auth().currentUser.email;
      dispatch(fetchingUserSuccess(userEmail));
      dispatch(closeDialog());
    })
    .catch(err => {
      console.error(err);
      dispatch(fetchingUserError('Niepoprawny adres email lub hasło.'));
    });
};

export const logoutUser = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth()
    .signOut()
    .then(() => {
      dispatch(logoutUserSuccess());
      dispatch(logoutDisplayed());
    })
    .catch(err => console.error(err));
};

export const registerUser = ({ email, password }) => (dispatch, getState, { getFirebase }) => {
  dispatch(fetchingUserStarted());
  const firebase = getFirebase();
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const userEmail = firebase.auth().currentUser.email;
      dispatch(fetchingUserSuccess(userEmail));
      dispatch(closeDialog());
    })
    .catch(err => {
      console.error(err);
      let msg = 'Błąd połączenia! Zajrzyj do konsoli.';
      if (err.code === 'auth/email-already-in-use') {
        msg = 'Podany adres email jest już używany.';
      }
      dispatch(fetchingUserError(msg));
    });
};
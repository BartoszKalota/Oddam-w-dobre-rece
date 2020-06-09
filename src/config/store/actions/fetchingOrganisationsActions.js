export const FETCHING_STARTED = 'FETCHING_STARTED';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_ERROR = 'FETCHING_ERROR';

export const fetchingStarted = () => ({
  type: FETCHING_STARTED
});
export const fetchingSuccess = (payload) => ({
  type: FETCHING_SUCCESS,
  payload
});
export const fetchingError = (payload) => ({
  type: FETCHING_ERROR,
  payload
});

export const fetchingOrganisations = () => (dispatch, getState, { getFirebase, getFirestore }) => { // usunięcie dowolnego niaktywnego parametru spowoduje błąd
  dispatch(fetchingStarted());
  const firestore = getFirestore();
  firestore
    .collection('home_listOfOrganisations')
    .get()
    .then(snapshot => {
      const array = [];
      snapshot.docs.forEach(doc => array.push( doc.data() ));
      dispatch(fetchingSuccess(array));
    })
    .catch(err => dispatch(fetchingError(err)));
};
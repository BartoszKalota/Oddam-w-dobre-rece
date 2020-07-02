export const FETCHING_FORMMAIN_STARTED = 'FETCHING_FORMMAIN_STARTED';
export const FETCHING_FORMMAIN_SUCCESS = 'FETCHING_FORMMAIN_SUCCESS';
export const FETCHING_FORMMAIN_ERROR = 'FETCHING_FORMMAIN_ERROR';

export const fetchingFormMainStarted = () => ({
  type: FETCHING_FORMMAIN_STARTED
});
export const fetchingFormMainSuccess = (payload) => ({
  type: FETCHING_FORMMAIN_SUCCESS,
  payload
});
export const fetchingFormMainError = (payload) => ({
  type: FETCHING_FORMMAIN_ERROR,
  payload
});

export const fetchingFormMain = () => (dispatch, getState, { getFirebase, getFirestore }) => {
  dispatch(fetchingFormMainStarted());
  const firestore = getFirestore();
  firestore
    .collection('formMain')
    .get()
    .then(snapshot => {
      const arr = [];
      snapshot.docs.forEach(doc => arr.push(doc.data()));
      const obj = {
        firstPage: arr[0],
        secondPage: arr[1],
        thirdPage: arr[2]
      };
      dispatch(fetchingFormMainSuccess(obj));
    })
    .catch(err => dispatch(fetchingFormMainError(err)));
};
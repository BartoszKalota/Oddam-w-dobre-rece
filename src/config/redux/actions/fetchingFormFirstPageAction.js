export const FETCHING_FIRSTPAGE_STARTED = 'FETCHING_FIRSTPAGE_STARTED';
export const FETCHING_FIRSTPAGE_SUCCESS = 'FETCHING_FIRSTPAGE_SUCCESS';
export const FETCHING_FIRSTPAGE_ERROR = 'FETCHING_FIRSTPAGE_ERROR';

export const fetchingFormFirstPageStarted = () => ({
  type: FETCHING_FIRSTPAGE_STARTED
});
export const fetchingFormFirstPageSuccess = (payload) => ({
  type: FETCHING_FIRSTPAGE_SUCCESS,
  payload
});
export const fetchingFormFirstPageError = (payload) => ({
  type: FETCHING_FIRSTPAGE_ERROR,
  payload
});

export const fetchingFormFirstPage = () => (dispatch, getState, { getFirebase, getFirestore }) => {
  dispatch(fetchingFormFirstPageStarted());
  const firestore = getFirestore();
  firestore
    .collection('formMain_firstPage')
    .get()
    .then(snapshot => {
      let data;
      snapshot.docs.forEach(doc => data = doc.data());
      const { importantTitle, importantDescr, formHeader, checkboxesArr } = data;
      const obj = {
        importantTitle,
        importantDescr,
        formHeader,
        checkboxesArr
      };
      dispatch(fetchingFormFirstPageSuccess(obj));
    })
    .catch(err => dispatch(fetchingFormFirstPageError(err)));
};
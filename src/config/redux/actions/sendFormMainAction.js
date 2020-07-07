export const SENDING_FORMMAIN_STARTED = 'SENDING_FORMMAIN_STARTED';
export const SENDING_FORMMAIN_SUCCESS = 'SENDING_FORMMAIN_SUCCESS';
export const SENDING_FORMMAIN_ERROR = 'SENDING_FORMMAIN_ERROR';

export const sendingFormMainStarted = () => ({
  type: SENDING_FORMMAIN_STARTED
});
export const sendingFormMainSuccess = () => ({
  type: SENDING_FORMMAIN_SUCCESS
});
export const sendingFormMainError = (payload) => ({
  type: SENDING_FORMMAIN_ERROR,
  payload
});

export const sendFormMain = () => (dispatch, getState, { getFirebase, getFirestore }) => {
  dispatch(sendingFormMainStarted());
  const firestore = getFirestore();
  const userEmail = getState().user.userEmail;
  const values = getState().form.formMain.values;
  firestore
    .collection('users')
    .doc(userEmail)
    .collection('sentForms')
    .doc()
    .set({ values })
    .then(() => dispatch(sendingFormMainSuccess()))
    .catch(err => dispatch(sendingFormMainError(err)));
};
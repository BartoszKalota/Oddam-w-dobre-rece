import {
  FETCHING_USER_STARTED,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_ERROR,
  LOGOUT_USER_SUCCESS
} from '../actions/fetchingUserAction';

const initState = {
  isFetchingUser: false,
  userEmail: '',
  userError: ''
};

const fetchingUserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCHING_USER_STARTED:
      return {
        ...state,
        isFetchingUser: true
      };
    case FETCHING_USER_SUCCESS:
      return {
        isFetchingUser: false,
        userEmail: payload,
        userError: ''
      };
    case FETCHING_USER_ERROR:
      return {
        isFetchingUser: false,
        userEmail: '',
        userError: 'Niepoprawny adres email lub hasło.'
      };
    case LOGOUT_USER_SUCCESS:
      return initState;
    default:
      return state;
  }
};

export default fetchingUserReducer;
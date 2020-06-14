import {
  FETCHING_USER_STARTED,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_ERROR
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
        isFetching: true
      };
    case FETCHING_USER_SUCCESS:
      return {
        isFetching: false,
        userEmail: payload,
        userError: ''
      };
    case FETCHING_USER_ERROR:
      return {
        isFetching: false,
        userEmail: '',
        userError: 'Niepoprawny adres email lub hasło.'
      };
    default:
      return state;
  }
};

export default fetchingUserReducer;
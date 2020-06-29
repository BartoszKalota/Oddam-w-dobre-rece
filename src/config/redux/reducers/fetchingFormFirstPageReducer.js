import {
  FETCHING_FIRSTPAGE_STARTED,
  FETCHING_FIRSTPAGE_SUCCESS,
  FETCHING_FIRSTPAGE_ERROR
} from '../actions/fetchingFormFirstPageAction';

const initState = {
  isFetching: false,
  data: null,
  error: null
};

const fetchingFormFirstPageReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCHING_FIRSTPAGE_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_FIRSTPAGE_SUCCESS:
      return {
        isFetching: false,
        data: payload,
        error: null
      };
    case FETCHING_FIRSTPAGE_ERROR:
      return {
        isFetching: false,
        data: null,
        error: payload
      };
    default:
      return state;
  }
};

export default fetchingFormFirstPageReducer;
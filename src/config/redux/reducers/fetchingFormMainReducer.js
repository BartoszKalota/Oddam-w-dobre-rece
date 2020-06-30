import {
  FETCHING_FORMMAIN_STARTED,
  FETCHING_FORMMAIN_SUCCESS,
  FETCHING_FORMMAIN_ERROR
} from '../actions/fetchingFormMainAction';

const initState = {
  isFetching: false,
  data: null,
  error: null
};

const fetchingFormMainReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCHING_FORMMAIN_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_FORMMAIN_SUCCESS:
      return {
        isFetching: false,
        data: payload,
        error: null
      };
    case FETCHING_FORMMAIN_ERROR:
      return {
        isFetching: false,
        data: null,
        error: payload
      };
    default:
      return state;
  }
};

export default fetchingFormMainReducer;
import {
  FETCHING_FORMMAIN_STARTED,
  FETCHING_FORMMAIN_SUCCESS,
  FETCHING_FORMMAIN_ERROR
} from '../actions/fetchingFormMainAction';
import  {
  SENDING_FORMMAIN_STARTED,
  SENDING_FORMMAIN_SUCCESS,
  SENDING_FORMMAIN_ERROR
} from '../actions/sendFormMainAction';

const initState = {
  isFetching: false,
  data: null,
  error: null
};

const fetchingFormMainReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCHING_FORMMAIN_STARTED:
    case SENDING_FORMMAIN_STARTED:
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
    case SENDING_FORMMAIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null
      };
    case FETCHING_FORMMAIN_ERROR:
    case SENDING_FORMMAIN_ERROR:
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
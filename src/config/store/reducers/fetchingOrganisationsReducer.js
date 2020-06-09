import {
  FETCHING_STARTED,
  FETCHING_SUCCESS,
  FETCHING_ERROR
} from '../actions/fetchingOrganisationsActions';

const initState = {
  isFetching: false,
  data: null,
  error: null
};

const fetchingOrganisationsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCHING_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_SUCCESS:
      return {
        isFetching: false,
        data: payload,
        error: null
      };
    case FETCHING_ERROR:
      return {
        isFetching: false,
        data: null,
        error: payload
      };
    default:
      return state;
  }
};

export default fetchingOrganisationsReducer;
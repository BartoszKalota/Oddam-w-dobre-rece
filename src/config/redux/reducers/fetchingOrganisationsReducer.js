import {
  FETCHING_ORGANISATIONS_STARTED,
  FETCHING_ORGANISATIONS_SUCCESS,
  FETCHING_ORGANISATIONS_ERROR
} from '../actions/fetchingOrganisationsAction';

const initState = {
  isFetching: false,
  data: null,
  error: null
};

const fetchingOrganisationsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCHING_ORGANISATIONS_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_ORGANISATIONS_SUCCESS:
      return {
        isFetching: false,
        data: payload,
        error: null
      };
    case FETCHING_ORGANISATIONS_ERROR:
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
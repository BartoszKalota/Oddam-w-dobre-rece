import {
  LOGIN_MODE,
  REGISTER_MODE,
  LOGOUT_MODE,
  CLOSE
} from '../actions/dialogSwitcherAction';

const initState = {
  isOpened: false,
  mode: ''
};

const dialogSwitcherReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_MODE:
      return {
        isOpened: true,
        mode: LOGIN_MODE
      };
    case REGISTER_MODE:
      return {
        isOpened: true,
        mode: REGISTER_MODE
      };
    case LOGOUT_MODE:
      return {
        isOpened: true,
        mode: LOGOUT_MODE
      };
    case CLOSE:
      return {
        isOpened: false,
        mode: ''
      };
    default:
      return state;
  }
};

export default dialogSwitcherReducer;
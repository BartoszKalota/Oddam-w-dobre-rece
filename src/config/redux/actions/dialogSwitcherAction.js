export const LOGIN_MODE = 'LOGIN_MODE';
export const REGISTER_MODE = 'REGISTER_MODE';
export const LOGOUT_MODE = 'LOGOUT_MODE';
export const CLOSE = 'CLOSE';

export const loginDisplayed = () => ({
  type: LOGIN_MODE
});
export const registerDisplayed = () => ({
  type: REGISTER_MODE
});
export const logoutDisplayed = () => ({
  type: LOGOUT_MODE
});
export const closeDialog = () => ({
  type: CLOSE
});
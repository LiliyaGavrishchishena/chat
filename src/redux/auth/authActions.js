import types from './authActionTypes';

const signInRequest = () => ({
  type: types.LOGIN_REQUEST,
});

const signInSuccess = userName => ({
  type: types.LOGIN_SUCCESS,
  payload: userName,
});

const signInError = () => ({
  type: types.LOGIN_ERROR,
});

export default {
  signInRequest,
  signInSuccess,
  signInError,
};

import types from './authActionTypes';

const signIn = userName => ({
  type: types.LOGIN,
  payload: userName,
});

export default {
  signIn,
};

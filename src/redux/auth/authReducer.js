import types from './authActionTypes';

const INIT = '';

export default function authReducer(state = INIT, { type, payload }) {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return payload;

    case types.LOGIN_REQUEST:
    case types.LOGIN_ERROR:
      return INIT;

    default:
      return state;
  }
}

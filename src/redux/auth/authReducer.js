import types from './authActionTypes';

export default function authReducer(state = '', { type, payload }) {
  switch (type) {
    case types.LOGIN:
      return payload;

    default:
      return state;
  }
}

import types from './messagesActionsTypes';

export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    default:
      return state;
  }
}

import types from './messagesActionsTypes';

export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.ADD_MESSAGE:
      return [...state, payload];

    case types.EDIT_MESSAGE:
      return state.map(message =>
        message.id === payload.id ? payload : message,
      );
    case types.DELETE_MESSAGE:
      return state.filter(message => message.id !== payload);

    default:
      return state;
  }
}

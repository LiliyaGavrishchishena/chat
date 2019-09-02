import types from './likesActionTypes';

export default function likesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_LIKE:
      return state.includes(payload.id) ? state : [...state, payload.id];

    case types.REMOVE_LIKE:
      return state.filter(id => id !== payload.id);

    default:
      return state;
  }
}

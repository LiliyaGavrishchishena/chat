import types from './likesActionTypes';

const addLike = id => ({
  type: types.ADD_LIKE,
  payload: {
    id,
  },
});

const removeLike = id => ({
  type: types.REMOVE_LIKE,
  payload: {
    id,
  },
});
export default {
  addLike,
  removeLike,
};

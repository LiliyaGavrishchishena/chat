import types from './messagesActionsTypes';

const fetchDataRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchDataSuccess = messages => ({
  type: types.FETCH_SUCCESS,
  payload: messages,
});

const fetchDataError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const addMessage = message => ({
  type: types.ADD_MESSAGE,
  payload: message,
});

const editMessage = message => ({
  type: types.EDIT_MESSAGE,
  payload: message,
});

const deleteMessage = id => ({
  type: types.DELETE_MESSAGE,
  payload: id,
});

export default {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  addMessage,
  editMessage,
  deleteMessage,
};

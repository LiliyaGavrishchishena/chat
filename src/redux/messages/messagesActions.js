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

export default {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
};

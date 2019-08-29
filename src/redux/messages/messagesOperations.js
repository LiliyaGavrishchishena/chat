import axios from 'axios';
import actions from './messagesActions';

axios.defaults.baseURL = 'https://api.dev.buki.com.ua';

const fetchMessages = () => async dispatch => {
  dispatch(actions.fetchDataRequest());

  try {
    const response = await axios.get('/frontend_test');
    dispatch(actions.fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchDataError(error));
  }
};

export default { fetchMessages };

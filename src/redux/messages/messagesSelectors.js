import { createSelector } from 'reselect';
import * as moment from 'moment';

const getAllMessages = state => state.messages;

const getMessageLength = createSelector(
  getAllMessages,
  messages => messages.length,
);

const getUniqueUsers = createSelector(
  getAllMessages,
  messages => {
    const usersMessage = messages.map(message => message.user);
    return [...new Set(usersMessage)];
  },
);

const getUsersAvatar = createSelector(
  [getUniqueUsers, getAllMessages],
  (users, messages) => {
    const usersAvatar = users.map(user => {
      const { avatar } = messages.find(message => message.user === user);
      const userAvatar = {
        user,
        avatar,
      };
      return userAvatar;
    });
    return usersAvatar;
  },
);

const getUsersLength = createSelector(
  getUniqueUsers,
  users => users.length,
);

const getLastMessage = createSelector(
  getAllMessages,
  messages => {
    const messagesDate = messages.map(message => moment(message.created_at));
    return moment.max(messagesDate);
  },
);

export default {
  getAllMessages,
  getMessageLength,
  getUniqueUsers,
  getUsersLength,
  getLastMessage,
  getUsersAvatar,
};

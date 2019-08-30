/*eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// components
import MenuItemView from './ChatItemView';

import { likesActions } from '../../redux/likes';

class ChatItemContainer extends Component {
  state = {
    id: null,
    user: null,
    avatar: null,
    created_at: null,
    message: null,
  };

  render() {
    const { id, user, avatar, created_at, message } = this.state;
    const { addLike } = this.props;

    return (
      <MenuItemView
        data={{
          id,
          user,
          avatar,
          created_at,
          message,
        }}
        addLike={addLike}
      />
    );
  }
}

const mapDispatchToProps = {
  addLike: likesActions.addLike,
};

export default connect(
  null,
  mapDispatchToProps,
)(ChatItemContainer);

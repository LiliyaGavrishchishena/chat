import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { modalActions, modalSelectors } from '../../redux/modal';
import { messagesActions } from '../../redux/messages';

import styles from './ModalMessage.module.css';

const INITIAL_STATE = {
  id: null,
  message: '',
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'transparent',
    padding: '0',
  },
};
class ModalMessage extends Component {
  state = INITIAL_STATE;

  componentDidUpdate() {
    const { modalIsOpen, modalMessage } = this.props;
    const { id } = this.state;

    if (modalIsOpen && modalMessage.id !== id) {
      /*eslint-disable */
      this.setState({ ...modalMessage });
      /* eslint-enable */
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { editMessage, closeModal } = this.props;

    editMessage(this.state);
    closeModal();
  };

  render() {
    const { message } = this.state;
    const { modalIsOpen, closeModal } = this.props;
    return (
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <section className={styles.editor}>
          <form className={styles.form} onSubmit={this.handleSubmitForm}>
            <h1 className={styles.title}>Update Message</h1>

            <input
              className={styles.input}
              name="message"
              placeholder="Message"
              required
              value={message}
              onChange={this.handleChange}
            />

            <button className={styles.submit} type="submit">
              Update
            </button>
          </form>
        </section>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modalIsOpen: modalSelectors.modalIsOpen(state),
  modalMessage: modalSelectors.modalMessage(state),
});
const mapDispatchToProps = {
  closeModal: modalActions.closeModal,
  editMessage: messagesActions.editMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalMessage);

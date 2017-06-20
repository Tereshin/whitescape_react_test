import React, { Component } from 'react';
import ModalContent from '../modal-content/modal-content';

import styles from './modal.css';

class Modal extends Component {

  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  }

  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
  }

  onOverlayClick() {
    this.props.onClose();
  }

  onDialogClick(event) {
    event.stopPropagation();
  }

  render() {

    const { show } = this.props;

    return (
      <div className={(show) ? styles.modalBackdrop+' '+styles.modalIn : styles.modalBackdrop} onClick={this.onOverlayClick.bind(this)}>
        <div className={styles.modal} onClick={this.onDialogClick} >
          <div className={styles.modalHeader}>
            <span className={styles.modalClose} onClick={this.props.onClose}></span>
            <h4>Modal title</h4>
          </div>
          <div className={styles.modalBody}>
            <ModalContent></ModalContent>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;

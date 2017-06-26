import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import ModalContent from '../modal-content/modal-content';

import styles from './modal.css';

let ModalStyles = ClassNames.bind(styles);

class Modal extends Component {

  constructor(props) {
    super(props);

    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.listenKeyboard = this.listenKeyboard.bind(this);
  }

  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  }

  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard, true);
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
    let ClassName = ModalStyles({
      modalBackdrop: true,
      modalIn: show
    });

    
    return (
      <div className={ ClassName } onClick={ this.onOverlayClick }>
        <div className={styles.modal} onClick={ this.onDialogClick } >
          <div className={styles.modalHeader}>
            <span className={styles.modalClose} onClick={ this.props.onClose }></span>
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

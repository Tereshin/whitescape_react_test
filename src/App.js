import React, { Component } from 'react';
import Modal from './modal/modal';

import styles from './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { modalOpen: props.opened };
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal() {
    const state = this.state.modalOpen;
    this.setState( { 
      modalOpen: !state
    } );

    if (!state) {
      document.body.className = styles.noScroll;
    } else {
      document.body.className = '';
    }
  }
  
  render() {
    const { modalOpen } = this.state;
    return (
      <div>
        <Modal show={ modalOpen } onClose={ this.toggleModal }></Modal>
          
        <button className={styles.btn} onClick={ this.toggleModal }>
          <span>Open Modal</span>
        </button>
      </div>
    );
  }
}

export default App;

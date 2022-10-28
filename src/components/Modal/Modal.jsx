import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalWindow = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }

  onEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.hendleClick}>
        <div className={css.modal}>
          <img src={this.props.img} alt={this.props.alt} />
        </div>
      </div>,
      modalWindow
    );
  }
}

Modal.protoType = {
  img: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
};

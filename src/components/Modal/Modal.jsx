import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalWindow = document.querySelector('#modal-root');


export const Modal =({onClose,img,alt})=> {


  useEffect(()=>{add()
  return remove()
})

function add() {
  window.addEventListener('keydown', onEscape)
}
function remove(){
  window.addEventListener('keydown', onEscape)
}
  // componentDidMount() {
  //   window.addEventListener('keydown', this.onEscape);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onEscape);
  // }

  const onEscape = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const hendleClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };


    return createPortal(
      <div className={css.overlay} onClick={hendleClick}>
        <div className={css.modal}>
          <img src={img} alt={alt} />
        </div>
      </div>,
      modalWindow
    );
}

Modal.protoType = {
  img: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
};

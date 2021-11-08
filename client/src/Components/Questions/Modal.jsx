import React from 'react';

const Modal = (props) => {
  const { setModalVisible, component } = props;

  const CloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="modal-container">
      <button
        className="modal-close-button"
        type="button"
        onClick={CloseModal}
        style={{ top: '1%', left: '95%' }}
      >
        x
      </button>
      <div className="modal-component">
        {component}
      </div>
    </div>
  );
};

export default Modal;

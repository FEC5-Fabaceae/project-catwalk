import React from 'react';

const Modal = (props) => {
  const { component } = props;

  return (
    <div className="modal-container">
      <div className="modal-component">
        {component}
      </div>
    </div>
  );
};

export default Modal;

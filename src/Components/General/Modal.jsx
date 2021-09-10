import React from 'react';

const Modal = props =>{
  
  return(
    <div className="modal" id={props.ModalId} role="dialog">
      <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            {props.children}        
      </div>
  </div>
  );
}

export default Modal;
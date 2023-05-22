import React from 'react';

const Modal = props =>{
  
  return(
    <div className="modal" id={props.ModalId} role="dialog">
      <div className="modalFrame  p-2">
            {props.children}        
      </div>
  </div>
  );
}

export default Modal;
import React from 'react'
import $ from "jquery";


const Modal = props =>{
  const hideModal = () =>{
    $(`#${props.ModalId}`).modal('hide')
  }
  return(
    <div className="modal fade" id={props.ModalId} role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{props.ModalHeader}</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          {props.FormId?
          <button className ="btn btn-success" type="submit" onClick={hideModal} form={props.FormId}>Update</button>
          :null}
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Modal;
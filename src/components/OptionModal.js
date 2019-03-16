import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
<Modal 
isOpen={!!props.selectedOption}
onRequestClose = {props.handleClearSelectedOption} 
contentLabel="Selected option"
closeTimeoutMS={200}
className="modal">
<h3 className="modal__title">selected option</h3>
<p className="modal__body">{props.selectedOption}</p>
<button className="button" onClick={props.handleClearSelectedOption}>Okey</button>
</Modal>
);

export  default OptionModal;
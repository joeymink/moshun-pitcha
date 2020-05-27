import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import './full-screen-gif.css';

export default ({selected_gif, on_close_gif}) => {
	if (selected_gif === null) {
		return null;
	} else {
		return (
      <Modal
      	show={true}
      	dialogClassName="modal-90w"
      	onHide={
      		// A cheat, as onHide will be triggered again as a result
      		// of this component re-rendering from a dispatched
      		()=>{setTimeout(on_close_gif, 0)}
      	}
      	backdrop={true}
      >
        <Modal.Body className="bg-dark">
					<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src={selected_gif}
					  	allowFullScreen></iframe>
					</div>
        </Modal.Body>
      </Modal>
	);
	}
};
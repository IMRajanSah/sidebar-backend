import React,{useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import "../App.css"
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'

const FormModal = (props) => {
    console.log(props.id);
    console.log(props.type);
    const [show, setshow] = useState(true);
    return (
        <>
            <Modal
        show={show}
        onHide={() => setshow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header style={{backgroundColor:"blue",color:"white"}}>
          <Modal.Title >
            Edit Class Data ID:{props.id}
          </Modal.Title>
          <Link onClick={()=>{setshow(false)}}><RiIcons.RiCloseCircleLine/></Link>
        </Modal.Header>
        <Modal.Body>
            hello
        </Modal.Body>
        <Modal.Footer>
        <Button size='sm' onClick={()=>{setshow(false)}}>Cancel</Button>
        <Button size='sm'>Submit</Button>
      </Modal.Footer>
      </Modal>

        </>
    )
}

export default FormModal

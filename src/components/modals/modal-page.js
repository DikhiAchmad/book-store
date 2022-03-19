import React from 'react'
import {Modal, ModalHeader, ModalBody, Button, ModalFooter} from 'reactstrap'
const ModalPage = ({onHandleModal, visible, title, children}) => {
  return (
    <Modal
        isOpen={visible}
        toggle={onHandleModal}
    >
        <ModalHeader toggle={onHandleModal}>
            {title}
        </ModalHeader>
        <ModalBody>
            {children}
        </ModalBody>
        <ModalFooter>
        <Button className='border-0' style={{backgroundColor: '#FF6565'}}>Simpan</Button>
        <Button className='border-0' style={{backgroundColor: '#FF6565'}} onClick={onHandleModal}>Batal</Button>
        </ModalFooter>
    </Modal>
  )
}

export default ModalPage
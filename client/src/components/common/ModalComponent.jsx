import { useState, useCallback } from 'react';
import { Modal } from 'react-bootstrap';


export const useModalControl = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    return { isOpen, openModal, closeModal };
};

const ModalComponent = ({ isOpen, closeModal, title, children }) => {
    return (
        <Modal className='d-flex justify-content-center ' show={isOpen} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};

export default ModalComponent;

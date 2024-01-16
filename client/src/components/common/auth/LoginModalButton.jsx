import { useState } from 'react';
import { Modal, Card } from 'react-bootstrap';
import LoginForm from './AuthForm';
import styles from './LoginModalButton.module.css';

const LoginModalButton = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Handle login logic here
    //     handleClose();
    // };

    return (
        <>
            <Card className={styles["card-style"]} onClick={handleShow}>
                <Card.Body className='m-2'>
                    {children}
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Authentication</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LoginModalButton;

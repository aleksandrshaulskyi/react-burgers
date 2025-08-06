import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import { useEffect } from 'react'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import ModalOverlay from '../modal-overlay/modal-overlay'

import ModalStyles from './modal.module.css'


const modalRoot = document.getElementById('modal')


export default function Modal({ header, children, handleClose }) {
    useEffect(
        () => {
            function handleKeyDown(event) {
                if (event.key === 'Escape') {
                    handleClose()
                }
            }

            document.addEventListener('keydown', handleKeyDown)
            return () => {
                document.removeEventListener('keydown', handleKeyDown)
            }
        }, 
        [handleClose]
    );

    return ReactDOM.createPortal(
        (
            <>
                <ModalOverlay onClick={handleClose} />
                <div className={ModalStyles.mainContainer}>
                    <div className='mt-10 mr-10 mb-15 ml-10'>
                        <div className={ModalStyles.headerContainer}>
                            <div className={ModalStyles.header}>
                                <p className='text text_type_main-medium'>{header}</p>
                            </div>
                            <div className={ModalStyles.button} onClick={handleClose}>
                                <CloseIcon type='primary' />
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </>
        ),
        modalRoot
    )
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    handleClose: PropTypes.func.isRequired
};

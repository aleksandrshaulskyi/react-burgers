import PropTypes from 'prop-types';

import ModalOverlayStyles from './modal-overlay.module.css'


export default function ModalOverlay({ onClick }) {
    return (
        <div className={ModalOverlayStyles.overlay} onClick={onClick}></div>
    )
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
};

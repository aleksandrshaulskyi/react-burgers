import ModalOverlayStyles from './modal-overlay.module.css'


export default function ModalOverlay({ onClick }) {
    return (
        <div className={ModalOverlayStyles.overlay} onClick={onClick}></div>
    )
}
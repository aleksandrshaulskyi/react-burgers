import ReactDOM from 'react-dom'

import NotificationStyles from './notification.module.css'


const notificationRoot = document.getElementById('notification')

export default function Notification(props) {
    const { error, handleClose } = props

    return ReactDOM.createPortal (
        (
            <div className={NotificationStyles.wrapper}>
                <div className={NotificationStyles.container}>
                    <p>{error}</p>
                    <button
                        className={NotificationStyles.closeButton}
                        onClick={handleClose}
                        aria-label='Закрыть'
                        >
                        &times;
                    </button>
                </div>
            </div>
        ),
        notificationRoot
    )
}

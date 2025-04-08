import { useEffect } from 'react';

function Modal({ onChangeModal, children }) {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onChangeModal(false);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return (
        <>
            <div className='modal modal--open'>
                <div className='modal-backdrop' onClick={() => onChangeModal(false)}></div>
                <div className='modal-container'>{children}</div>
            </div>
        </>
    );
}

export default Modal;

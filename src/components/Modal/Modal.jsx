function Modal({ title, children, onClose }) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;

import "./Modal.css";

export default function Modal({ title, onClose, children }) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <h2 className="modal-title text-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

import "./Modal.css";
import Modal from "./Modal";

function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2 className="modal-title text-title">{restaurant.name}</h2>
      <div className="restaurant-info">
        <p className="restaurant-info__description text-body">
          {restaurant.description}
        </p>
      </div>
      <div className="button-container">
        <button
          className="button button--primary text-caption"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </Modal>
  );
}

export default RestaurantDetailModal;

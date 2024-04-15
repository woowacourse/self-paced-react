import Modal from "./Modal";

import "./RestaurantDetailModal.css";

export default function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal title={restaurant.name} onClose={onClose}>
      <div className="restaurant-info">
        <p className="restaurant-info__description text-body">{restaurant.description}</p>
      </div>
      <div className="button-container">
        <button className="button button--primary text-caption" onClick={onClose}>
          닫기
        </button>
      </div>
    </Modal>
  );
}
